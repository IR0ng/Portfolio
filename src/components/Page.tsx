import React from 'react'

interface IProps {
  children: JSX.Element | JSX.Element[]
}

export const Page = (props: IProps) => {
  const { children } = props
  return (
    <div className={'p-7 h-screen flex flex-row bg-black gap-7'}>
      {children}
    </div>
  )
}
