<template>
    <div>
        <el-container>
            <el-container>
                <el-container>
                    <el-main>
                    <div>
                        所属专业：
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
                        prop="Clsno"
                        label="班级编号"
                        width="200">
                        </el-table-column>
                        <el-table-column
                        prop="Clsname"
                        label="班级名称"
                        width="400">
                        </el-table-column>
                        <el-table-column
                        prop="Mname"
                        label="属于专业"
                        width="200">
                        </el-table-column>
                        <el-table-column
                        prop="stu_count"
                        label="人数"
                        width="150">
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
            const params = {
                Mname: this.input1
                
            };

            axios.post('/admin/classInfo', params)
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
