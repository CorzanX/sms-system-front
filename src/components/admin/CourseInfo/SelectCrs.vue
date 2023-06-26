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
                        
                        考核方式
                        <el-radio v-model="radio" label="">所有</el-radio>
                        <el-radio v-model="radio" label="考试">考试</el-radio>
                        <el-radio v-model="radio" label="考察">考察</el-radio>
                        <br>
                        教师：
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
                        prop="Cno"
                        label="课程号"
                        width="130">
                        </el-table-column>
                        <el-table-column
                        prop="Cname"
                        label="课程名称"
                        width="200">
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
        radio: '',
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
        value: '所有',
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
                Tname: this.input1,
                Castmd: this.radio,
                Cterm: this.value
            };
            axios.post('/admin/courseInfo',params)
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
