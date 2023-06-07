<template>
 <div class="container">
  <div class="login-form">
    <div class="title">
      <a-avatar src="/logo.jpeg" :size="40" />
      <span>学生成绩管理系统</span>
    </div>
    <a-form-model
      layout="vertical"
      ref="form"
      :model="formData"
      :rules="rules"
      @submit="onSubmit"
    >
      <a-form-model-item ref="account" prop="account">
        <a-input v-model="formData.account" placeholder="学号/工号">
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-model-item>
      <a-form-model-item ref="password" prop="password">
        <a-input-password v-model="formData.password" placeholder="密码">
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input-password>
      </a-form-model-item>
      <a-form-model-item prop="identity">
        <a-radio-group v-model="formData.identity" class="identity">
          <a-radio value="student">学生</a-radio>
          <a-radio value="teacher">教师</a-radio>
          <a-radio value="admin">管理员</a-radio>
        </a-radio-group>
      </a-form-model-item>
      <a-button
        type="primary"
        html-type="submit"
        class="login-button"
        :loading="loading"
        block
      >
        登录
      </a-button>
    </a-form-model>
  </div>
 </div>
</template>

<script>
import axios from 'axios';
import { message } from 'ant-design-vue';
import { mapMutations } from "vuex"

export default {
  data() {
    return {
      loading: false,
      formData: {
        account: '',
        password: '',
        identity: 'student',
      },
      rules: {
        account: { required: true, message: '请输入学号/工号！' },
        password: { required: true, message: '请输入密码！' },
      },
    };
  },
  mounted() {
    
  },
  methods: {
    ...mapMutations(["user_login"]),

    onSubmit(e) {
        e.preventDefault();
      this.$refs.form.validate(async valid => {
        if (valid) {
          try {
            const response = await axios.post('/login', this.formData);
            const data = response.data;
            
            if (data.success) {
              this.user_login(this.formData);
              if (this.formData.identity === 'student') {
                this.$router.push('/student');
              } else if (this.formData.identity === 'teacher') {
                this.$router.push('/teacher');
              } else if (this.formData.identity === 'admin') {
                this.$router.push('/admin');
              }
            } else {
              message.error('账号或密码错误');
            }
          } catch (error) {
            message.error('登录失败，请重试');
          }
        } else {
          message.warning('请输入有效的账号和密码');
        }
      });
    }
  }
};


</script>

<style scoped lang="stylus">
.login-form
  width 300px
  padding 20px
  text-align left
  border-radius 5px
  background-color white
  box-shadow 0 0 5px lightgrey

.title
  display flex
  justify-content center
  align-items center
  margin-bottom 24px
  font-size 24px
  *:last-child
    margin-left 10px

.identity
  display flex
  flex-flow row nowrap
  justify-content space-between

.login-form-bottom
  margin-bottom 0
  .login-button
    margin-bottom 20px

.code-input
  display flex
  align-items center
  height 32px
  .code >>>
    cursor pointer
    min-width 100px

.container 
  display flex
  justify-content center
  align-items center
  height 100vh

</style>
