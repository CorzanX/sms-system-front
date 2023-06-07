export default {
    state: {
        list: 123,
        //登陆状态
        loginStatus: false,
        //token
        token: null,
        userInfo:{

        }
    },
    mutations: {
        user_login(state,user) {
            state.loginStatus = true;
            state.token = user.token;
            state.userInfo = user
            localStorage.setItem('teaUserInfo',JSON.stringify(user))
        },
        init_user(state) {
            let userInfo = JSON.parse(localStorage.getItem('teaUserInfo'))
            if (userInfo) {
                state.loginStatus = true;
                state.token = userInfo.token;
                state.userInfo = userInfo;
            }
        },
        log_out(state) {
            state.loginStatus = false;
            state.token = null;
            state.userInfo = {};
            localStorage.removeItem('teaUserInfo')

        }
    }
}