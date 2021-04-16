import axios from 'axios'

export default class FilesService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/files`,
            withCredentials: true
        })
    }

    uploadFile = fileForm => this.apiHandler.post('/upload', fileForm)
    uploadPhoto = photoForm => this.apiHandler.post('/upload/photo', photoForm)
    uploadCV = cvForm => this.apiHandler.post('/upload/cvitae', cvForm)
}