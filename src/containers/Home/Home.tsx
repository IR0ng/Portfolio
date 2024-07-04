import React from 'react'

import { Page } from '~/components/Page'

import Profile from '../Profile'
import ProjectList from '../ProjectList'

const Home = () => {
  return (
    <Page>
      {/* <div className="flex items-start border">
        <Block styles="flex justify-center p-1 gap-4 rounded-xl">
          <GlobalIcon
            sx={{ fontSize: 25 }}
            className="cursor-pointer"
            color="primary"
          />
        </Block>
      </div> */}
      <div className="flex flex-1 flex-row gap-5 overflow-hidden">
        <Profile />
        <ProjectList />
      </div>
    </Page>
  )
}

export default Home
