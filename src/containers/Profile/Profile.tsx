import React from 'react'

import { Block } from '~/components/Block'

const Profile = () => {
  return (
    <Block styles="flex-col items-center w-[25%]">
      <Block styles="w-full flex-col items-center bg-black-100 py-6 rounded-lg">
        <div className="w-[150px] h-[150px] bg-gray rounded-full" />
        <div className="flex w-full justify-center border-t border-gray-100 py-3">
          <div className="text-slate-200 text-lg font-bold">
            Some introduction
          </div>
        </div>
      </Block>
      <Block styles="w-full flex-1 bg-black-100 rounded-lg">
        <div className="text-slate-200 text-lg font-bold">
          Experience and Skill
        </div>
      </Block>
    </Block>
  )
}

export default Profile
