import { ChangeEvent, useState } from "react"
import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate=useNavigate();
    return <div>
        <Appbar />
        <div className="flex justify-center pt-8 ">
            <div className="max-w-screen-lg w-full">
                <input onChange={(e)=>{
                    setTitle(e.target.value);
                }} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Title" required></input>
                <Texteditor onChange={(e)=>{
                    setContent(e.target.value);
                }} />
                <button onClick={async () => {
                    const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content
                    },{
                        headers:{
                            Authorization:localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800 mt-5">
                    Publish post
                </button>
            </div>
        </div>
    </div>
}

function Texteditor({ onChange }:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}) {
    return <div className="max-w-screen-lg w-full pt-5">
        <textarea onChange={onChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your content..." required></textarea>

    </div>
}