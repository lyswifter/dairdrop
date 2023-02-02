<script lang="ts">

import { defineComponent, ref, defineEmits } from 'vue'

const emit = defineEmits([ "doSth" ]);

export default defineComponent({
    name: "HeaderView",
    components: {
    },
    data() {
        return {
            account: "Connect",
            isConnect: false,
        }
    },
    mounted() {
    },
    methods: {
        reloadPage() {
            location.reload();
        },
        async connectAction() {
            // if (typeof ethereum === 'undefined') {
            //     alert("Matamask is not installed!")
            // }

            // const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            // const account = accounts[0];
            // this.account = account
            // this.isConnect = true

            emit('doSth');
        },
        disConnectAction() {
            this.isConnect = false
        }
    }
})
</script>

<template>
    <div id="container">
        <el-header class="da-header topAnchor">
            <el-row class="da-header-row">
                <el-col :span="22">
                    <a href="javascript:void(0)" @click="reloadPage">
                        <div class="logoview">
                            <img src="../assets/logo-coinhere@2x.png" alt="">
                        </div>
                    </a>
                </el-col>

                <el-col :span="2" style="text-align: center;padding-top: 10px;">
                    <a v-if="isConnect" href="javascript:void(0)" @click="disConnectAction"><img
                            src="../assets/avatar_default_128px@2x.png" style="width: 48px;height: 48px;" alt=""></a>
                    <a v-else class="menu-btn" href="javascript:void(0)" @click="connectAction">{{ account }}</a>
                </el-col>
            </el-row>
        </el-header>
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
