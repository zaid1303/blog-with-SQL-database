import { Circle } from "./BlogCard"


export const Blogskeleton = () => {
    return <div role="status" className="animate-pulse">
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>

                <div className="flex justify-center flex-col pl-2 flex justify-center flex-col">
                    <Circle />
                </div>

                <div className="pl-1 text-slate-400 flex justify-center flex-col">
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>
            </div>
            <div className="text-xl font-bold pt-2">
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            </div>
            <div className="text-slate-500 text-md font-normal">
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            </div>
            <div className="text-slate-500 text-sm font-thin pt-3">
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            </div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>

}