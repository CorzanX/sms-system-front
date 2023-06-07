<template>
    <div>
        <el-container>
            <el-header>
                <a-avatar src="/logo.jpeg" :size="40" />
                <span>学生成绩管理系统</span>
            </el-header>
            <div v-if="loginStatus">
                <el-container>
                    <el-aside width="200px">
                        <el-menu :default-openeds="[] " router>
                            <el-menu-item index="1" route="/student/info" @click="handleMenuItemClick">
                                <i class="el-icon-user-solid"></i>
                                <span slot="title">个人信息</span>
                            </el-menu-item>
                            <el-menu-item index="2" route="/student/reports" @click="handleMenuItemClick">
                                <i class="el-icon-s-marketing"></i>
                                <span slot="title">成绩查询</span>
                            </el-menu-item>
                            <el-menu-item index="3" route="/student/courses" @click="handleMenuItemClick">
                                <i class="el-icon-date"></i>
                                <span slot="title">课表查询</span>
                            </el-menu-item>
                            <el-menu-item index="4" route="/student/updatepwd" @click="handleMenuItemClick">
                                <i class="el-icon-lock"></i>
                                <span slot="title">修改密码</span>
                            </el-menu-item>
                        </el-menu>
                    </el-aside>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </div>
            <div v-else @click="goLogin()">
                登陆/注册
            </div>
        </el-container>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
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
        ...mapMutations(["log_out"]),
        goLogin() {
            this.$router.push("/login");
        },
        handleMenuItemClick() {
            this.showDiv = false;
        },
        
        clearMainContent() {
            this.$refs.elMain.innerHTML = '';
        },
    }
}

</script>


<style>
  .el-header, .el-footer {
    background-color: #468ae4;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    line-height: 60px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>