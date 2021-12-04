import React, { useEffect } from 'react'
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider
} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import { View } from '@cteamdev/router'
import { Home, Info, Persik } from './pages'
import { Navigation } from './components/navigation'
import { useSetAtomState } from '@mntm/precoil'
import { vkUserAtom } from './store'
import bridge, { UserInfo } from '@vkontakte/vk-bridge'
import { Wrappers } from './components/wrappers/Wrappers'

export const App: React.FC = () => {
  const setVkUser = useSetAtomState(vkUserAtom)

  useEffect(() => {
    const load = async () => {
      const vkUser: UserInfo = await bridge.send('VKWebAppGetUserInfo')
      setVkUser(vkUser)
    }

    load()
  }, [])

  return (
    <Wrappers>
      <Navigation>
        <View nav='/'>
          <Home nav='/' />
          <Persik nav='/persik' />
        </View>
        <View nav='/info'>
          <Info nav='/' />
        </View>
      </Navigation>
    </Wrappers>
  )
}
