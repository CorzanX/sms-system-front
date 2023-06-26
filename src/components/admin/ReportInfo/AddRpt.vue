<template>
    <div class="container">
        <div class="form-row">
        <h1>添加学生成绩信息</h1>
        学号
        <el-input
            placeholder="202103340306"
            v-model="input1"
            style="width: 300px;"
            >
        </el-input>
        <br>
        课程号
        <el-input
            placeholder="7"
            v-model="input2"
            style="width: 300px;"
            >
        </el-input>
        <br>
        学期
        <el-input
            placeholder="2021下"
            v-model="input3"
            
            style="width: 300px;"
            >
        </el-input>
        <br>
        成绩
        <el-input
            placeholder="90"
            v-model="input4"
            
            style="width: 300px;"
            >
        </el-input>
        <br>
        教师
        <el-input
            placeholder="张三"
            v-model="input5"
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
        input6: ''
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
                Sno: this.input1,
                Cno: this.input2,
                term: this.input3,
                score: this.input4,
                Tname: this.input5
            };
            axios.post('/admin/reportInsert',params)
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
