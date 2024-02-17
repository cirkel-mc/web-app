import React from 'react'

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <span className='inline-block'>{title}</span>
  )
}

export default Title