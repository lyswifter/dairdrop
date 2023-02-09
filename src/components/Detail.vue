<script lang="ts">
import { info } from 'console';
import { defineComponent, ref } from 'vue'

import { ElMessage } from "element-plus";

import { domain } from "../router/domain";
import { Projects } from "../data/projects";
import { RecommendationItem, StepTaskItem, ImageItem, StepTaskSubItem } from "../data/types";

import axios from "axios";

import { ethers } from "ethers";

import { handlePubkey } from "../utils/util";

let loginUrl = domain.domainBaseUrl + "/api/did-user/no-email-login"
let participateUrl = domain.domainBaseUrl + "/api/airdrop/join";
let verifyActionUrl = domain.domainBaseUrl + "/api/airdrop/verify";
let connectMetaMaskUrl = domain.domainBaseUrl + "/api/metamask/get/message/";
let joinStateUrl = domain.domainBaseUrl + "/api/airdrop/joinStatus/";
let coinhereInfoUrl = domain.domainBaseUrl + "/api/airdrop/joinCoinHere";
let isFollowUrl = domain.domainBaseUrl + "/api/airdrop/twitter/followStatus/"

interface ItemStatus {
    airdropStep: number;
    airdropStepId: number;
    airdropSubStep: number;
    verifyStatus: number;
}

export default defineComponent({
    name: "Detail",
    props: ['id'],
    components: {
    },
    data() {
        return {
            info: {} as RecommendationItem,
            isConnect: false,
            isJoin: false,
            account: "Connect",
            radio: "Defi",

            progress: 0,
            authPage: "https://twitter.com/i/oauth2/authorize?code_challenge=challenge&code_challenge_method=PLAIN&response_type=code&client_id=clA4WUhnSlB1OXN5ZnVLR1paUVk6MTpjaQ&redirect_uri=https%3A%2F%2Fcoinhere-local.valuechain.group&scope=offline.access%20tweet.read%20users.read&state=state",
        }
    },
    mounted() {
        let projectss = Projects['production'];

        for (let i = 0; i < projectss.length; i++) {
            const element = projectss[i];
            if (element.id == this.$props.id) {
                this.info = element as RecommendationItem
                break
            }
        }

        let localItem = window.localStorage.getItem("WalletAccount");
        if (localItem == null || localItem == undefined) {
            this.account = "Connect"
            this.isConnect = false
            this.info.tasks[0].accessory = "connect"
        } else {
            this.account = localItem
            this.isConnect = true
            this.info.tasks[0].accessory = "join"
        }

        let localAccessToken = window.localStorage.getItem("w_user_id");
        if (localAccessToken) {
            this.info.tasks[1].accessory = 'follow'
        }

        let localToken = window.localStorage.getItem("token");
        if (localToken) {
            this.joinStateFunc()
        }
    },
    computed: {
    },
    methods: {
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
            this.account = account
            this.isConnect = true

            window.localStorage.setItem("WalletAccount", account);

            this.info.tasks[0].accessory = 'join';

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

            if (resLogin.data.code == 0) {
                localStorage.setItem("token", resLogin.data.data.token)
            } else {
                ElMessage.error(resLogin.data.msg)
                return
            }
        },
        disConnectAction() {
            this.account = "Connect"
            this.isConnect = false
            this.isJoin = false
            this.info.tasks[0].accessory = "connect";

            localStorage.clear()
        },
        backAction() {
            this.$router.go(-1);
        },
        rotateAction() {
        },
        turnAroundAction(index: number) {
            let className = ""
            let isOpen = false
            for (let i = 0; i < this.info.tasks.length; i++) {
                if (index == i) {
                    const element = this.info.tasks[i];
                    element.isOpen = !element.isOpen
                    className = element.class
                    isOpen = element.isOpen
                    break
                }
            }

            let element = document.getElementsByClassName(className)[0];
            if (!isOpen) {
                element.classList.add("turn-around-img")
            } else {
                element.classList.remove("turn-around-img")
            }
        },
        async verifyAction(item: StepTaskItem, idx: number) {
            console.log(item)
            console.log(idx)

            if (item.id == 3 && this.info.id == 8) {
                const res = await axios.get(isFollowUrl + localStorage.getItem('w_user_id'), {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                });

                if (res.data.code == 0) {
                    if (res.data.data) {
                        ElMessage.info("verify successfully")
                        this.info.tasks[2].accessory = ''   
                    } else {
                        ElMessage.error("verify failed")
                    }
                } else {
                    ElMessage.error(res.data.msg)
                    return
                }
            } else {
                const resVerify = await axios.post(verifyActionUrl, {
                    airdropId: this.info.id,
                    airdropStep: idx + 1,
                    walletAddress: window.localStorage.getItem("WalletAccount"),
                }, {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                });

                if (resVerify.data.code == 0) {
                    ElMessage.info("verify successfully")
                } else {
                    ElMessage.error(resVerify.data.msg)
                    return
                }
            }
        },

        async joinAction() {
            let account = window.localStorage.getItem("WalletAccount")

            // 1. request randomness number
            const resSign = await axios.get(connectMetaMaskUrl + account, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });

            let randStr = ""
            if (resSign.data.code == 0) {
                console.log(resSign.data.data)
                randStr = resSign.data.data;
            } else {
                ElMessage.error(resSign.data.msg)
                return
            }

            if (randStr.length == 0) {
                ElMessage.error("There must some message to sign!")
                return
            }

            // 2. sign and resubmit
            const signRandomness: string = await window.ethereum.request({
                method: 'personal_sign',
                params: [randStr, account],
            })

            // 3. participate the airdrop programe
            const resJoin = await axios.post(participateUrl, {
                airdropId: this.info.id,
                walletAddress: account,
                sign: signRandomness,
            }, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });

            if (resJoin.data.code == 0) {
                ElMessage.info("You have joined to our airdrop projects.")

                this.info.tasks[0].accessory = ""
                this.isJoin = true
            } else {
                ElMessage.error(resJoin.data.msg)
                return
            }
        },

        async joinStateFunc() {
            // 1. request randomness number
            const res = await axios.get(joinStateUrl + this.info.id, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });

            if (res.data.code == 0) {

                // progress

                let count = 0
                let len = res.data.data.list.length
                for (let i = 0; i < len; i++) {
                    const outerItem = res.data.data.list[i] as ItemStatus;
                    if (outerItem.verifyStatus == 1) {
                        count++
                    }
                }
                if (count == 0 || len == 0) {
                    this.progress = 0;
                } else {
                    this.progress = count / len * 100;
                }
                console.log(this.progress)

                // joinStatus

                if (res.data.data.joinStatus == 0) {
                    this.info.tasks[0].accessory = "join"
                    this.isJoin = false
                } else if (res.data.data.joinStatus == 1) {
                    this.info.tasks[0].accessory = ""
                    this.isJoin = true
                }

                // isverify

                for (let i = 0; i < res.data.data.list.length; i++) {
                    const outerItem = res.data.data.list[i] as ItemStatus;

                    let stepIdx = outerItem.airdropStep;
                    let stepSubIdx = outerItem.airdropSubStep + 1;
                    let verifyStatus = outerItem.verifyStatus;

                    for (let j = 0; j < this.info.tasks.length; j++) {
                        const innerItem = this.info.tasks[j] as StepTaskItem;

                        if (stepIdx == innerItem.id) {
                            for (let k = 0; k < innerItem.subSteps.length; k++) {
                                const subItem = innerItem.subSteps[k] as StepTaskSubItem;
                                if (subItem.subId == stepSubIdx) {
                                    subItem.isVerify = verifyStatus == 1 ? true : false;
                                    break
                                }
                            }
                        }
                    }
                }

                // isFulfilled

                for (let j = 0; j < this.info.tasks.length; j++) {
                    const innerItem = this.info.tasks[j] as StepTaskItem;
                    let okCount = 0
                    for (let k = 0; k < innerItem.subSteps.length; k++) {
                        const subItem = innerItem.subSteps[k] as StepTaskSubItem;
                        if (subItem.isVerify) {
                            okCount++
                        }
                    }

                    if (innerItem.subSteps.length == okCount && innerItem.subSteps.length != 0) {
                        innerItem.isFulfilled = true
                    } else {
                        innerItem.isFulfilled = false
                    }
                }

                console.log(this.info.tasks)
            } else {
                ElMessage.error(res.data.msg)
                return
            }
        },
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

                    <el-col :span="2" style="padding-top: 10px;">
                        <el-popover v-if="isConnect" placement="bottom-start" trigger="click">
                            <template #reference>
                                <img src="../assets/avatar_default_128px@2x.png"
                                    style="width: 48px;height: 48px;cursor: pointer;" alt="">
                            </template>

                            <div style="cursor: pointer;" @click="disConnectAction">
                                <img src="../assets/16px-signout@2x.png"
                                    style="width: 16px;height: 16px;vertical-align: middle;" alt="">Sign out
                            </div>
                        </el-popover>
                        <a v-else class="menu-btn" href="javascript:void(0)" @click="connectAction">{{ account }}</a>
                    </el-col>
                </el-row>
            </el-header>

            <!-- Main view -->

            <el-main class="da-main">
                <div class="back-view">
                    <a href="javascript:void(0)" @click="backAction">
                        <img src="../assets/32px-back_black@2x.png" style="width: 40px;height: 40px;" alt="">Back
                    </a>
                </div>

                <div class="project-detail-view">
                    <el-row :gutter="40">
                        <el-col :span="6">
                            <img :src="info.image" style="width: 245px;height: 245px;" alt="">
                            <h3>{{ info.name }}</h3>
                            <div>
                                <img src="../assets/32px_warn@2x.png" style="width: 16px;height: 16px;" alt="">
                                <span> According to the former experience, the possibility you get the airdrop will be
                                    higher if you finish the guidelines which has been collated and collected by
                                    Coinhere when {{ info.name }} decide to do an airdrop. Please note there is no
                                    guarantee that {{ info.name }} will do an airdrop.</span>
                            </div>
                        </el-col>

                        <el-col :span="18">
                            <h2>{{ info.name }}</h2>
                            <div>{{ info.descripation }}</div>
                            <br>
                            <div style="text-align: center;">
                                <img src="../assets/up@2x.png" style="width: 50px;height: 24px;" alt=""
                                    @click="rotateAction">
                            </div>

                            <h3>Step-by-Step Guide</h3>
                            <div>Click the “Verify” bottom, Coinhere will help you to verify if you have successfully
                                completed the steps.</div>
                            <br>
                            <div>Please make sure the wallet address you connect with Coinheres is same as the one you
                                interact with {{ info.name }}. If you want to check more than more wallet address, just
                                signed out and connect your wallet address again.</div>
                            <br>
                            <el-progress :percentage="progress" />
                            <br>

                            <div>
                                <!-- Step -->

                                <div v-for="(item, i) in info.tasks" :key="i" class="step-tasks-view">
                                    <el-row class="step-title-view">
                                        <el-col :span="1" style="text-align: center;">
                                            <a class="turn-around-btn" href="javascript:void(0)"
                                                @click="turnAroundAction(i)">
                                                <img :class="item.class" src="../assets/icon-open@2x.png"
                                                    style="width: 24px;height: 24px;" alt="">
                                            </a>
                                        </el-col>
                                        <el-col :span="20">
                                            <div class="connect-title">{{ item.title }}</div>
                                        </el-col>
                                        <el-col :span="3" style="text-align: center;">
                                            <div v-if="item.accessory == 'connect' && !isConnect" class="connect-btn"
                                                @click="connectAction">Connect</div>

                                            <div v-else-if="item.accessory == 'join' && !isJoin"
                                                class="connect-btn" @click="joinAction">Join</div>

                                            <div v-else-if="item.accessory == 'verify' && !item.isFulfilled"
                                                class="verify-btn" @click="verifyAction(item, i)">Verify</div>

                                            <div v-else-if="item.accessory == 'auth' && !item.isFulfilled"
                                                class="twitter-auth-button">
                                                <a :href="authPage" target="_self" data-show-count="false">Auth
                                                    Twitter</a>
                                            </div>

                                            <div v-else-if="item.accessory == 'follow' && !item.isFulfilled"
                                                class="twitter-follow-button">
                                                <a href="https://twitter.com/intent/follow?screen_name=CoinhereAirdrop"
                                                    data-show-count="false">Follow Twitter</a>
                                            </div>
                                        </el-col>
                                    </el-row>

                                    <div v-show="item.isOpen" class="step-content-view">
                                        <div class="content-view">
                                            {{ item.content }}
                                        </div>
                                        <div class="note-view">
                                            {{ item.note }}
                                        </div>

                                        <div>
                                            <el-image v-for="(imgItem, imgIndex) in item.imgs"
                                                style="width: 100px; height: 100px;margin-left: 5px;" :src="imgItem.url"
                                                :zoom-rate="1.2" :preview-src-list="imgItem.srcList" :initial-index="4"
                                                fit="cover" />
                                        </div>

                                        <div v-if="item.id == 3 && info.id == 8">
                                            <el-radio-group v-model="radio">
                                                <el-radio label="Defi">A. Defi</el-radio>
                                                <el-radio label="Gamefi">B. Gamefi</el-radio>
                                                <el-radio label="Socialfi">C: Socialfi</el-radio>
                                                <el-radio label="NFT">D: NFT</el-radio>
                                                <el-radio label="Metaverse">E: Metaverse</el-radio>
                                                <el-radio label="Dao">F: Dao</el-radio>
                                                <el-radio label="DID">G: DID</el-radio>
                                                <el-radio label="ZK Rollup">H: ZK Rollup</el-radio>
                                                <el-radio label="Ethereum Layer2">I: Ethereum Layer2</el-radio>
                                                <el-radio label="Others">J: Others</el-radio>
                                            </el-radio-group>
                                        </div>

                                        <div v-for="(subItem, j) in item.subSteps" :key="j">
                                            <el-row>
                                                <el-col :span="23">
                                                    <div class="sub-title-view">{{ subItem.title }}</div>
                                                </el-col>
                                                <el-col :span="1">
                                                    <img v-if="subItem.accessory == 'check' && subItem.isVerify"
                                                        src="../assets/32px-done@2x.png"
                                                        style="width: 24px;height: 24px;" alt="">
                                                </el-col>
                                            </el-row>
                                            <div>{{ subItem.content }}</div>
                                            <div>{{ subItem.note }}</div>

                                            <div style="padding: 5px;">
                                                <el-image v-for="(imgItem, imgIndex) in subItem.imgs"
                                                    style="width: 100px; height: 100px;margin-left: 5px;"
                                                    :src="imgItem.url" :zoom-rate="1.2"
                                                    :preview-src-list="imgItem.srcList" :initial-index="4"
                                                    fit="cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
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
    min-height: 1000px;
}

.menu-btn {
    display: block;
    width: 160px;
    background: #1E5CEF;
    line-height: 44px;
    border-radius: 22px;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
}
</style>

<style scoped>
.back-view a {
    text-decoration: none;
    line-height: 40px;
    height: 40px;
    color: #1D2129;
    font-size: 20px;
    font-weight: bold;
}

.back-view img {
    vertical-align: middle;
}

.step-title-view {
    height: 44px;
    background: #E5E6EB;
    border-radius: 4px;
    line-height: 44px;
}

.turn-around-img {
    transform: rotate(-90deg);
}

.step-title-view img {
    vertical-align: middle;
}

.step-content-view {
    font-size: 12px;
    padding-left: 10px;
}

.connect-btn {
    width: 90%;
    height: 24px;
    background: #1672F0;
    border-radius: 13px;
    font-size: 12px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 24px;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
}

.sub-title-view {
    line-height: 24px;
}

.verify-btn {
    width: 80%;
    height: 24px;
    border-radius: 13px;
    border: 1px solid #1672F0;
    text-decoration: none;
    display: block;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
    color: #1672F0;
    font-weight: 500;
    font-size: 12px;
    margin-top: 10px;
}

.twitter-follow-button {
    width: 90%;
    height: 24px;
    background: #1672F0;
    border-radius: 13px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 24px;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
}

.twitter-follow-button a {
    text-decoration: none;
    color: white;
    font-size: 12px;
}

.twitter-auth-button {
    width: 90%;
    height: 24px;
    background: #1672F0;
    border-radius: 13px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 24px;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
}

.twitter-auth-button a {
    text-decoration: none;
    color: white;
    font-size: 12px;
}
</style>

<style scoped>
.footer-view {
    height: 60px;
    background: linear-gradient(315deg, #87ABFF 0%, #0C42C9 100%);
}
</style>
