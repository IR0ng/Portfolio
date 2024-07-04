import React from 'react'

interface IProps {
  children?: React.ReactNode
  styles?: React.ComponentProps<'div'>['className']
}

export const Block = (props: IProps) => {
  const { children, styles } = props
  return (
    <div
      className={`flex flex-col bg-gray-400 text-slate-200 p-3 gap-3 ${styles}`}
    >
      {children}
    </div>
  )
}
