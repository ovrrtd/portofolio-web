import {EducationCard} from "@/component/education_card"
import { dummyEducation } from "./dummy"



export default function Education() {
    return (
      <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col">
        <section>
          <h1 className="font-serif text-3xl font-bold mb-2 md:mb-8">Education</h1>
          <div className="px-2">
            {dummyEducation.map((el,index)=>{
                return (
                    <EducationCard 
                        key={index} 
                        title={el.title}
                        location={el.location}
                        date={el.date}
                        detail={el.detail}
                        type={el.type}
                    />
                )
            })}
          </div>
        </section>
        </main>
    )
  }