import React, { useEffect } from 'react'
import { 
  AdaptivityProvider,
  AppRoot,
  ConfigProvider, 
  PlatformType
} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import { View, Root } from '@unexp/router'
import { Home, Info, Persik } from './pages'
import { Navigation } from './components/navigation'
import { getPlatform } from './utils/getPlatform'
import { useSetAtomState } from '@mntm/precoil'
import { vkUserAtom } from './store/atoms'
import bridge, { UserInfo } from '@vkontakte/vk-bridge'

export const App: React.FC = () => {
  const platform: PlatformType = getPlatform()
  const setVkUser = useSetAtomState(vkUserAtom)

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
            <Root nav='/'>
              <View nav='/'>
                <Home nav='/' />
                <Persik nav='/persik' />
              </View>
            </Root>
            <Root nav='/info'>
              <View nav='/'>
                <Info nav='/' />
              </View>
            </Root>
          </Navigation>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}
