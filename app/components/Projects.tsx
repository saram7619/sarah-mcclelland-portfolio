import Link from "next/link"
import Image from "next/image"

const PROJECT_DATA = [
  {
    name: "Single Page Design Portfolio",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/single-page.webp",
    url: "https://smcc-single-page-portfolio.netlify.app/",
    repo: "https://github.com/saram7619/single-page-design-portfolio/",
  },
  {
    name: "Skilled E-Learning Landing Page",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/skilled-e-learning.webp",
    url: "https://smcc-skilled-landing-page.netlify.app/",
    repo: "https://github.com/saram7619/skilled-e-learning-landing-page-solution/",
  },
  {
    name: "Advice Generator App",
    tags: ["HTML", "CSS", "APIs", "React"],
    image: "/advice-slip-api.webp",
    url: "https://smcc-advice-generator.netlify.app/",
    repo: "https://github.com/saram7619/fem_advice_generator_app/",
  },
  {
    name: "Password Generator",
    tags: ["HTML", "CSS", "Typescript"],
    image: "/password-generator.webp",
    url: "https://smcc-password-generator-app.netlify.app/",
    repo: "https://github.com/saram7619/password-generator/",
  },
]

const Projects = () => {
  return (
    <section className='grid place-items-center mt-0 mb-20 mx-auto max-w-[1110px] p-6'>
      <div className='container mx-auto max-w-[1110px] grid'>
        <div className='flex flex-row justify-between py-8'>
          <h2 className='text-white text-left text-4xl font-bold'>Projects</h2>
          <Link
            href='#contact'
            className='text-white text-right underline-offset-[10px] underline decoration-fuchsia-700 decoration-2 hover:text-fuchsia-700'>
            CONTACT ME
          </Link>
        </div>
        <div className='grid md:grid-cols-2 gap-4'>
          {PROJECT_DATA.map((project) => (
            <div key={project.name} className='md:cols-2 relative'>
              <div className='group'>
                <div>
                  <Image
                    src={project.image}
                    alt={project.name}
                    height={540}
                    width={460}
                    className='transition-opacity duration-300 ease-in-out'
                  />
                </div>
                <div className='hidden lg:block absolute top-0 right-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out'>
                  <div className='mt-32 flex flex-col justify-center items-center space-y-12'>
                    <Link
                      className='text-white text-base underline-offset-8 underline decoration-green hover:text-fuchsia-700'
                      href={project.url}>
                      VIEW PROJECT
                    </Link>
                    <Link
                      className='text-white text-base underline-offset-8 underline decoration-green hover:text-fuchsia-700'
                      href={project.repo}>
                      VIEW CODE
                    </Link>
                  </div>
                </div>
              </div>
              <h3 className='flex flex-row font-bold text-2xl py-[20px]'>
                {project.name}
              </h3>
              <p>
                {project.tags.map((tag, index) => (
                  <span key={index} className='text-lg pe-8 mb-8 font-medium'>
                    {tag}
                  </span>
                ))}
              </p>
              {/* mobile show page and code */}
              <div className='flex items-center space-x-6 my-6 lg:hidden'>
                <Link
                  className='text-white text-base underline-offset-8 underline decoration-fuchsia-700 hover:text-fuchsia-700'
                  href={`/${project.url}`}>
                  VIEW PROJECT
                </Link>
                <Link
                  className='text-white text-base underline-offset-8 underline decoration-fuchsia-700 hover:text-fuchsia-700'
                  href={`/${project.repo}`}
                  VIEW CODE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
