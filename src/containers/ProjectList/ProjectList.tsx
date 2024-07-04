import { motion } from 'framer-motion'
import React from 'react'

import { Block } from '~/components/Block'
import { EXPERIENCE_LIST } from '~/constant/data/ProfileData'

import { Project } from './components/Project'

const ProjectList = () => {
  return (
    <Block>
      <Block styles="flex-1 overflow-auto no-scrollbar rounded-xl px-0 py-0">
        {EXPERIENCE_LIST.map((data, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index / 10 }}
              key={index}
            >
              <Project project={{ ...data }} />
            </motion.div>
          )
        })}
      </Block>
    </Block>
  )
}

export default ProjectList
