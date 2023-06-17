import { type } from "os";
import { CalendarIcon, CompanyIcon, LocationIcon } from "./icons";

export function ExperienceCard(props: {
  title: string;
  company: string;
  startDate: Date;
  endDate: Date | null;
  location: string;
  detail: string[];
}) {
  const { title, company, startDate, endDate, detail = [], location } = props;

  return (
    <div className="pb-2">
      <div className="flex flex-col my-1 md:flex-row md:items-end md:justify-between gap-2">
        <p className="font-serif font-semibold text-lg">{title}</p>
        <div className="flex flex-row gap-1 justify-start text-xs font-serif font-medium rounded-md p-1 dark:bg-slate-700 bg-slate-200"><CompanyIcon size={16}/>
         <h1 className="truncate">{company}</h1>
        </div>
      </div>
      
      <div className="flex items-start flex-row gap-4 text-sm text-gray-700 dark:text-gray-200">
        <div className="flex flex-row gap-1">
          <LocationIcon size={16} />
          {location}
        </div>
        <div className="flex flex-row gap-1">
          <CalendarIcon size={16} />
          {startDate.toLocaleDateString()} - {!!endDate ? endDate.toLocaleDateString() :  'now'}
        </div>
      </div>
      <div className="font-serif text-sm m-2">
        {detail.map((el, index) => {
          return <p key={index}>- {el}</p>;
        })}
      </div>
    </div>
  );
}
