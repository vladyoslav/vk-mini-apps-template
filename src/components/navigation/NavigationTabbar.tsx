import React from 'react'
import { Tabbar, TabbarItem } from '@vkontakte/vkui'
import { transition, useDeserializedLocation } from '@unexp/router'
import { NavigationItem } from '../../types'

type NavigationTabbarProps = {
  items: NavigationItem[]
}

export const NavigationTabbar: React.FC<NavigationTabbarProps> = ({ items }: NavigationTabbarProps) => {
  const { view } = useDeserializedLocation()

  return (
    <Tabbar>
      {items.map(item =>
        <TabbarItem
          key={item.to}
          selected={item.to === view}
          text={item.text}
          onClick={() => item.to !== view && transition(item.to, { replace: true })}
        >
          {item.icon}
        </TabbarItem>
      )}
    </Tabbar>
  )
}
