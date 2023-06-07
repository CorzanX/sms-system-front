<template>
    <div class="container">
        <div class="form-row">
        <h1>密码修改</h1>
        <el-input
            placeholder="原密码"
            v-model="input1"
            style="width: 300px;"
            clearable
            show-password>
        </el-input>
        <br>
        <el-input
            placeholder="新密码"
            v-model="input2"
            clearable
            show-password
            style="width: 300px;"
            minlength="6"
            maxlength="18">
        </el-input>
        <br>
        <el-input
            placeholder="确认密码"
            v-model="input3"
            clearable
            show-password
            minlength="6"
            style="width: 300px;"
            maxlength="18">
        </el-input>
        <br>
        <span style="color: red">{{ passwordsMatch }}</span>
        <el-button type="primary" @click="updatepwd()">提交</el-button>
        </div>
    </div>

</template>

<script>
import { mapState } from "vuex";
import axios from 'axios';
import { message } from 'ant-design-vue';
  export default {
    data() {
      return {
        input1: '',
        input2: '',
        input3: ''
      }
    },
    created() {
        this.$store.commit("init_user");
    },
    computed: {
        ...mapState({
            loginStatus: (state) => state.user.loginStatus,
            userInfo: (state) => state.user.userInfo,
        }),
        passwordsMatch() {
            return !this.input4 ? '' : this.input3 === this.input4 ? '密码匹配' : '密码不匹配';
        }
    },
    methods: {
        updatepwd(){
            const params = {
                account: this.userInfo.account,
                identity: this.userInfo.identity,
                password: this.input1
            };
            try {
                console.log('1')
                axios.post('/login', params)
                    .then(response =>{
                        const data = response.data;
                            if (data.success) {
                                if(this.input2 === this.input3){
                                    const params1 = {
                                        tno: this.userInfo.account,
                                        newPassword: this.input2
                                    }
                                    axios.post('/teacher/update',params1)
                                    .then(response1 => {
                                        const data1 = response1.data
                                        if(data1.success){
                                            message.success('修改成功')
                                        } else{
                                            message.error('修改失败')
                                        }
                                    })
                                } else {
                                    message.error('密码不一致');
                                }
                        
                            } else {
                                message.error('密码错误');
                            }
                        
                    })
                
            } catch (error) {
                console.log(error)
                message.error('请重试');
            }
    },
    }
}
</script>


<style scoped >
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.form-row {
  margin-bottom: 10px; /* 调整行之间的垂直间距 */
}
</style>
