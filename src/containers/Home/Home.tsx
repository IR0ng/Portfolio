import React from 'react'

import { Page } from '~/components/Page'

import Profile from '../Profile'
import Project from '../Project'

const Home = () => {
  return (
    <Page>
      <Profile />
      <Project />
    </Page>
  )
}

export default Home
