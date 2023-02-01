<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RecommendationItem, Projects } from "../data/projects";
import { StepTaskItem, StepTaskData } from '../data/projects';

import ScrollInfo from "../components/Scroll.vue";

export default defineComponent({
    name: "Detail",
    props: ['id'],
    components: {
        ScrollInfo,
    },
    data() {
        return {
            info: {} as RecommendationItem,
            isConnect: false,
            account: "Connect",

            isDown: false,
            isOpen: true,

            tasks: [] as StepTaskItem[],
        }
    },
    mounted() {
        let projectss = Projects['production'] as RecommendationItem[];

        for (let i = 0; i < projectss.length; i++) {
            const element = projectss[i];
            if (element.id == this.$props.id) {
                this.info = element
                break
            }
        }

        this.tasks = StepTaskData['production'] as StepTaskItem[];
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
        turnAroundAction(index: number) {
            let className = ""
            let isOpen = false
            for (let i = 0; i < this.tasks.length; i++) {
                if (index == i) {
                    const element = this.tasks[i];
                    element.isOpen = !element.isOpen
                    className = element.class
                    isOpen = element.isOpen
                    break
                }
            }

            let rotated = document.getElementsByClassName(className)[0];
            if (!isOpen) {
                rotated.style.transform = 'rotate(-90deg)';
            } else {
                rotated.style.transform = 'rotate(0deg)';
            }
        },
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
                            <img :src="info.image" style="width: 245px;height: 245px;" alt="">
                            <h3>{{ info.name }}</h3>
                            <div>
                                <img src="../assets/32px_warn@2x.png" style="width: 16px;height: 16px;" alt="">
                                <span>Please note that there is no guarantee that they will do an airdrop and that they
                                    will launch their own token.It's only speculation.</span>
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
                            <div>Some steps here may not be detected, and you need to check the completion status
                                yourself.</div>
                            <br>
                            <el-progress :percentage="50" />

                            <br>

                            <div>
                                <!-- Step -->

                                <div v-for="(item, i) in tasks" :key="i" class="step-tasks-view">
                                    <el-row class="step-title-view">
                                        <el-col :span="1" style="text-align: center;">
                                            <a class="turn-around-btn" :class="item.class" href="javascript:void(0)"
                                                @click="turnAroundAction(i)">
                                                <img class="turn-around-img" src="../assets/icon-open@2x.png"
                                                    style="width: 24px;height: 24px;" alt="">
                                            </a>
                                        </el-col>
                                        <el-col :span="20">
                                            <div class="connect-title">{{ item.title }}</div>
                                        </el-col>
                                        <el-col v-if="item.accessory == 'connect'" :span="2">
                                            <div class="connect-btn">Connect</div>
                                        </el-col>
                                        <el-col v-if="item.accessory == 'check'" :span="2">
                                            <div class="verify-btn">verify</div>
                                        </el-col>
                                        <el-col v-if="item.accessory == 'check'" :span="1">
                                            <img src="../assets/32px-done@2x.png" style="width: 24px;height: 24px;"
                                                alt="">
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
                                                style="width: 100px; height: 100px;margin-left: 5px;" :src="imgItem.url" :zoom-rate="1.2"
                                                :preview-src-list="imgItem.srcList" :initial-index="4" fit="cover" />
                                        </div>
                                        <div v-for="(subItem, j) in item.subSteps" :key="j">
                                            <el-row>
                                                <el-col :span="20">
                                                    <div class="sub-title-view">{{ subItem.title }}</div>
                                                </el-col>
                                                <!-- <el-col :span="4">
                                                    <div class="verify-btn">verify</div>
                                                </el-col> -->
                                            </el-row>
                                            <div>{{ subItem.content }}</div>
                                            <div>{{ subItem.note }}</div>

                                            <div style="padding: 5px;">
                                                <el-image v-for="(imgItem, imgIndex) in subItem.imgs"
                                                    style="width: 100px; height: 100px;margin-left: 5px;" :src="imgItem.url"
                                                    :zoom-rate="1.2" :preview-src-list="imgItem.srcList"
                                                    :initial-index="4" fit="cover" />
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

.step-title-view {
    height: 44px;
    background: #E5E6EB;
    border-radius: 4px;
    line-height: 44px;
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
</style>

<style scoped>
.footer-view {
    height: 60px;
    background: linear-gradient(315deg, #87ABFF 0%, #0C42C9 100%);
}
</style>
