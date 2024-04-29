import React from 'react'

interface IProps {
  children?: JSX.Element | JSX.Element[]
  styles?: React.ComponentProps<'div'>['className']
}

export const Block = (props: IProps) => {
  const { children, styles } = props
  return (
    <div className={`flex bg-black-200 p-3 gap-3 ${styles}`}>{children}</div>
  )
}
