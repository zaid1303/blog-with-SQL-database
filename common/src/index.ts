import z from "zod";

export const signupInput=z.object({
    email:z.string().email(),
    password:z.string().min(8),
    name:z.string().optional()
})


export const signinInput=z.object({
    email:z.string().email(),
    password:z.string().min(8)
})


export const blogInput=z.object({
    title:z.string(),
    content:z.string()
})



export const updateInput=z.object({
    id:z.string(),
    title:z.string(),
    content:z.string()
})




export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type BlogInput = z.infer<typeof blogInput>
export type UpdateInput = z.infer<typeof updateInput>