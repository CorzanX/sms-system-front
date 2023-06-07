<template>
    <div>
        <el-container>
            <el-container>
                <el-container>
                    <el-main>
                    <div>
                        学期
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button type="primary" @click="fetchData()">查询</el-button>
                    </div>
                    <el-table
                        :data="tableData"
                        style="width: 100%"
                        max-height="550">
                        <el-table-column
                        fixed
                        prop="Cname"
                        label="课程名称"
                        width="165">
                        </el-table-column>
                        <el-table-column
                        prop="Cterm"
                        label="学期"
                        width="165">
                        </el-table-column>
                        <el-table-column
                        prop="Casmtd"
                        label="考核方式"
                        width="165">
                        </el-table-column>
                        <el-table-column
                        prop="Ccredits"
                        label="学分"
                        width="165">
                        </el-table-column>
                        <el-table-column
                        prop="Cduration"
                        label="学时"
                        width="165">
                        </el-table-column>
                        <el-table-column
                        prop="sno_count"
                        label="班级人数"
                        width="165">
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
export default {
    data() {
        return {
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        options: [{
            value: '所有',
            label: '所有'
            }, {
            value: '2021上',
            label: '2021上'
            }, {
            value: '2021下',
            label: '2021下'
            }, {
            value: '2022上',
            label: '2022上'
            }, {
            value: '2022下',
            label: '2022下'
            }],
            value: '所有'
        };
    },
    created(){
        this.$store.commit("init_user");
        
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
                account: this.userInfo.account,
                term: this.value
            };
            console.log(this.userInfo.account)
            axios.post('/teacher/crs', params)
                .then(response => {
                    
                    const data = response.data;
                    this.tableData = data;
                    console.log(data)
                })
                .catch(error => {
                    // 处理错误
                    console.error(error);
                });
        }
    },

}
</script>
