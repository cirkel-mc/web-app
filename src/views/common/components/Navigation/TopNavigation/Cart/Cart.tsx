'use client'
import React, { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

import IconCart from '@/views/common/components/Icons/Cart'
import { emitter } from '@/utils/event/emitter'
import Popup from './Popup'

interface CartProps {
  ordersCount: number
}

const Cart = ({ ordersCount }: CartProps) => {
  const router = useRouter()
  const [active, setActive] = useState(false)

  useEffect(() => {
    emitter.on('@buy-from-card', (payload) => {
      setActive(true)
    })

    return () => {
      emitter.off('@buy-from-card', (payload) => {
        setActive(true)
      })
    }
  }, [])

  return (
    <Fragment>
      <div
        className={clsx(
          'relative p-2 rounded-full cursor-pointer',
          active && 'bg-slate-300',
        )}
      >
        {ordersCount > 0 && (
          <div className="absolute -right-1 -top-1 w-5 h-5 text-xs bg-yellow-500 text-white rounded-full flex items-center justify-center">
            {ordersCount}
          </div>
        )}
        <IconCart
          className="text-white fill-white"
          onClick={() => setActive(!active)}
        />
      </div>
      {active && (
        <Popup
          onClose={() => setActive(false)}
          onSubmit={() => router.push('/payment')}
        />
      )}
    </Fragment>
  )
}

export default Cart
