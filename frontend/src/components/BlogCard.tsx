import { Link } from "react-router-dom"

interface BlogCardInput {
    authorName: string,
    title: string,
    content: string,
    date: string,
    id: string
}


export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    date
}: BlogCardInput) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <Avatar name={authorName} />
                <div className="text-slate-600 font-medium pl-2 text-md flex justify-center flex-col">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2 flex justify-center flex-col">
                    <Circle />
                </div>
                <div className="pl-1 text-slate-400 flex justify-center flex-col">
                    {date}
                </div>
            </div>
            <div className="text-xl font-bold pt-2">
                {title}
            </div>
            <div className="text-slate-500 text-md font-normal">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-3">
                {`${Math.ceil(content.length / 100)} min read`}
            </div>
        </div>
    </Link>
}


export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-400"></div>
}

export function Avatar({ name, size = 6 }: { name: string, size?: number }) {
    return <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-600 rounded-full`}>
        <span className="text-md font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>

}