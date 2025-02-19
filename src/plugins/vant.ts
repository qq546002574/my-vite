import type { App } from 'vue'
import '@vant/touch-emulator'
import 'vant/lib/index.css'

import { Lazyload, Button }  from 'vant'

export const setupVant = (app: App) => {
  app.use(Lazyload)
  app.use(Button)
}
