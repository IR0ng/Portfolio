import React from 'react'

import { Block } from '~/components/Block'

import { ProjectBlock } from './components/ProjectBlock'

const Project = () => {
  return (
    <Block styles="flex-1 flex-col">
      <ProjectBlock
        image=""
        title="Project Title"
        content="Project Content"
        url=""
      />
    </Block>
  )
}

export default Project
