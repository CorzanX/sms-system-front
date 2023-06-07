<template>
    <div>
        <el-descriptions class="margin-top" title="个人信息" :column="3"  border>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>
                    学号
                </template>
                {{Sno}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-mobile-phone"></i>
                    姓名
                </template>
                {{Sname}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-location-outline"></i>
                    性别
                </template>
                    {{Ssex}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-tickets"></i>
                    年龄
                </template>
                {{Sage}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-office-building"></i>
                    籍贯
                </template>
                {{Sarea}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-office-building"></i>
                    总修学分
                </template>
                {{Scredits}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-office-building"></i>
                    班级名称
                </template>
                {{ Clsname }}
            </el-descriptions-item>
        </el-descriptions>

    </div>

</template>

<script>
import axios from 'axios';
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            Sno: '',
            Sname: '',
            Ssex: '',
            Sage: 0,
            Sarea: '',
            Scredits: '',
            Clsname: ''
        };
    },
    created() {
        this.$store.commit("init_user");
        this.fetchData();
        
    },
    computed: {
        ...mapState({
            loginStatus: (state) => state.user.loginStatus,
            userInfo: (state) => state.user.userInfo,
        }),
    },
    methods: {
        fetchData() {
            const params = {
                account: this.userInfo.account
            };

            axios.post('/student/info', params)
                .then(response => {
                    const data = response.data;
                    this.Clsname = data[0].Clsname;
                    this.Sno = data[0].Sno;
                    this.Sname = data[0].Sname;
                    this.Ssex = data[0].Ssex;
                    this.Sarea = data[0].Sarea;
                    this.Sage = data[0].Sage;
                    this.Scredits = data[0].Scredits;
                    //console.log(data[0].Clsname);
                })
                .catch(error => {
                    // 处理错误
                    console.error(error);
                });
        }
    }

}
</script>

