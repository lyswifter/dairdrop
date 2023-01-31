<script lang="ts">
import { defineComponent, ref } from 'vue';

import { StepTaskItem, StepTaskData } from '../data/projects';

export default defineComponent({
    name: "Scroll",
    props: [],
    components: {
    },
    data() {
        return {
            tasks: [] as StepTaskItem[],
        }
    },
    mounted() {
        this.tasks = StepTaskData['production'] as StepTaskItem[];
    },
    methods: {
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
    <div>
        <!-- Step -->

        <div v-for="(item, i) in tasks" :key="i" class="step-tasks-view">
            <el-row class="step-title-view">
                <el-col :span="1" style="text-align: center;">
                    <a class="turn-around-btn" :class="item.class" href="javascript:void(0)" @click="turnAroundAction(i)">
                        <img class="turn-around-img" src="../assets/icon-open@2x.png"
                            style="width: 24px;height: 24px;" alt="">
                    </a>
                </el-col>
                <el-col :span="20">
                    <div class="connect-title">{{item.title}}</div>
                </el-col>
            </el-row>

            <div v-show="item.isOpen" class="step-content-view">
                <div v-for="(subItem, j) in item.subSteps" :key="j">
                    <div>{{subItem.title}}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
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

.verify-btn {
    width: 80%;
    margin-top: 10px;
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
}
</style>
