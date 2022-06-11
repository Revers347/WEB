import { useEffect } from "react"
import { useState } from "react"
import blogAPI from '../api/blogAPI'

const Blogs = () => {

    const [blogs, setBlogs] = useState()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        blogAPI.getBlogs()
            .then(res => {
                setBlogs(res.data)
                console.log(res.data)
            })
    }, [])

    const addBlog = () => {
        const blog = {
            title: title,
            contents: content,
            category_id: 1,
            tags: "1"
        }
        blogAPI.addBlog(blog)
            .then(res => blogAPI.getBlogs()
                .then(result => setBlogs(result.data)))
    }

    return (
    blogs ? (<div class="main-wrapper">
                <div class="add-back">
                <div class="add-area">
    {blogs.map(blog => (
            <div class="add">
                <a href="blog.html">
                <div class="add-header">{blog.title}</div>
                <div class="add-content">
                    <div class="add-text">{blog.contents}</div>
                </div>
                </a>
            </div>
      ))}
            <input onChange={(e) => setTitle(e.target.value)} placeholder="Title"></input>
            <input onChange={(e) => setContent(e.target.value)} placeholder="Content"></input>
            <button onClick={addBlog} >Add blog</button>
      </div>
      </div>        
      </div>
    ) : <></>)
}

export default Blogs