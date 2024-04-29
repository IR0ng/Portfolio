import React from 'react'

interface IProjectBlockProps {
  image: string
  title: string
  content: string
  url: string
}

export const ProjectBlock = (props: IProjectBlockProps) => {
  const { image, title, content, url } = props
  return (
    <div className={'flex bg-black-100 p-3 gap-2 rounded-2xl'}>
      <div className="bg-gray-100 h-[150px] w-[150px] rounded-bl-2xl" />
      <div className="bg-gray-100 flex-1 rounded-tr-2xl py-1 px-2">
        <div>{title}</div>
        <div>{content}</div>
      </div>
    </div>
  )
}
