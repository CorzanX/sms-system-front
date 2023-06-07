<template>
    <div class="container">
        <div class="form-row">
        <h1>添加专业信息</h1>
        专业代码
        <el-input
            placeholder="0331"
            v-model="input1"
            style="width: 300px;"
            >
        </el-input>
        <br>
        专业名称
        <el-input
            placeholder="软件工程"
            v-model="input2"
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
                Mno: this.input1,
                Mname: this.input2
            };
            axios.post('/admin/majorInsert',params)
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
