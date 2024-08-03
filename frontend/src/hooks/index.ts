import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog{
    title:string,
    content:string,
    id:string,
    author:{
        name:string
    }

}

export const useBlog = ({id}:{id:string}) =>{
    const [loading, setloading] = useState(true);
    const [blog, setblog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }).then(responce => {
            setblog(responce.data.post);
            setloading(false);
        })
    },[id])

    return {
        loading,
        blog
    }
}


export const useBlogs = () => {
    const [loading, setloading] = useState(true);
    const [blogs, setblogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }).then(responce => {
            setblogs(responce.data.posts);
            setloading(false);
        })
    })

    return {
        loading,
        blogs
    }
}