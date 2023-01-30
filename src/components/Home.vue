<script lang="ts">

import { defineComponent, ref } from 'vue'

interface ConnectInfo {
    chainId: string;
}

interface ParticipateItem {
    name: string;
    url: string;
    state: number;
}

interface RecommendationItem {
    name: string;
    descripation: string;
    tag: string;
    process: number;
    image: string;
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

        let row1 = [{
            name: "StarkNet",
            descripation: "StarkNet is a layer2 implematation which using Cario language to generate zero knowledge proof.",
            tag: "",
            process: 50,
            image: "https://starkware.co/wp-content/uploads/2021/07/Group-177.svg",
        }, {
            name: "ZKasino",
            descripation: "ZKasino is a decentralized casino built on Layer 2 ZK-Rollups technology",
            tag: "",
            process: 20,
            image: "https://www.whichbingo.co.uk/wp-content/uploads/2022/01/Casino-offers.png",
        }, {
            name: "ZKsync",
            descripation: "ZKsync is a decentralized casino built on Layer 2 ZK-Rollups technology",
            tag: "",
            process: 60,
            image: "https://www.whichbingo.co.uk/wp-content/uploads/2022/01/Casino-offers.png",
        }]

        let row2 = [{
            name: "StarkNet1",
            descripation: "StarkNet is a layer2 implematation which using Cario language to generate zero knowledge proof.",
            tag: "",
            process: 50,
            image: "https://www.whichbingo.co.uk/wp-content/uploads/2022/01/Casino-offers.png",
        }, {
            name: "ZKasino1",
            descripation: "ZKasino is a decentralized casino built on Layer 2 ZK-Rollups technology",
            tag: "",
            process: 20,
            image: "https://png.pngtree.com/png-vector/20210301/ourmid/pngtree-casino-png-free-download-png-image_2996773.jpg",
        }, {
            name: "ZKsync1",
            descripation: "ZKsync is a decentralized casino built on Layer 2 ZK-Rollups technology",
            tag: "",
            process: 60,
            image: "https://www.whichbingo.co.uk/wp-content/uploads/2022/01/Casino-offers.png",
        }]

        this.recommendations.push(row1);
        this.recommendations.push(row2);
    },
    methods: {
        reloadPage() {
            location.reload();
        },
        async connectAction() {
            if (typeof window.ethereum === 'undefined') {
                alert("Matamask is not installed!")
            }

            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            this.account = account
            this.isConnect = true
        },
        loadMoreAction() {
            let row3 = [{
                name: "StarkNet1",
                descripation: "StarkNet is a layer2 implematation which using Cario language to generate zero knowledge proof.",
                tag: "",
                process: 50,
                image: "https://www.whichbingo.co.uk/wp-content/uploads/2022/01/Casino-offers.png",
            }, {
                name: "ZKasino1",
                descripation: "ZKasino is a decentralized casino built on Layer 2 ZK-Rollups technology",
                tag: "",
                process: 20,
                image: "https://png.pngtree.com/png-vector/20210301/ourmid/pngtree-casino-png-free-download-png-image_2996773.jpg",
            }, {
                name: "ZKsync1",
                descripation: "ZKsync is a decentralized casino built on Layer 2 ZK-Rollups technology",
                tag: "",
                process: 60,
                image: "https://www.whichbingo.co.uk/wp-content/uploads/2022/01/Casino-offers.png",
            }]

            this.recommendations.push(row3);
        },
        disConnectAction() {
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
                                <img src="../assets/logo_Dmaster-black.svg" alt="">
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
                                    <div v-for="(item, index) in participated" :key="index" class="participate-row">
                                        <img :src=item.url style="width: 30px;height: 30px;" alt=""><span>{{
                                            item.name
                                        }}</span>
                                    </div>
                                </div>
                            </el-col>

                            <el-col :span="20" class="right-col-view">
                                <div class="recommended-text">Recommended Airdrops</div>

                                <el-row v-for="(outerItem, i) in recommendations" :key="i" class="recommend-row"
                                    justify="space-around">
                                    <el-col v-for="(innerItem, j) in outerItem" :key="j" class="recommend-col"
                                        :span="6">
                                        <div class="col-view">
                                            <img :src="innerItem.image" style="width: 200px; height: 200px;" alt="">
                                            <div class=""
                                                style="text-align: left;padding-left: 20px;padding-right: 20px;">
                                                <div class="item-name">{{ innerItem.name }}</div>
                                                <div class="item-desc">{{ innerItem.descripation }}</div>
                                                <div class="item-process">
                                                    <el-progress :percentage="innerItem.process" />
                                                </div>
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
    /* width: 486px; */
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
    width: 251px;
    font-size: 20px;
    font-weight: bold;
    color: #1672F0;
    line-height: 30px;
    background: linear-gradient(270deg, #1E5CEF 0%, #5A96FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
