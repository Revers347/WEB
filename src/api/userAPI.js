import axios from 'axios'

const userRoute = 'http://localhost:5000/user'

const userAPI = {

    login: async (loginData) => 
        axios.post(userRoute + '/login', loginData),

    register: async (registerData) =>
        axios.post(userRoute, registerData)
}

export default userAPI