import * as axios from "axios";

const instanse = axios.create ({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "e313faef-3b0b-4b33-b1e4-6d13acc82983"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instanse.axios.get(`follow/{currentPage}`).then(response => response.data)
}

