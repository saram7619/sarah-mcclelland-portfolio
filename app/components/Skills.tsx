import Image from "next/image"

const skills = [
  {
    name: "React",
    image: "./react.svg",
  },
  {
    name: "JavaScript",
    image: "./javascript.svg",
  },
  {
    name: "TypeScript",
    image: "./typescript.svg",
  },
  {
    name: "APIs",
    image: "./api-component.svg",
  },
  {
    name: "Tailwind",
    image: "./tailwind-css.svg",
  },
  {
    name: "Figma",
    image: "./figma.svg",
  },
]

const Skills = () => {
  return (
    <section className='relative mx-auto p-6 overflow-x-hidden'>
      <hr className='mx-auto max-w-[1110px] border-slate-200 dark:border-slate-800 mb-[72px]' />
      <div className='container mx-auto max-w-[1110px] p-4 md:p-[30px] mb-15 grid justify-center md:grid-cols-2 grid-rows-3 gap-6 lg:grid-cols-3'>
        <h2 className='hidden'>Skills</h2>
        {skills.map((skill, index) => (
          <div className='grid' key={index}>
            <h3 className='text-center text-[2rem] md:text-left md:text-5xl leading-10 font-bold'>
              {skill.name}
            </h3>
            <div className='py-8'>
              <Image
                src={skill.image}
                alt={skill.name}
                height={60}
                width={60}
              />
            </div>
          </div>
        ))}
      </div>
      <hr className='mx-auto max-w-[1110px] border-slate-200 dark:border-slate-800 my-[2.5rem] md:hidden' />
    </section>
  )
}

export default Skills
