'use client'
import { useMemo, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPencil } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs'
import Logo from './Logo'
import { NavigationProps } from './types'
import NotificationIcon from './Notification/NotificationIcon/NotificationIcon'
import Link from 'next/link'
import { useAuth } from '@/domains/common/hooks/auth/use-auth'

function TopNavigation({
  isHome,
  isExclude,
  title,
  isMutation,
}: NavigationProps) {
  const router = useRouter()
  const params = useSearchParams()
  const { user, isLoggedIn, isPending } = useAuth()
  const [isMount, setIsMount] = useState(false)

  const date = useMemo(() => {
    if (params.get('date'))
      return dayjs(params.get('date')).format('DD MMMM YYYY')

    return ''
  }, [params])

  const renderContent = () => {
    if (isExclude) return <div />
    if (isPending) return

    if (isHome) {
      return (
        <div className="flex justify-between items-center px-4 py-4 max-w-[500px] md:max-w-[700px] lg:max-w-[1024px] ml-auto mr-auto">
          <Logo />
          <>
            {isLoggedIn && isMount ? (
              <NotificationIcon count={3} />
            ) : !isLoggedIn && isMount ? (
              <div className="flex items-center gap-3">
                <Link className="font-medium" href="/login">
                  <div className="bg-white rounded-lg text-primary-30 flex justify-center px-2 py-1">
                    Login
                  </div>
                </Link>
                <Link className="font-medium" href="/register">
                  Register
                </Link>
              </div>
            ) : (
              <div className="rounded-2xl shimmer w-7 h-7" />
            )}
          </>
        </div>
      )
    }
    if (!isExclude && !isHome) {
      return (
        <div className="flex justify-between items-center px-4 py-4 max-w-[500px] md:max-w-[700px] lg:max-w-[1024px] ml-auto mr-auto">
          <div className="flex items-center gap-2">
            <div>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="w-5 h-4"
                onClick={() => router.back()}
              />
            </div>
            <div className="flex flex-col">
              <span className="inline-block text-2xl">{title}</span>
              <span className="inline-block text-sm ml-1">{date}</span>
            </div>
          </div>
          {isMutation && (
            <FontAwesomeIcon icon={faPencil} className="w-5 h-4" />
          )}
        </div>
      )
    }
  }

  useEffect(() => {
    setIsMount(true)
  }, [])

  return (
    <div
      className="w-full fixed left-0 top-0 text-white bg-primary-30 z-50"
      style={{
        boxShadow:
          '0 3px 5px 0 rgba(0,0,0,.05), 0 1px 18px 0 rgba(0,0,0,.05), 0 6px 10px 0 rgba(0,0,0,.05)',
      }}
    >
      <div className="max-w-[500px] mx-auto">{renderContent()}</div>
    </div>
  )
}

export default TopNavigation
