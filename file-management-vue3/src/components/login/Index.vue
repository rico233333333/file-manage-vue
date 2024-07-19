<template>
    <div id="app">
        <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
            url="http://foo.bar/particles.json" />

        <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="particlesOptions" />
    </div>
    <div class="container">
        <el-card shadow="always">
            <!-- 太阳 -->
            <img class="logo-img" src="../../images/svg/logo.svg" alt="Hello Files">
            <el-divider border-style="double" />
            <SignIn v-if="ifSignin"></SignIn>
            <Register v-if="!ifSignin"></Register>
            <div class="row">
                <el-switch v-model="isDark" :active-icon="Moon" :inactive-icon="Sunny" inline-prompt
                    @change="toggleDark" />
                <div class="if-signin">
                    <el-link v-if="ifSignin" @click="toggleSignin" type="primary">没有账号~点击注册</el-link>
                    <el-link v-if="!ifSignin" @click="toggleSignin" type="primary">已有账号~点击登录</el-link>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup>
import SignIn from './components/SignIn.vue'
import Register from './components/Register.vue'
import { useDark, useToggle } from "@vueuse/core";
import { Sunny, Moon } from "@element-plus/icons-vue";
import { loadSlim } from "tsparticles-slim";
import particlesDayConfig from "./config/particlesDayConfig.json"
import particlesNightConfig from "./config/particlesNightConfig.json"
import { ref } from 'vue';

// 登录注册组件切换
const ifSignin = ref(true)
const isDark = useDark();
const toggleDark = useToggle(isDark);

// 切换登录和注册组件
const toggleSignin = () => {
    ifSignin.value = !ifSignin.value
}

const particlesOptions = ref(isDark.value ? particlesNightConfig : particlesDayConfig);

const particlesInit = async engine => {
    //await loadFull(engine);
    await loadSlim(engine);
};

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};

</script>

<style scoped>
.container {
    display: grid;
    place-items: center;
    min-height: 98vh;
    height: 90vh;
}

.el-card {
    width: 600px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.logo-img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.row {
    display: flex;
    align-items: center;
    justify-content: center;
}

.if-signin {
    margin-top: -5px;
    margin-left: 10px;
}
</style>