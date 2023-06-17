import { StackOverflowIcon } from "./icons"

export function ProjectCard (
    props: {title:string, description: string, techStack: string[]}
) {
    const {title = "", description = "", techStack = []} = props
    return (
        <div className="pb-2">
            <h1 className="font-serif font-semibold text-lg">{title}</h1>
            <div className="flex items-start flex-row gap-4 text-base mx-1 text-gray-700 dark:text-gray-200">
                {description}
            </div>
            <div className="flex flex-row gap-2 font-serif text-sm m-2">
                <div className="my-1">
                    <StackOverflowIcon size={18}/>
                </div>
                <div className="flex flex-row flex-wrap item-start gap-2">
                    {techStack.map((el, index)=> {
                        return (
                            <p className="px-1 py-1 bg-slate-200 dark:bg-slate-700 rounded-md text-xs" key={index}>{el}</p>
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}