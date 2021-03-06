import axios from 'axios'

export default class UserService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/users`,
            withCredentials: true
        })
    }

    getUsers = () => this.apiHandler.get('/getAllUsers')
    editProfile = (UserId, UserInfo) => this.apiHandler.put(`/editProfile/${UserId}`, UserInfo)
    deleteUser = UserIdDeleted => this.apiHandler.delete(`/delete/${UserIdDeleted}`)
    getOneUser = userId => this.apiHandler.get(`/getOneUser/${userId}`)
}