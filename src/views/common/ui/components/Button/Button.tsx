import React from 'react'
import type { ReactNode, ComponentPropsWithoutRef } from 'react'

import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode | ReactNode[]
  classes?: string
  id?: string
  dataTestId?: string
  size: 'sm' | 'md' | 'lg' | 'xl'
  btnType?: 'text' | 'fill' | 'outlined'
  fullwidth?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  disabled?: boolean
  round: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '' | 'full'
  variant: 'primary' | 'secondary' | 'ghost'
  onClick?: () => void
}

function Button(props: ButtonProps) {
  const {
    children,
    classes,
    disabled,
    btnType,
    endIcon,
    round,
    startIcon,
    size,
    variant,
    onClick,
    ...rest
  } = props

  const switchSize = (btnSize: string) => {
    switch (btnSize) {
      case 'sm':
        return 'px-2 py-1 text-sm'
      case 'md':
        return 'px-3 py-2 text-base'
      case 'lg':
        return 'px-4 py-2 text-lg'
      case 'xl':
        return 'px-6 py-2.5 text-xl'
      default:
        return ''
    }
  }

  const switchVariant = (varBtn: string) => {
    switch (varBtn) {
      case 'primary':
        return 'bg-primary-30 hover:bg-primary-20'
      case 'secondary':
        return 'bg-secondary-40 hover:bg-secondary-30'
      case 'ghost':
        return 'bg-transparent hover:bg-transaparent !text-black border-[1px] border-primary-40'
      default:
        return ''
    }
  }

  const mergedClass = twMerge(
    'text-white font-medium text-base !rounded-lg hover:opacity-90',
    switchVariant(variant),
    switchSize(size),
    `rounded-${round}`,
    disabled ? '!bg-gray-400 !hover:bg-gray-400 !focus:bg-gray-400' : '',
    classes,
  )

  return (
    <button
      className={mergedClass}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}

export default Button
