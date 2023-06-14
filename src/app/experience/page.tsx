import { ExperienceCard } from "@/component/experience_card"
import { dummyExperience } from "./dummy"

export default function Experience() {
    return (
      <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col">
        <section>
          <h1 className=" font-serif text-3xl font-bold mb-2 md:mb-8">Experience</h1>
          <div className="px-2">
            {dummyExperience.map((el,index)=>{
                return (
                    <ExperienceCard 
                        key={index} 
                        title={el.title}
                        company = {el.company}
                        location={el.location}
                        startDate={el.startDate}
                        endDate={el.endDate}
                        detail={el.detail}
                    />
                )
            })}
          </div>
        </section>
        </main>
    )
  }