<template>
    <div>
        <el-container>
            <el-container>
                <el-container>
                    <el-main>
                    <div>
                        职称：
                        <el-input
                            placeholder="所有"
                            v-model="input1"
                            style="width: 300px;"
                        >
                        </el-input>
                        <el-button type="primary" @click="fetchData()">查询</el-button>
                    </div>
                    <el-table
                        :data="currentPageData"
                        style="width: 100%"
                        max-height="550">
                        <el-table-column
                        fixed
                        prop="Tno"
                        label="教师编号"
                        width="130">
                        </el-table-column>
                        <el-table-column
                        prop="Tname"
                        label="姓名"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="Tsex"
                        label="性别"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="Tage"
                        label="年龄"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="Tjobtitle"
                        label="职称"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="Tphone"
                        label="联系电话"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="crs_count"
                        label="教学课程数目"
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
        input1: ''
        };
    },
    created(){
        this.$store.commit("init_user")
        this.fetchData()
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
            const params = {
                Tjobtitle: this.input1
            };
            axios.post('/admin/teacherInfo',params)
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
