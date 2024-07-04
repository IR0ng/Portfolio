import React from 'react'

interface IProjectProps {
  children?: React.ReactNode
  styles?: React.ComponentProps<'div'>['className']
  roundedSide: 'left' | 'right'
  isSelected: boolean
  onClick: () => void
}

enum ROUNDED_SIDE_CSS {
  left = 'rounded-l-lg',
  right = 'rounded-r-lg',
}

export const TouchableTag = (props: IProjectProps) => {
  const { children, styles, roundedSide, isSelected = false, onClick } = props

  return (
    <div
      className={`px-2 py-1 border text-gray-100 bg-gray-400 cursor-pointer ${
        isSelected && 'text-black bg-gray-100 border-gray-400'
      } ${ROUNDED_SIDE_CSS[roundedSide]} ${styles}`}
      onClick={() => onClick()}
    >
      {children}
    </div>
  )
}
