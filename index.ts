import { setConfig } from '@icon-park/svg/es'

// 设置svg基础样式
setConfig({
  theme: 'outline',
  size: '1em',
  strokeWidth: 4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  prefix: 't',
  colors: {
    outline: {
      fill: 'currentColor',
      background: 'white'
    },
    filled: {
      fill: 'currentColor',
      background: 'white'
    },
    twoTone: {
      fill: 'currentColor',
      twoTone: 'white'
    },
    multiColor: {
      outStrokeColor: 'currentColor',
      outFillColor: 'white',
      innerStrokeColor: 'currentColor',
      innerFillColor: 'white'
    }
  }
})

/** 默认图标svg -> 来自iconpark矢量图标库 */
export * from '@icon-park/svg/es/map'
/** 预设图标 -> 可以自定义图标组件 */
export * as Presets from './src'
