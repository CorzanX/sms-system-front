<template>
    <div class="container">
        <div class="form-row">
        <h1>添加教师信息</h1>
        教师编号
        <el-input
            placeholder="教师编号"
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
        职称
        <el-input
            placeholder="职称"
            v-model="input5"
            style="width: 300px;"
            >
        </el-input>
        <br>
        联系方式
        <el-input
            placeholder="联系方式"
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
                Tno: this.input1,
                Tname: this.input2,
                Tsex: this.input3,
                Tage: this.input4,
                Tjobtitle: this.input5,
                Tphone: this.input6
            };
            axios.post('/admin/teacherInsert',params)
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
