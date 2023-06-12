import { CalendarIcon, LocationIcon } from "./icons";

export function EducationCard (props:{title : string, date:string, detail:string[], location:string, type:string}){
    const {title, date, detail = [], location, type} = props
    return (
        <div className="pb-2">
            <h1 className="font-serif font-semibold text-lg">{title}</h1>
            <div className="flex items-start flex-row gap-4 text-xs mx-1 text-gray-700">
                <div className="flex flex-row gap-1">
                    <LocationIcon size={16}/>{location}
                </div>
                <div className="flex flex-row gap-1">
                    <CalendarIcon size={16}/>
                    {date}
                </div>
            </div>
            <div className="font-serif text-sm m-2">
                {detail.map((el, index)=> {
                    return (
                        <p key={index}>- {el}</p>
                    )
                })}
            </div>
        </div>
    )
}