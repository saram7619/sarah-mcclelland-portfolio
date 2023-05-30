import Link from "next/link"
import ProfilePic from "./ProfilePic"

const Hero = () => {
  return (
    <section className='mx-auto max-w-[1110px] flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height'>
      <article className='sm:w-1/2'>
        <h2 className='text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-center -translate-y-6 sm:text-left z-50 max-w-md text-white dark:text-white'>
          Nice to {/*<br className='hidden lg:hidden' />*/}
          {/* eslint-disable-next-line react/no-unescaped-entities*/}
          meet you! I'm{" "}
          <span className='underline-offset-[10px] underline decoration-4 decoration-fuchsia-700'>
            Sara McClelland.
          </span>
        </h2>
        <h3 className='max-w-md text-base my-5 text-center sm:text-left text-slate-700 dark:text-slate-400'>
          {/* eslint-disable-next-line react/no-unescaped-entities*/}
          I'm a Software Engineer.
        </h3>
        <Link
          href='/contact/'
          className='flex flex-col text-white text-center underline-offset-8 underline decoration-green decoration-2 md:text-left hover:text-fuchsia-700'>
          CONTACT ME
        </Link>
      </article>
      <ProfilePic />
    </section>
  )
}

export default Hero
