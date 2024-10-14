import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import React from 'react'

import { Page } from '~/components/Page'

import Profile from '../Profile'
import ProjectList from '../ProjectList'

const Home = () => {
  return (
    <Page>
      <Head>
        <title>周逸榮-前端工程師 作品集</title>
        <meta
          name="description"
          content="大家好，我是一名前端工程師，非常喜歡研究、學習與程式相關的技術，這裡是我的作品集。"
        />
        <meta
          name="keywords"
          content="周逸榮 前端工程師 frontend web app React React-Native Next.js TypeScript"
        />
      </Head>
      <Analytics />
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
