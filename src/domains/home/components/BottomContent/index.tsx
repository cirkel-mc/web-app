import Link from "next/link"

const BottomContent = () => {
  return (
    <div className='flex justify-between'>
      <div className='w-full bg-[#232a21] text-white flex flex-col gap-4 px-6 pt-4 pb-6 mb-[74px]'>
        <p className='font-medium text-lg'>About</p>
        <Link href='/blog'>Blog</Link>
        <Link href='/faq'>FAQ</Link>
        <Link href='/contact-us'>Contact Us</Link>
      </div>
      <div className='w-full bg-[#232a21] text-white flex flex-col gap-4 px-6 pt-4 pb-6 mb-[74px]'>
        <p className='font-medium text-lg'>Partnership</p>
        <Link href='/partner-register'>Join as Venue Owner</Link>
      </div>
    </div>
  )
}

export default BottomContent