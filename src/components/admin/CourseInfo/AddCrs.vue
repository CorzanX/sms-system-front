<template>
    <div class="container">
        <div class="form-row">
        <h1>添加课程信息</h1>
        课程号
        <el-input
            placeholder="1"
            v-model="input1"
            style="width: 300px;"
            >
        </el-input>
        课程名
        <el-input
            placeholder="数据结构"
            v-model="input2"
            style="width: 300px;"
            >
        </el-input>
        <br>
        开设学期
        <el-input
            placeholder="2021上"
            v-model="input3"
            style="width: 200px;"
            >
        </el-input>
        学时
        <el-input
            placeholder="48"
            v-model="input4"
            style="width: 200px;"
            >
        </el-input>
        考查方式
        <el-input
            placeholder="考试"
            v-model="input5"
            style="width: 300px;"
            >
        </el-input>
        <br>
        学分
        <el-input
            placeholder="4"
            v-model="input6"
            style="width: 300px;"
            >
        </el-input>
        教师
        <el-input
            placeholder="张三"
            v-model="input7"
            style="width: 300px;"
            >
        </el-input>
        <br>
        <el-button type="primary" @click="insert()">提交</el-button>
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
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: ''
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

    },
    methods: {
        insert(){
            const params = {
                Cno: this.input1,
                Cname: this.input2,
                Cterm: this.input3,
                Cduration: this.input4,
                Casmtd: this.input5,
                Credits: this.input6,
                Tname: this.input7
            };
            axios.post('/admin/courseInsert',params)
                .then(response => {
                    const data = response.data;
                    if(data){
                        message.success("插入成功")
                    } else{
                        message.error("插入失败")
                    }
                }
                )
                .catch(error => {
                    message.error("插入失败")
                    console.error(error);
                });
        }
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
