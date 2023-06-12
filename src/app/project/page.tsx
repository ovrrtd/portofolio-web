import { ProjectCard } from "@/component/project_card"
import { dummyProject } from "./dummy"

export default function Project() {
  return (
    <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
      <section className="">
          <h1 className="font-serif text-3xl font-bold mb-2 md:mb-8">Project</h1>
          <div className="px-2 ">
            {dummyProject.map((el,index)=>{
                return (
                    <ProjectCard 
                        key={index} 
                        title={el.title}
                        description={el.description}
                        techStack={el.techStack}
                    />
                )
            })}
          </div>
        </section>
      </main>
  )
}
