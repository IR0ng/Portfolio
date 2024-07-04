import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'

import { Block } from '~/components/Block'

import { Experience } from './components/Experience'
import { Skill } from './components/Skill'
import { TouchableTag } from './components/TouchableTag'

enum DISPLAY_TARGET {
  EXPERIENCE = 'Experience',
  SKILL = 'Skill',
}

const Profile = () => {
  const [displayTarget, setDisplayTarget] = useState<'Experience' | 'Skill'>(
    DISPLAY_TARGET.EXPERIENCE,
  )
  return (
    <Block styles="flex-col w-1/4">
      <Block styles="items-center pt-6 pb-3 rounded-lg bg-gray-300">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex w-[150px] h-[150px]"
        >
          <Image
            className="object-cover rounded-full"
            src={require('@/images/my_photo.jpg')}
            width={150}
            height={150}
            alt="Zhou I-Rong"
          />
        </motion.div>
        <div>
          <div className="text-slate-200 text-lg font-bold text-center">
            周逸榮
          </div>
          <div className="text-white text-xs text-center">年齡 21</div>
        </div>
        <div className="border-t border-gray-100 py-3 text-slate-200 font-bold text-center">
          大家好，我是一名前端工程師，非常喜歡研究、學習與程式相關的技術。
        </div>
      </Block>
      <Block styles="flex-1 bg-gray-300 rounded-lg overflow-hidden">
        <div className="flex flex-row gap-1 justify-center items-center">
          <TouchableTag
            roundedSide="left"
            isSelected={displayTarget === DISPLAY_TARGET.EXPERIENCE}
            onClick={() => setDisplayTarget(DISPLAY_TARGET.EXPERIENCE)}
          >
            經驗
          </TouchableTag>
          <TouchableTag
            roundedSide="right"
            isSelected={displayTarget === DISPLAY_TARGET.SKILL}
            onClick={() => setDisplayTarget(DISPLAY_TARGET.SKILL)}
          >
            技能
          </TouchableTag>
        </div>
        {displayTarget === DISPLAY_TARGET.EXPERIENCE && <Experience />}
        {displayTarget === DISPLAY_TARGET.SKILL && <Skill />}
      </Block>
    </Block>
  )
}

export default Profile
