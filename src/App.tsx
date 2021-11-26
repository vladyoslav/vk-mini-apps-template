import React, { useEffect } from 'react'
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  PlatformType
} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import { useRouter, View } from '@cteamdev/router'
import { Home, Info, Persik } from './pages'
import { Navigation } from './components/navigation'
import { getPlatform } from './utils'
import { useSetAtomState } from '@mntm/precoil'
import { vkUserAtom } from './store'
import bridge, { UserInfo } from '@vkontakte/vk-bridge'

export const App: React.FC = () => {
  const platform: PlatformType = getPlatform()
  const setVkUser = useSetAtomState(vkUserAtom)
  const { history } = useRouter()
  console.log(history)

  useEffect(() => {
    const load = async () => {
      const vkUser: UserInfo = await bridge.send('VKWebAppGetUserInfo')
      setVkUser(vkUser)
    }

    load()
  }, [])

  return (
    <ConfigProvider platform={platform}>
      <AdaptivityProvider>
        <AppRoot>
          <Navigation>
            <View nav='/'>
              <Home nav='/' />
              <Persik nav='/persik' />
            </View>
            <View nav='/info'>
              <Info nav='/' />
            </View>
          </Navigation>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}
