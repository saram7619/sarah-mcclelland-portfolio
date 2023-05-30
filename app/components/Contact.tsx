import { FaWhatsapp, FaRegEnvelope, FaFacebookMessenger } from "react-icons/fa"
import Link from "next/link"

export default function Contact() {
  return (
    <section
      id='feedback'
      className='bg-gray flex flex-col mx-auto max-w-[1110px] justify-center p-6 items-center gap-8'>
      <div className='lg:flex lg:flex-row lg:justify-between lg:w-full'>
        <div className='lg:w-1/2'>
          <h2 className='text-4xl font-bold mb-5 py-6 md:text-[72px] lg:text-[88px]'>
            Contact Me
          </h2>
          <h3 className='mb-[50px] text-white-2 max-w-[445px]'>
            I would love to hear about your front-end developer opportunities
            that you may have, or if you just want to say hi, please get in
            touch.
          </h3>
        </div>

        <div className='relative bg-gray flex flex-col md:items-end md:max-w-[445px] lg:w-1/2 p-6'>
          <div className='flex-col'>
            <Link href='https://wa.me/447368420365'>
              <FaWhatsapp />
            </Link>
            <p>+44 7368 420365</p>

            <Link href='https://m.me/sara.mcclelland.7'>
              <FaFacebookMessenger />
            </Link>
            <p>Sara McCelland</p>

            <Link href='mailto:saramcclelland@icloud.com'>
              <FaRegEnvelope />
            </Link>
            <p>saramcclelland@icloud.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
