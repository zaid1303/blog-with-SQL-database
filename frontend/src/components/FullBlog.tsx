import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"


export const FullBlog = ({ blog }: { blog: Blog }) => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-14">
                <div className="col-span-8">
                    <div className="text-5xl fond-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on 2nd Aug 2024
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 font-medium">
                    <div className="text-slate-600">
                    Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar name={blog.author.name || "Anonymous"} size={6} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}

                            </div>
                            <div className="text-slate-500 pt-2">
                                Random catch phrase about Author's ability for writing blog!
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
}