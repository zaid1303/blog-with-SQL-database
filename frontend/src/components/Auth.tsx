import { ChangeEvent, useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import { SignupInput } from "@zaid1303/medium-common"
import { BACKEND_URL } from "../config"
import axios from "axios"

export const Auth = ({ type }: { type: ("Sign Up" | "Sign In") }) => {
    const navigate=useNavigate();
    const [postInput, setPostInput] = useState<SignupInput>({
        email: "",
        password: "",
        name: ""
    })

    async function sendRequest(){
        try{
            const response= await axios.post(`${BACKEND_URL}/api/v1/user/${type=="Sign Up"?"signup":"signin"}`,postInput);
            const jwttoken=response.data.jwt;
            localStorage.setItem("token",jwttoken);
            navigate('/blogs');
        }
        catch(e){
            alert("error");
        }
    } 


    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        {type === "Sign Up" ? " Create an Account " : "Sign In with email "}

                    </div>
                    <div className="text-slate-500 text-center">
                        {type === "Sign Up" ? "Already have an account? " : "Don't have an Account? "}
                        <Link className="underline" to={type === "Sign Up" ? "/signin" : "/signup"}>{type === "Sign Up" ? " Login" : "Register"}</Link>
                    </div>
                </div>
                <div className="pt-8">
                   {type==="Sign Up" ?<LableInput label="Name" placeholder="enter your username" onchange={(e) => {
                        setPostInput({
                            ...postInput,
                            name: e.target.value
                        })
                    }} />:null}
                    <LableInput label="Email" placeholder="example@gmail.com" onchange={(e) => {
                        setPostInput({
                            ...postInput,
                            email: e.target.value
                        })
                    }} />
                    <LableInput label="Password" type={"password"} placeholder="......." onchange={(e) => {
                        setPostInput({
                            ...postInput,
                            password: e.target.value
                        })
                    }} />
                </div>
                <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type}</button>
            </div>
        </div>
    </div>
}

interface LableInputType {
    label: string;
    placeholder: string;
    onchange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LableInput({ label, placeholder, onchange, type }: LableInputType) {
    return <div>
        <label className="block mb-2 text-sm font-semibold text-black pt-6">{label}</label>
        <input onChange={onchange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
    </div>
}