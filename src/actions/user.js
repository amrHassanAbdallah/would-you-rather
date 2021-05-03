export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"
export  function newUserLogin(user_id) {
    return {
        type:USER_LOGIN,
        user_id,
    };
}

export  function logoutUser() {
    return {
        type:USER_LOGOUT,
    };
}
