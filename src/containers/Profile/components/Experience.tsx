import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

import { EXPERIENCE_LIST } from '~/constant/data/ProfileData'

export const Experience = () => {
  return (
    <div className={'p-3 overflow-auto no-scrollbar'}>
      {EXPERIENCE_LIST.map((data, index) => {
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index / 10 }}
            key={index}
            className="flex flex-row h-[100px] gap-4 items-start"
          >
            <div className="flex flex-col items-center h-full py-1">
              <div className="h-2 w-2 rounded-full bg-white" />
              <div className="h-full border border-gray-200" />
            </div>
            <div className="flex flex-1 flex-col items-start leading-4 cursor-pointer">
              <Link href={data.url}>
                <div className="text-blue-100">{data.name}</div>
              </Link>
              <div className="text-gray-100 text-sm">{data.content}</div>
            </div>
            <div className="text-gray-100 text-sm">{data.time}</div>
          </motion.div>
        )
      })}
    </div>
  )
}
