
const skill = [
  "typescript", 
  "go", 
  "mysql",
  "nestjs", 
  "websocket",
  "socketio", 
  "redis", 
  "typeorm",
  "rabbitmq",
  "axios", 
  "docker",
  "golang", 
  "gin", 
  "mongodb",
  "grpc", 
  "AWS S3",
  "cobra",
  "gorm", 
  "go chi"
]

export default function Skill() {
  return (
    <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
      <section>
        <h1 className=" font-serif text-3xl font-bold mb-2 md:mb-8">Skill</h1>
        <div className="flex flex-row flex-wrap item-start gap-2">
                    {skill.map((el, index)=> {
                        return (
                            <p className="px-2 py-1 my-1 bg-slate-200 hover:bg-slate-400 hover:font-semibold rounded-md text-sm " key={index}>{el}</p>
                        )
                    })}
                </div>
      </section>
      </main>
  )
}
