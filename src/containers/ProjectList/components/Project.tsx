import GitHubIcon from '@mui/icons-material/GitHub'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IProjectProps {
  name: string
  icon: StaticImageData
  url: string
  time: string
  type: string
  content: string
  introduction: string
  githubUrl?: string
}

export const Project = ({ project }: { project: IProjectProps }) => {
  return (
    <div className={'flex bg-gray-300 p-3 gap-2 rounded-2xl'}>
      <Link href={project.url} className="relative h-[150px] w-[150px]">
        <Image
          className="object-cover bg-gray-100 rounded-bl-2xl cursor-pointer"
          src={project.icon || require('@/images/no_image.png')}
          width={150}
          height={150}
          alt={`${project.name} icon`}
        />
      </Link>
      <div className="relative flex flex-1 bg-gray-100 rounded-tr-2xl pt-6 pb-3 px-3">
        <div className="border flex-1 rounded-2xl px-3">
          <div className="absolute bg-gray-100 top-2 text-blue-100 text-2xl leading-5">
            <Link href={project.url}>{project.name}</Link>
          </div>
          <div className="flex flex-col gap-1 px-2 py-3">
            <div>負責：{project.content}</div>
            <div>{project.introduction}</div>
          </div>
          {project.githubUrl && (
            <Link href={project.githubUrl}>
              <div className="pl-2">
                <GitHubIcon className="cursor-pointer" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
