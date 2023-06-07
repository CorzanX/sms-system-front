<template>
    <div>
        <el-container>
            <el-header>
                <a-avatar src="/logo.jpeg" :size="40" />
                <span>学生成绩管理系统</span>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu :default-openeds="[]" router>
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-s-grid"></i>学生信息</template>
                            <el-menu-item-group>
                                <template slot="title"></template>
                                    <el-menu-item index="1-1" route="/admin/stuview" @click="handleMenuItemClick">查看学生信息</el-menu-item>
                                    <el-menu-item index="1-2" route="/admin/stuadd" @click="handleMenuItemClick">添加学生信息</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-s-cooperation"></i>教师信息</template>
                            <el-menu-item-group>
                                <template slot="title"></template>
                                    <el-menu-item index="2-1" route="/admin/tecview" @click="handleMenuItemClick">查看教师信息</el-menu-item>
                                    <el-menu-item index="2-2" route="/admin/tecadd" @click="handleMenuItemClick">添加教师信息</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title"><i class="el-icon-s-platform"></i>专业信息</template>
                            <el-menu-item-group>
                                <template slot="title"></template>
                                    <el-menu-item index="3-1" route="/admin/majview" @click="handleMenuItemClick">查看专业信息</el-menu-item>
                                    <el-menu-item index="3-2" route="/admin/majadd" @click="handleMenuItemClick">添加专业信息</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title"><i class="el-icon-school"></i>班级信息</template>
                            <el-menu-item-group>
                                <template slot="title"></template>
                                    <el-menu-item index="4-1" route="/admin/clsview" @click="handleMenuItemClick">查看班级信息</el-menu-item>
                                    <el-menu-item index="4-2" route="/admin/clsadd" @click="handleMenuItemClick">添加班级信息</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title"><i class="el-icon-info"></i>课程信息</template>
                            <el-menu-item-group>
                                <template slot="title"></template>
                                    <el-menu-item index="5-1" route="/admin/crsview" @click="handleMenuItemClick">查看课程信息</el-menu-item>
                                    <el-menu-item index="5-2" route="/admin/crsadd" @click="handleMenuItemClick">添加课程信息</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="6">
                            <template slot="title"><i class="el-icon-star-on"></i>学生成绩信息</template>
                            <el-menu-item-group>
                                <template slot="title"></template>
                                    <el-menu-item index="6-1" route="/admin/rptview" @click="handleMenuItemClick">查看学生成绩信息</el-menu-item>
                                    <el-menu-item index="6-2" route="/admin/rptadd" @click="handleMenuItemClick">添加学生成绩信息</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-menu-item index="7" route="/admin/accupdate" @click="handleMenuItemClick">
                            <i class="el-icon-s-tools"></i>
                            <span slot="title">修改管理员密码</span>
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

<style scoped>
  .el-header, .el-footer {
    background-color: #2a7fee;
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

    line-height: 80px;
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