import bridge, { AnyReceiveMethodName, AppearanceSchemeType, VKBridgeEvent } from '@vkontakte/vk-bridge'
import { currentSchemeAtom } from './store'

bridge.subscribe((e: VKBridgeEvent<AnyReceiveMethodName>) => {
  if (e.detail.type === 'VKWebAppUpdateConfig') {
    const scheme: AppearanceSchemeType = e.detail.data.scheme || 'client_light'
    currentSchemeAtom.set(scheme)
  }
})

bridge.send('VKWebAppInit').then()
