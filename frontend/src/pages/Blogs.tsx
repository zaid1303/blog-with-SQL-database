import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { Blogskeleton } from "../components/Blogskeleton";
import { useBlogs } from "../hooks"


export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="max-w-3xl">
                    <Blogskeleton />
                    <Blogskeleton />
                    <Blogskeleton />
                    <Blogskeleton />
                    <Blogskeleton />
                </div>
            </div>
        </div>
    }
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="max-w-3xl">
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    date={"2nd Aug 2024"}
                />)}
            </div>
        </div>
    </div>

}