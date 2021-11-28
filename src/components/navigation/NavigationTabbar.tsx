import React from 'react'
import { Tabbar, TabbarItem } from '@vkontakte/vkui'
import { NavigationItem } from '../../types'
import { replace, useCurrentState } from '@cteamdev/router'

type NavigationTabbarProps = {
  items: NavigationItem[]
}

export const NavigationTabbar: React.FC<NavigationTabbarProps> = ({ items }: NavigationTabbarProps) => {
  const { view } = useCurrentState()

  return (
    <Tabbar>
      {items.map(item =>
        <TabbarItem
          key={item.to}
          selected={item.to === view}
          text={item.text}
          onClick={() => item.to !== view && replace(item.to)}
        >
          {item.icon}
        </TabbarItem>
      )}
    </Tabbar>
  )
}
