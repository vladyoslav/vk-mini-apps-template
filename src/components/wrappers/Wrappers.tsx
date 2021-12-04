import { AdaptivityProvider, AppRoot, ConfigProvider, PlatformType } from '@vkontakte/vkui'
import React, { ReactNode } from 'react'
import { getPlatform } from '../../utils'
import { AppearanceSchemeType } from '@vkontakte/vk-bridge'
import { useAtomValue } from '@mntm/precoil'
import { currentSchemeAtom } from '../../store'

type WrappersProps = {
  children: ReactNode
}

export const Wrappers: React.FC<WrappersProps> = ({ children }: WrappersProps) => {
  const platform: PlatformType = getPlatform()
  const currentScheme: AppearanceSchemeType = useAtomValue(currentSchemeAtom)

  return (
    <ConfigProvider platform={platform} scheme={currentScheme}>
      <AdaptivityProvider>
        <AppRoot>
          {children}
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}
