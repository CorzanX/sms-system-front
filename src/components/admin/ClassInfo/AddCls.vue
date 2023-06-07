<template>
    <div class="container">
        <div class="form-row">
        <h1>添加班级信息</h1>
        班级编号
        <el-input
            placeholder="033101"
            v-model="input1"
            style="width: 300px;"
            >
        </el-input>
        <br>
        班级名称
        <el-input
            placeholder="软件工程01班"
            v-model="input2"
            style="width: 300px;"
            >
        </el-input>
        <br>
        专业编号
        <el-input
            placeholder="0331"
            v-model="input3"
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

    },
    methods: {
        insert(){
            const params = {
                Clsno: this.input1,
                Clsname: this.input2,
                Mno: this.input3
            };
            axios.post('/admin/classInsert',params)
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
