import React, { ReactNode } from 'react'
import {
  Panel,
  PanelHeader,
  SplitCol,
  SplitLayout,
  useAdaptivity,
  ViewWidth
} from '@vkontakte/vkui'
import { Epic, Match, Root } from '@unexp/router'
import { NavigationMenu } from './NavigationMenu'
import { Icon28InfoOutline, Icon28UserCircleOutline } from '@vkontakte/icons'
import { NavigationTabbar } from './NavigationTabbar'
import { Modals } from '../../modals'
import { NavigationItem } from '../../types'
import { CustomSnackbar } from '../snackbar/CustomSnackbar'

const items: NavigationItem[] = [
  { to: '/', text: 'Главная', icon: <Icon28UserCircleOutline /> },
  { to: '/info', text: 'Инфо', icon: <Icon28InfoOutline /> }
]

type NavigationProps = {
  children: ReactNode
}

export const Navigation: React.FC<NavigationProps> = ({ children }: NavigationProps) => {
  const { viewWidth } = useAdaptivity()
  const isDesktop: boolean = (viewWidth ?? 0) >= ViewWidth.SMALL_TABLET

  return (
    <Match>
      <SplitLayout
        header={!isDesktop && <PanelHeader separator={false} />}
        style={{ justifyContent: 'center' }}
        modal={<Modals />}
      >
        <SplitCol
          animate={!isDesktop}
          width={isDesktop ? '655px' : '100%'}
          maxWidth={isDesktop ? '655px' : '100%'}
          minWidth={isDesktop ? '655px' : '100%'}
        >
          <Panel nav='/'>
            {isDesktop
              ? <Root nav='/'>{children}</Root>
              : <Epic tabbar={<NavigationTabbar items={items} />}>
                {children}
              </Epic>
            }
            <CustomSnackbar isDesktop={isDesktop} />
          </Panel>
        </SplitCol>
        {isDesktop && <NavigationMenu items={items} />}
      </SplitLayout>
    </Match>
  )
}
