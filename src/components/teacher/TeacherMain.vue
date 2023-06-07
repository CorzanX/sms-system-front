<template>
    <div>
        <el-container>
            <el-header>
                <a-avatar src="/logo.jpeg" :size="40" />
                <span>学生成绩管理系统</span>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu :default-openeds="[] " router>
                        <el-menu-item index="1" route="/teacher/info" @click="handleMenuItemClick">
                            <i class="el-icon-user-solid"></i>
                            <span slot="title">个人信息</span>
                        </el-menu-item>
                        <el-menu-item index="2" route="/teacher/crsinfo" @click="handleMenuItemClick">
                            <i class="el-icon-s-marketing"></i>
                            <span slot="title">任课信息</span>
                        </el-menu-item>
                        <el-menu-item index="3" route="/teacher/rptinfo" @click="handleMenuItemClick">
                            <i class="el-icon-date"></i>
                            <span slot="title">任课成绩信息</span>
                        </el-menu-item>
                        
                        <el-menu-item index="4" route="/teacher/updatepwd" @click="handleMenuItemClick">
                            <i class="el-icon-lock"></i>
                            <span slot="title">修改密码</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
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