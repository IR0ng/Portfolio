import { motion } from 'framer-motion'
import React from 'react'

import { SKILL } from '~/constant/data/ProfileData'

export const Skill = () => {
  const data = Object.entries(SKILL)

  return (
    <div className={'p-3 overflow-auto no-scrollbar'}>
      <div className="flex-col items-start gap-3">
        {data.map(([title, dataList], index) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index / 10 }}
              key={index}
              className="relative py-3"
            >
              <div className="flex justify-start border rounded-lg">
                <div className="absolute top-0 left-2 leading-4 bg-gray-300">
                  {title}
                </div>
                <div className="flex flex-wrap flex-row items-start px-2 py-3 gap-2">
                  {dataList.map(data => {
                    return (
                      <div className="border px-2 rounded-xl bg-gray-100 text-blue-100 text-sm">
                        {data}
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
