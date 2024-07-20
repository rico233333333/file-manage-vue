<template>
    <h1>登录 SignIn</h1>
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="auto"
        label-position="top">
        <el-form-item label="邮箱 Email" prop="email">
            <el-input v-model="ruleForm.email" />
        </el-form-item>
        <el-form-item label="密码 Password" prop="pass">
            <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <div class="row">
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    登录
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">清空</el-button>
            </el-form-item>
        </div>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const validateEmail = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('邮箱不可以为空'))
    } else {
        callback()
    }
}

const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    email: '',
    pass: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
    email: [{ validator: validateEmail, trigger: 'blur' }],
    pass: [{ validator: validatePass, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>

<style scoped>
h1 {
    text-align: center;
}

.row {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>