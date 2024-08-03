import { Appbar } from "./Appbar"

export const FullBlogSkeleton = () => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-14">
                <div className="col-span-8">
                    <div className="text-5xl fond-extrabold">
                        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    </div>
                    <div className="text-slate-500 pt-2">
                        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    </div>
                    <div className="pt-4">
                        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    </div>
                </div>
                <div className="col-span-4 font-medium mx-7">
                    <div className="text-slate-600">
                        <div className="h-2 w-20 bg-gray-200 "></div>
                    </div>
                    <div className="flex ">
                        <div className="pr-4 flex flex-col justify-center">
                            <div className="h-7 w-7 bg-gray-200 rounded-full  w-48 mb-4"></div>
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                <div className="h-2 w-20 bg-gray-200 mt-2"></div>

                            </div>
                            <div className="text-slate-500 pt-2">
                                <div className="h-2 bg-gray-200 mt-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
}