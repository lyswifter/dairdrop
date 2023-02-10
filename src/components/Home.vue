<script lang="ts">

import { defineComponent, ref } from 'vue';
import { ElMessage, ElPopover } from "element-plus";

import { Projects } from "../data/projects";
import { RecommendationItem } from "../data/types";
import { domain } from "../router/domain";

import { ethers } from "ethers";
import { handlePubkey } from "../utils/util";

import axios from "axios";

let loginUrl = domain.domainBaseUrl + "/api/did-user/no-email-login"
let participatedListUrl = domain.domainBaseUrl + "/api/airdrop/list"
let twitterUserInfoUrl = domain.domainBaseUrl + "/api/airdrop/twitter/"
let finishedRateUrl = domain.domainBaseUrl + "/api/airdrop/joinStatus/full"

interface ParticipateItem {
    name: string;
    url: string;
    state: number;
}

export default defineComponent({
    name: "Home",
    components: {
    },
    data() {
        return {
            account: "Connect",
            isConnect: false,
            participated: [] as ParticipateItem[],
            recommendations: [] as RecommendationItem[][],
        }
    },
    mounted() {
        let referAddr = this.getQueryString('refer');
        if (referAddr) {
            localStorage.setItem("refer", referAddr);
        }

        let code = this.getQueryString('code');
        if (code) {
            localStorage.setItem("code", code);
            this.accessTokenAction()
        }

        let pin = 3
        let projectss = Projects['production'] as RecommendationItem[];
        let len = projectss.length;
        let lineNum = len % pin === 0 ? len / pin : Math.floor((len / pin) + 1);
        let res = []
        for (let i = 0; i < lineNum; i++) {
            let temp = projectss.slice(i * pin, i * pin + pin);
            res.push(temp);
        }
        this.recommendations = res;

        let localItem = window.localStorage.getItem("WalletAccount");
        if (localItem == null || localItem == undefined) {
            this.account = "Connect"
            this.isConnect = false
        } else {
            this.account = localItem
            this.isConnect = true
        }

        let localToken = window.localStorage.getItem("token");
        if (localToken) {
            this.participatedList()
            this.finishedRate()
        }
    },
    methods: {
        finishedRate() {
            const res = axios.get(finishedRateUrl, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            }).then((res) => {
                if (res.data.code == 0) {
                    for (let j = 0; j < this.recommendations.length; j++) {
                        const inner = this.recommendations[j] as RecommendationItem[];

                        for (let k = 0; k < inner.length; k++) {
                            const core = inner[k] as RecommendationItem;

                            for (let i = 0; i < res.data.data.length; i++) {
                                const outer = res.data.data[i];

                                if (core.id == outer.airdropId) {
                                    let prog = Math.floor(outer.verifySuccessCount / outer.needVerifyCount * 100);
                                    core.process = prog;
                                    break
                                }
                            }
                        }
                    }
                } else {
                    ElMessage.error(res.data.msg)
                    return
                }
            })
        },
        accessTokenAction() {
            const res = axios.get(twitterUserInfoUrl + localStorage.getItem("code"), {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            }).then((res) => {
                if (res.data.code == 0) {
                    window.localStorage.setItem("w_user_id", res.data.data);
                    window.close()
                } else {
                    ElMessage.error(res.data.msg)
                    return
                }
            })
        },
        getQueryString(name: string) {
            let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
            let r = window.location.search.substring(1).match(reg);
            let context = '';
            if (r) {
                context = r[2];
            }
            return context ? context : '';
        },
        stringToUint8Array(str: string) {
            var arr = [];
            for (var i = 0, j = str.length; i < j; ++i) {
                arr.push(str.charCodeAt(i));
            }
            var tmpUint8Array = new Uint8Array(arr);
            return tmpUint8Array
        },
        reloadPage() {
            location.reload();
        },
        async connectAction() {
            if (typeof window.ethereum === 'undefined') {
                alert("Matamask is not installed!")
                return
            }

            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];

            // 1. create did
            let didAddr = "did:dmaster:" + account;
            let giving = "Hello!";

            const signRes = await window.ethereum.request({
                method: 'personal_sign',
                params: [giving, account],
            }) as string

            // const recoverRes = await window.ethereum.request({
            //     method: 'personal_ecRecover',
            //     params: [giving, signRes],
            // })
            // console.log(recoverRes)

            const publickKey = ethers.SigningKey.recoverPublicKey(ethers.hashMessage(giving), signRes)

            let document = {
                "@context": ["https://www.w3.org/ns/did/v1"],
                id: didAddr,
                verificationMethod: [
                    {
                        type: "Secp256k1VerificationKey",
                        id: didAddr + "#key-1",
                        controller: didAddr,
                        publicKeyHex: handlePubkey(publickKey),
                    },
                ],
                authentication: [didAddr + "#key-1"],
                assertionMethod: [didAddr + "#key-1"],
                keyAgreement: [didAddr + "#key-1"],
                capabilityInvocation: [didAddr + "#key-1"],
                capabilityDelegation: [didAddr + "#key-1"],
            };

            let stringify = JSON.stringify(document);
            let u8Array = this.stringToUint8Array(stringify);
            let base64Str = ethers.encodeBase64(u8Array)

            // 1.5 sign the did document
            const sign: string = await window.ethereum.request({
                method: 'personal_sign',
                params: [stringify, account],
            })
            console.log(sign)

            let signBase64 = ethers.encodeBase64(sign)
            console.log(signBase64)

            let referAddr = localStorage.getItem("refer");

            // 2. login without email
            const resLogin = await axios.post(loginUrl, {
                email: "",
                code: "",
                company: "",
                didAddress: didAddr,
                document: base64Str,
                singer: sign,
                invitation: referAddr ? referAddr : "",
            });

            console.log(resLogin)
            if (resLogin.data.code == 0) {
                localStorage.setItem("token", resLogin.data.data.token)
            } else {
                ElMessage.error(resLogin.data.msg)
                return
            }

            window.localStorage.setItem("WalletAccount", account as string);
            this.account = account
            this.isConnect = true

            this.finishedRate()
        },
        loadMoreAction() {
            ElMessage({
                message: "No more project",
                type: "warning",
            });
        },
        toDetailAction(id: number) {
            if (id == 8) {
                this.$router.push({ name: "coinhere", params: { id: id } })
            } else {
                this.$router.push({ name: "detail", params: { id: id } })
            }
        },
        disConnectAction() {
            this.account = "Connect"
            this.isConnect = false
            localStorage.clear()
            location.reload();
        },
        async participatedList() {
            let projectss = Projects['production'] as RecommendationItem[]

            // 1. request randomness number
            const res = await axios.get(participatedListUrl, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });

            if (res.data.code == 0) {
                console.log(res.data.data)
                for (let i = 0; i < res.data.data.length; i++) {
                    const element = res.data.data[i];

                    let url = ""
                    let id = element.id;

                    for (let j = 0; j < projectss.length; j++) {
                        const inner = projectss[j];
                        if (inner.id == id) {
                            url = inner.image
                            break
                        }
                    }

                    this.participated.push({
                        name: element.name,
                        url: url,
                        state: 1,
                    })
                }
            } else {
                ElMessage.error(res.data.msg)
                return
            }
        }
    }
})
</script>

<template>
    <div id="container">
        <el-container>
            <div id="topRowAnchor"></div>

            <!-- Header view -->

            <el-header class="da-header topAnchor">
                <el-row class="da-header-row">
                    <el-col :span="22">
                        <a href="javascript:void(0)" @click="reloadPage">
                            <div class="logoview">
                                <img src="../assets/logo-coinhere@2x.png" alt="">
                            </div>
                        </a>
                    </el-col>

                    <el-col :span="2" style="padding-top: 10px;text-align: center;">
                        <a v-if="!isConnect" class="menu-btn" href="javascript:void(0)" @click="connectAction">{{
                            account
                        }}</a>

                        <div v-else>
                            <el-popover placement="bottom-start" trigger="click">
                                <template #reference>
                                    <img src="../assets/avatar_default_128px@2x.png"
                                        style="width: 48px;height: 48px;cursor: pointer;" alt="">
                                </template>

                                <div style="cursor: pointer;" @click="disConnectAction">
                                    <img src="../assets/16px-signout@2x.png"
                                        style="width: 16px;height: 16px;vertical-align: middle;" alt="">Sign out
                                </div>
                            </el-popover>
                        </div>
                    </el-col>
                </el-row>
            </el-header>

            <!-- Main view -->

            <el-main class="da-main">
                <div class="main-content">
                    <el-row class="account-view">
                        <el-col :span="3">
                            <img src="../assets/avatar_default_128px@2x.png" style="width: 128px;height: 128px;" alt="">
                        </el-col>
                        <el-col :span="15">
                            <div class="account-text">{{ account }}</div>
                        </el-col>
                    </el-row>

                    <div class="projects-view">
                        <el-row>
                            <el-col :span="4" class="left-col-view">
                                <div class="participate-title">
                                    <el-icon>
                                        <Avatar />
                                    </el-icon>
                                    I Participated in
                                </div>

                                <div class="participated-list">
                                    <div v-if="participated.length > 0 && isConnect"
                                        v-for="(item, index) in participated" :key="index" class="participate-row">
                                        <img :src=item.url style="width: 20px;height: 20px;" alt=""><span>{{
                                            item.name
                                        }}</span>
                                    </div>
                                    <div v-else-if="!isConnect" class="no-participate-view">
                                        <img src="../assets/icon-connect@2x.png" style="width: 81px;height: 81px;"
                                            alt="">
                                        <div class="no-participate-text">Please connect the wallet first</div>
                                    </div>
                                    <div v-else-if="isConnect && participated.length == 0" class="no-participate-view">
                                        <img src="../assets/icon-empty@2x.png" style="width: 81px;height: 81px;" alt="">
                                        <div class="no-participate-text">You haven't finished any air drops yet.</div>
                                    </div>
                                </div>
                            </el-col>

                            <el-col :span="20" class="right-col-view">
                                <div class="recommended-text"><img src="../assets/icon-recommend@2x.png"
                                        style="width: 24px;height: 24px;" alt=""> Recommended Airdrops</div>

                                <el-row v-for="(outerItem, i) in recommendations" :key="i" class="recommend-row">
                                    <el-col v-for="(innerItem, j) in outerItem" :key="j" class="recommend-col"
                                        :span="8">
                                        <div class="col-view">
                                            <div>
                                                <img :src="innerItem.image" style="width: 245px; height: 245px;" alt="">
                                            </div>
                                            <div class=""
                                                style="text-align: left;padding-left: 20px;padding-right: 20px;">
                                                <div class="item-name">{{ innerItem.name }}</div>
                                                <div class="item-desc">{{ innerItem.descripation }}</div>

                                                <el-row class="item-process">
                                                    <el-col :span="23"><el-progress
                                                            :percentage="innerItem.process" /></el-col>
                                                    <el-col :span="1">
                                                        <a href="javascript:void(0)"
                                                            @click="toDetailAction(innerItem.id)"><img
                                                                src="../assets/24px-icon-arrow_r_white@2x.png"
                                                                style="width: 24px;height: 24px;" alt=""></a>
                                                    </el-col>
                                                </el-row>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>

                                <div class="load-more-btn" @click="loadMoreAction">
                                    SHOW MORE
                                </div>
                            </el-col>

                        </el-row>
                    </div>
                </div>
            </el-main>

            <el-footer class="da-footer" style="padding: 0px;">
                <div class="footer-view"></div>
            </el-footer>

        </el-container>
    </div>
</template>

<style scoped>
.logoview img {
    width: 244px;
    height: 72px;
}

.da-main {
    margin: 0 auto;
    width: 1440px;
}

.menu-btn {
    display: block;
    width: 160px;
    height: 44px;
    background: #1E5CEF;
    line-height: 44px;
    border-radius: 22px;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
}

.account-view {
    height: 168px;
    background: linear-gradient(315deg, #87ABFF 0%, #0C42C9 100%);
    border-radius: 20px;
}

.account-view img {
    margin-top: 20px;
    margin-left: 30px;
}

.account-text {
    height: 51px;
    margin-left: 20px;
    margin-top: 45px;
    font-size: 36px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 55px;
}

.left-col-view {
    padding: 10px;
    background: #F7F8FA;
    border-radius: 6px;
    border: 1px solid #E5E6EB;
}

.participate-title {
    font-size: 20px;
    font-weight: bold;
    color: #B0B9C9;
    line-height: 30px;
}

.no-participate-view {
    text-align: center;
}

.no-participate-view img {
    margin-top: 90px;
}

.no-participate-text {
    width: 214px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    color: #86909C;
    line-height: 27px;
}

.participate-row {
    width: 195px;
    height: 50px;
    font-size: 14px;
    font-weight: 500;
    color: #1E2844;
    line-height: 50px;
}

.participate-row img {
    vertical-align: middle;
}

.participate-row span {
    margin-left: 10px;
}

.projects-view {
    margin-top: 40px;
}

.recommended-text {
    margin-bottom: 20px;
    width: 300px;
    font-size: 20px;
    font-weight: bold;
    color: #1672F0;
    line-height: 30px;
    background: linear-gradient(270deg, #1E5CEF 0%, #5A96FF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.recommended-text img {
    vertical-align: text-bottom;
}
</style>

<style scoped>
.right-col-view {
    padding: 10px;
}

.recommend-row {
    margin-bottom: 20px;
}

.recommend-col {
    text-align: center;
}

.col-view {
    width: 285px;
    height: 436px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    background: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #E5E6EB;
}

.item-name {
    height: 25px;
    font-size: 18px;
    font-weight: bold;
    color: #1D2129;
    line-height: 27px;
}

.item-desc {
    font-size: 13px;
    font-weight: 400;
    color: #1D2129;
    line-height: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.item-process {
    margin-top: 20px;
    margin-bottom: 20px;
}

.load-more-btn {
    margin: 20px auto;
    text-align: center;
    width: 220px;
    height: 44px;
    background: #1E5CEF;
    border-radius: 22px;
    font-size: 14px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 44px;
    cursor: pointer;
}
</style>

<style scoped>
.footer-view {
    height: 60px;
    background: linear-gradient(315deg, #87ABFF 0%, #0C42C9 100%);
}
</style>
