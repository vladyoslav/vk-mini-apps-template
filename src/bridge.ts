import bridge, { AnyReceiveMethodName, VKBridgeEvent } from '@vkontakte/vk-bridge'

bridge.subscribe((e: VKBridgeEvent<AnyReceiveMethodName>) => {
  if (e.detail.type === 'VKWebAppUpdateConfig') {
    const scheme: string = e.detail.data.scheme || 'client_light'
    document.body.setAttribute('scheme', scheme)
  }
})

bridge.send('VKWebAppInit').then()
