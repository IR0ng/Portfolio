import React from 'react'

interface IProps {
  children: JSX.Element | JSX.Element[]
}

export const Page = (props: IProps) => {
  const { children } = props
  return (
    <div className={'px-7 pt-3 pb-7 h-screen flex flex-col bg-gray-200 gap-1'}>
      {children}
    </div>
  )
}
