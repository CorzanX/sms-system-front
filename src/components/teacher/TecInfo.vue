<template>
    <div>
        <el-descriptions class="margin-top" title="个人信息" :column="3"  border>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>
                    教师编号
                </template>
                {{Tno}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-mobile-phone"></i>
                    姓名
                </template>
                {{Tname}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-location-outline"></i>
                    性别
                </template>
                    {{Tsex}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-tickets"></i>
                    年龄
                </template>
                {{Tage}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-office-building"></i>
                    职称
                </template>
                {{Tjobtitle}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-office-building"></i>
                    联系电话
                </template>
                {{Tphone}}
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
            Tno: '',
            Tname: '',
            Tsex: '',
            Tage: 0,
            Tjobtitle: '',
            Tphone: ''
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

            axios.post('/teacher/info', params)
                .then(response => {
                    const data = response.data;
                    this.Tno = data[0].Tno;
                    this.Tname = data[0].Tname;
                    this.Tsex = data[0].Tsex;
                    this.Tjobtitle = data[0].Tjobtitle;
                    this.Tphone = data[0].Tphone;
                })
                .catch(error => {
                    // 处理错误
                    console.error(error);
                });
        }
    }

}
</script>

