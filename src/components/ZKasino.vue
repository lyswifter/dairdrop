<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: "ZKasino",
    props: ['id'],
    components: {
    },
    data() {
        return {
            a: "",
            isConnect: false,
            account: "Connect",
        }
    },
    mounted() {
        console.log(this.$props.id)
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
        disConnectAction() {
            this.isConnect = false
        },
        backAction() {
            this.$router.go(-1);
        },
        rotateAction() {

        },
        turnAroundAction() {

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
                        <a v-if="isConnect" href="javascript:void(0)" @click="disConnectAction">
                            <img src="../assets/avatar_default_128px@2x.png" style="width: 48px;height: 48px;"
                                alt=""></a>
                        <a v-else class="menu-btn" href="javascript:void(0)" @click="connectAction">{{ account }}</a>
                    </el-col>
                </el-row>
            </el-header>

            <el-main class="da-main">
                <div class="back-view">
                    <a href="javascript:void(0)" @click="backAction">
                        <img src="../assets/32px-back_black@2x.png" style="width: 40px;height: 40px;" alt="">Back
                    </a>
                </div>

                <div class="project-detail-view">
                    <el-row :gutter="40">
                        <el-col :span="6">
                            <img src="https://starkware.co/wp-content/uploads/2021/07/Group-177.svg"
                                style="width: 245px;height: 245px;" alt="">
                            <h3>StarkNet</h3>
                            <div>
                                <img src="../assets/32px_warn@2x.png" style="width: 16px;height: 16px;" alt="">
                                <span>Please note that there is no guarantee that they will do an airdrop and that they
                                    will launch their own token.It's only speculation.</span>
                            </div>
                        </el-col>

                        <el-col :span="18">
                            <h2>StarkNet</h2>
                            <div>StarkNet is a decentralized Validity-Rollup (also known as "ZK-Rollup") without
                                license. It operates as an L2 network on Ethereum, enabling any dApp to achieve
                                unlimited computing scale without compromising the composability and security of
                                Ethereum. This is due to StarkNet's reliance on the most secure and scalable encryption
                                proof system - STARK.</div>
                            <br>
                            <div>As a well-known L2 project, it is likely to carry out air drop in the future.</div>
                            <br>
                            <a href="https://www.starknet-ecosystem.com/"></a>

                            <div style="text-align: center;">
                                <img src="../assets/up@2x.png" style="width: 50px;height: 24px;" alt=""
                                    @click="rotateAction">
                            </div>

                            <h3>Step-by-Step Guide</h3>
                            <div>Some steps here may not be detected, and you need to check the completion status
                                yourself.</div>
                            <br>
                            <el-progress :percentage="50" />

                            <h3>Basic:</h3>
                            <div>
                                <div>
                                    <el-row>
                                        <el-col>
                                            <img src="../assets/icon-open@2x.png" style="width: 24px;height: 24px;"
                                                alt="" @click="turnAroundAction">
                                        </el-col>

                                        <el-col>
                                            <div>Step 1: Visit the Scroll testnet page.</div>
                                        </el-col>

                                        <el-col>
                                            <a href="javascript:void(0)">Connect</a>
                                        </el-col>

                                        <el-col>
                                            <a href="javascript:void(0)">Verify</a>
                                        </el-col>
                                    </el-row>
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
</style>

<style scoped>
.footer-view {
    height: 60px;
    background: linear-gradient(315deg, #87ABFF 0%, #0C42C9 100%);
}
</style>
