import axios from 'axios'

const blogRoute = 'http://localhost:5000/blog'

const blogAPI = {

    getBlogs: async () =>
        axios.get(blogRoute),

    addBlog: async (blogData) => 
        axios.post(blogRoute, blogData, {headers: {'Authorization': localStorage.getItem('token')}})
}


export default blogAPI