'use client'
import { useState, useEffect } from 'react'
import HomeFilter from '@/domains/common/components/HomeFilter'
import CardCarousel from '@/domains/common/components/CardCarousel'
import AvatarCarousel from '@/domains/common/components/AvatarCarousel'
import NearMeCarousel from '@/domains/home/components/NearMeCarousel'
import ActiveSession from '@/domains/home/components/ActiveSession'
import Loader from '@/domains/home/components/ActiveSession/Loader'

import { useAuth } from '@/domains/common/hooks/auth/use-auth'
import { cardCarouselData } from '@/models/common/mock-data/card-carousel-data'
import { avatarCarouselData } from '@/models/common/mock-data/avatar-carousel-data'
import BottomContent from '@/domains/home/components/BottomContent'

function Home() {
  const { user } = useAuth()
  const [isMount, setIsMount] = useState(false)

  const renderActiveSession = () => {
    if (!isMount) return <Loader />
    if (!user && isMount) return <div />

    return <ActiveSession />
  }

  useEffect(() => {
    setIsMount(true)
  }, [])

  return (
    <>
      <div className="px-4 mt-[90px] mb-8 max-w-[500px] mx-auto">
        <HomeFilter />
        <div className="lg:max-w-[1024px] pt-6 mx-auto">
          {renderActiveSession()}
          <NearMeCarousel />
          <AvatarCarousel title="Popular Musician" data={avatarCarouselData} />
          <CardCarousel title="Recomended Studio" data={cardCarouselData} />
        </div>
      </div>
      <BottomContent />
    </>
  )
}

export default Home
