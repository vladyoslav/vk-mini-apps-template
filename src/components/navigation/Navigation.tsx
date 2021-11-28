import React, { ReactNode } from 'react'
import {
  PanelHeader,
  SplitCol,
  SplitLayout,
  useAdaptivity,
  ViewWidth
} from '@vkontakte/vkui'
import { NavigationMenu } from './NavigationMenu'
import { Icon28InfoOutline, Icon28UserCircleOutline } from '@vkontakte/icons'
import { NavigationTabbar } from './NavigationTabbar'
import { Modals } from '../../modals'
import { NavigationItem } from '../../types'
import { CustomSnackbar } from '../snackbar/CustomSnackbar'
import { Structure, Epic } from '@cteamdev/router'
import { Popouts } from '../../popouts'

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
    <Structure>
      <SplitLayout
        header={!isDesktop && <PanelHeader separator={false} />}
        style={{ justifyContent: 'center' }}
        modal={<Modals />}
        popout={<Popouts />}
      >
        <SplitCol
          animate={!isDesktop}
          width={isDesktop ? '550px' : '100%'}
          maxWidth={isDesktop ? '550px' : '100%'}
        >
          <Epic tabbar={!isDesktop && <NavigationTabbar items={items} />}>
            {children}
          </Epic>
          <CustomSnackbar isDesktop={isDesktop} />
        </SplitCol>
        {isDesktop && <NavigationMenu items={items} />}
      </SplitLayout>
    </Structure>
  )
}
