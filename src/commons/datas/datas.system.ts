import type { MenuInfos } from './datas.types'

export const menus: MenuInfos[] = [
  {
    index: '1',
    key: 'product',
    title: '产品能力',
    lang: 'menu.home',
    path: '',
    icon: '',
    infos: {
      height: 500
    },
    children: [
      {
        index: '1-1',
        key: 'data',
        title: '数据服务',
        lang: '',
        path: '',
        children: [
          {
            index: '1-1-1',
            key: 'data',
            title: '数据处理',
            lang: '',
            path: '',
            children: [
              {
                index: '1-1-1-1',
                key: '',
                title: '探索性数据分析',
                lang: '',
                path: '/eda',
                infos: {
                  isJump: false,
                  status: 'HOT',
                  desc: 'EDA 性能优越 多平台'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    index: '2',
    key: 'game',
    title: '产品能力',
    lang: 'menu.game',
    path: '',
    icon: '',
    infos: {
      height: 500
    },
    children: [
      {
        index: '2-1',
        key: 'game',
        title: '游戏图鉴',
        lang: '',
        path: '',
        children: [
          {
            index: '2-1-1',
            key: 'game',
            title: '图鉴',
            lang: '',
            path: '',
            children: [
              {
                index: '2-1-1-1',
                key: '',
                title: '图鉴',
                lang: '',
                path: '/wiki',
                infos: {
                  isJump: false,
                  status: 'HOT',
                  desc: '游戏图鉴 游戏攻略'
                }
              }
            ]
          }
        ]
      }
    ]
  }
]
