<template>
    <div>
        <el-container>
            <el-container>
                <el-container>
                    <el-main>
                    <div>
                        班级名：
                        <el-input
                            placeholder="班级"
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
                        prop="Sno"
                        label="学号"
                        width="130">
                        </el-table-column>
                        <el-table-column
                        prop="Sname"
                        label="姓名"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="Ssex"
                        label="性别"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="Sage"
                        label="年龄"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="Sarea"
                        label="籍贯"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="Scredits"
                        label="已修学分"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="Clsname"
                        label="班级"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        fixed="right"
                        label="操作"
                        width="120">
                        <template slot-scope="scope">
                            <el-button
                            @click.native.prevent="deleteRow(scope.$index, tableData)"
                            type="text"
                            size="small">
                            移除
                            </el-button>
                        </template>
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
        deleteRow(index, rows) {
            const params1 = {
                Sno: rows[index].Sno
            }
            axios.post('/admin/studentDelete',params1)
                .then(response => {
                    const data = response.data;
                    if(data){
                        message.success("删除成功")
                    } else{
                        message.error("删除失败")
                    }
                })
                .catch(error => {
                    message.error("删除失败")
                    console.error(error);
                });
            rows.splice(index, 1);
        },
        handlePageChange(currentPage) {
            this.currentPage = currentPage;
        },
        fetchData() {
            const params = {
                Clsname: this.input1
            };

            axios.post('/admin/studentInfo', params)
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
