import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
const routes =
    [
        {
            path: '/admin',
            name: 'admin',
            component: () => import('../components/admin/AdminMain.vue'),
            children: [
                {path: 'stuview',component: () => import('../components/admin/StudentInfo/SelectStu.vue') },
                {path: 'stuadd',component: () => import('../components/admin/StudentInfo/AddStu.vue')},
                {path: 'tecview',component: () => import('../components/admin/TeacherInfo/SelectTec.vue')},
                {path: 'tecadd',component: () => import('../components/admin/TeacherInfo/AddTec.vue')},
                {path: 'majview',component: () => import('../components/admin/MajorInfo/SelectMaj.vue')},
                {path: 'majadd',component: () => import('../components/admin/MajorInfo/AddMaj.vue')},
                {path: 'clsview',component: () => import('../components/admin/ClassInfo/SelectCls.vue')},
                {path: 'clsadd',component: () => import('../components/admin/ClassInfo/AddCls.vue')},
                {path: 'crsview',component: () => import('../components/admin/CourseInfo/SelectCrs.vue')},
                {path: 'crsadd',component: () => import('../components/admin/CourseInfo/AddCrs.vue')},
                {path: 'rptview',component: () => import('../components/admin/ReportInfo/SelectRpt.vue')},
                {path: 'rptadd',component: () => import('../components/admin/ReportInfo/AddRpt.vue')},
                {path: 'accupdate',component: () => import('../components/admin/AdminInfo/UpdateAcc.vue')},
            ] 
        },
        {
            path: '/student',
            name: 'student',
            component: () => import('../components/student/StudentMain.vue'),
            children: [
                {path: 'info',component: () => import('../components/student/StuInfo.vue') },
                {path: 'reports',component: () => import('../components/student/StuRpt.vue') },
                {path: 'courses',component: () => import('../components/student/StuCrs.vue') },
                {path: 'updatepwd',component: () => import('../components/student/StuUdp.vue') },
            ]

        },
        {
            path: '/teacher',
            name: 'teacher',
            component: () => import('../components/teacher/TeacherMain.vue'),
            children: [
                {path: 'info',component: () => import('../components/teacher/TecInfo.vue') },
                {path: 'crsinfo',component: () => import('../components/teacher/TecCrsInfo.vue') },
                {path: 'rptinfo',component: () => import('../components/teacher/TecRptInfo.vue') },
                {path: 'updatepwd',component: () => import('../components/teacher/TecUpdPwd.vue') },
            ]

        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../components/login.vue')
        }
    ]


const router = new VueRouter({
    mode: 'history',
    base: process.env.VUE_APP_BASE_URL,
    routes
})

export default router