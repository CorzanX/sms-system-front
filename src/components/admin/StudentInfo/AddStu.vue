<template>
    <div class="container">
        <div class="form-row">
        <h1>添加学生信息</h1>
        学号
        <el-input
            placeholder="学号"
            v-model="input1"
            style="width: 300px;"
            >
        </el-input>
        <br>
        姓名
        <el-input
            placeholder="姓名"
            v-model="input2"
            style="width: 300px;"
            >
        </el-input>
        <br>
        性别
        <el-input
            placeholder="性别"
            v-model="input3"
            
            style="width: 300px;"
            >
        </el-input>
        <br>
        年龄
        <el-input
            placeholder="年龄"
            v-model="input4"
            
            style="width: 300px;"
            >
        </el-input>
        <br>
        籍贯
        <el-input
            placeholder="籍贯"
            v-model="input5"
            style="width: 300px;"
            >
        </el-input>
        <br>
        班级号
        <el-input
            placeholder="班级号"
            v-model="input6"
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
                Sname: this.input2,
                Ssex: this.input3,
                Sage: this.input4,
                Sarea: this.input5,
                Clsno: this.input6
            };
            axios.post('/admin/studentInsert',params)
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
