import { StaticImageData } from 'next/image'

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

export const EXPERIENCE_LIST: IProjectProps[] = [
  {
    name: 'Mentor-zoo',
    icon: '',
    url: 'https://mentor-zoo.vercel.app',
    time: '2022-10',
    type: 'Project',
    content: '前端、後端',
    introduction:
      'Mentor-zoo是一個產業資訊媒合平台。這裡有各行各業的導師分享產業現況、職崖建議、工作經驗等資訊。讓新鮮人、有轉職意向者，快速了解各行業資訊、現況。',
  },
  {
    name: 'Onlyface app',
    icon: require('@/images/onlyface_icon.png'),
    url: 'https://www.onlyface.app/',
    time: '2023-05',
    type: 'Side-project',
    content: '前端、後端',
    introduction:
      'Onlyface app是一個具有審核機制的社交平台，由已加入的會員審核新註冊用戶，且會確保各個用戶皆是真人，保證平台的品質與安全性，以供大家使用。',
  },
  // {
  //   name: 'Hoja app',
  //   icon: '',
  //   url: '',
  //   time: '2024-04',
  //   type: 'Side-project',
  //   content: '前端',
  //   introduction: 'Hoja app是一個美食訂購平台。',
  // },
  {
    name: 'Minesweeper',
    icon: require('@/images/minesweeper.png'),
    url: 'https://minesweeper-gold-five.vercel.app',
    time: '2024-05',
    type: 'practice',
    content: '練習',
    introduction:
      'Minesweeper 是我為了練習流程設計、加深React與MobX的基本功，而建立。',
    githubUrl: 'https://github.com/IR0ng/Minesweeper',
  },
  {
    name: 'Mora',
    icon: require('@/images/mora.png'),
    url: 'https://mora-app.vercel.app',
    time: '2024-05',
    type: 'practice',
    content: '練習',
    introduction: 'Mora 是我與朋友為了練習流程設計、Socket.io，而建立。',
    githubUrl: 'https://github.com/hryjosn/mora-app',
  },
  {
    name: 'Code-Help',
    icon: '',
    url: '',
    time: '2024-07',
    type: 'Side-project',
    content: '前端、後端',
    introduction:
      'Code Help 是目前正在參與開發的Side Project，為了解決當我們遇到與程式相關，且無法處理的緊急問題時，可以在這裡及時求救。',
  },
]

export const SKILL = {
  Code: ['Javascript', 'Typescript', 'Java'],
  Frontend: [
    'React',
    'Next.js',
    'TailwindCSS',
    'material UI',
    'mobx',
    'TanStack Query',
  ],
  Backend: ['node.js', 'express'],
  MobileApp: ['React Native'],
  Databases: ['mongoDB', 'PostgreSQL'],
  WannaLearn: ['Unity'],
}
