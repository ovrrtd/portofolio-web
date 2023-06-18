import { StackOverflowIcon } from "./icons"

export function ProjectCard (
    props: {title:string, description: string, techStack: string[], url: string[]}
) {
    const {title = "", description = "", techStack = [], url = []} = props
    return (
        <div className="pb-2">
            <h1 className="font-serif font-semibold text-lg">{title}</h1>
            <div className="flex items-start flex-row gap-4 text-base mx-1 text-gray-700 dark:text-gray-200">
                {description}
            </div>
            {
                url.length > 0 && (
                    <div className="flex flex-row truncate gap-2 text-sm font-serif m-1">
                        <p>Url : </p>
                        <div className="flex flex-col">
                        {
                            url.map((el,index)=>{
                                const href = "https://" + el
                                return (
                                    <a key={index} 
                                    href={href}
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='font-serif gap-2 hover:font-extrabold'
                                    >- {el}</a>
                                )
                            })
                        }
                        </div>
                    </div>
                )
            }
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