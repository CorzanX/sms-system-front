<template>
    <div>
        <el-container>
            <el-container>
                <el-container>
                    <el-main>
                    
                    <el-table
                        :data="currentPageData"
                        style="width: 100%"
                        max-height="550">
                        <el-table-column
                        fixed
                        prop="Cno"
                        label="课程号"
                        width="130">
                        </el-table-column>
                        <el-table-column
                        prop="Cname"
                        label="课程名称"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="Cterm"
                        label="开设学期"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="Cduration"
                        label="学时"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="Casmtd"
                        label="考核方式"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="Ccredits"
                        label="学分"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="Tname"
                        label="教师"
                        width="120">
                        </el-table-column>
                    </el-table>
                        <el-pagination
                        @current-change="handlePageChange"
                        :current-page="currentPage"
                        :page-size="pageSize"
                        :total="tableData.length">
                        </el-pagination>
                    </el-main>
        </el-container>
      </el-container>
    </el-container>
    </div>
</template>


<script>
import { mapState } from "vuex";
import axios from 'axios';
import { message } from 'ant-design-vue';
export default {
    data() {
        return {
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        };
    },
    created(){
        this.$store.commit("init_user");
        this.fetchData();
    },
    computed: {
        ...mapState({
            loginStatus: (state) => state.user.loginStatus,
            userInfo: (state) => state.user.userInfo,
        }),
        currentPageData() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.tableData.slice(startIndex, endIndex);
        }
    },
    methods: {
        
        handlePageChange(currentPage) {
            this.currentPage = currentPage;
        },
        fetchData() {

            axios.get('/admin/courseInfo')
                .then(response => {
                    const data = response.data;
                    this.tableData = data;
                    
                })
                .catch(error => {
                    
                    console.error(error);
                });
        }
    },

}
</script>
