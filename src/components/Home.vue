<script lang="ts">

import { defineComponent, ref } from 'vue'

import { RecommendationItem, Projects } from "../data/projects";

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
        this.participated = [{
            name: "ZKFASDFGA",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png",
            state: 1,
        }, {
            name: "ZKFASDFGA",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png",
            state: 1,
        }, {
            name: "ZKFASDFGA",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png",
            state: 1,
        }, {
            name: "ZKFASDFGA",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png",
            state: 1,
        }];

        let projectss = Projects['production'] as RecommendationItem[];

        this.recommendations.push(projectss);
    },
    methods: {
        reloadPage() {
            location.reload();
        },
        async connectAction() {
            if (typeof ethereum === 'undefined') {
                alert("Matamask is not installed!")
            }

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            this.account = account
            this.isConnect = true
        },
        loadMoreAction() {
        },
        toDetailAction(id: number) {
            console.log(id)
            this.$router.push({ name: "detail", params: { id: id } })
        },
        disConnectAction() {
            this.isConnect = false
        }
    }
})
</script>

<template>
    <div id="container">
        <el-container>
            <div id="topRowAnchor"></div>

            <el-header class="da-header topAnchor">
                <el-row class="da-header-row">
                    <el-col :span="22">
                        <a href="javascript:void(0)" @click="reloadPage">
                            <div class="logoview">
                                <img src="../assets/logo_dairdorp@2x.png" alt="">
                            </div>
                        </a>
                    </el-col>

                    <el-col :span="2">
                        <a v-if="isConnect" href="javascript:void(0)" @click="disConnectAction"><img
                                src="../assets/avatar_default_128px@2x.png" style="width: 48px;height: 48px;"
                                alt=""></a>
                        <a v-else class="menu-btn" href="javascript:void(0)" @click="connectAction">{{ account }}</a>
                    </el-col>
                </el-row>
            </el-header>

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
                                        <img :src=item.url style="width: 30px;height: 30px;" alt=""><span>{{
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

                                <el-row v-for="(outerItem, i) in recommendations" :key="i" class="recommend-row"
                                    justify="space-around">
                                    <el-col v-for="(innerItem, j) in outerItem" :key="j" class="recommend-col"
                                        :span="6">
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
    width: 155px;
    height: 24px;
    vertical-align: middle;
}

.da-main {
    margin: 0 auto;
    width: 1440px;
}

.da-header-row {
    margin-top: 10px;
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
    margin-bottom: 40px;
    margin-left: 40px;
    width: 300px;
    font-size: 20px;
    font-weight: bold;
    color: #1672F0;
    line-height: 30px;
    background: linear-gradient(270deg, #1E5CEF 0%, #5A96FF 100%);
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
}
</style>

<style scoped>
.footer-view {
    height: 60px;
    background: linear-gradient(315deg, #87ABFF 0%, #0C42C9 100%);
}
</style>
