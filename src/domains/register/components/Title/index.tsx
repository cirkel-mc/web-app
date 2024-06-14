import Image from 'next/image'
import LogoCirkel from '@/views/common/assets/Union.png'

function Title() {
  return (
    <div className="mx-auto bg-primary-30 w-[55px] h-[55px] rounded-lg flex justify-center items-center">
      <Image src={LogoCirkel} height={40} width={40} alt="" className="" />
    </div>
  )
}

export default Title
