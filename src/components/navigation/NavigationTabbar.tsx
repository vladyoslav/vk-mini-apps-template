import React from 'react'
import { Tabbar, TabbarItem } from '@vkontakte/vkui'
import { transition, useDeserializedLocation } from '@unexp/router'
import { NavigationItem } from '../../types'

type NavigationTabbarProps = {
  items: NavigationItem[]
}

export const NavigationTabbar: React.FC<NavigationTabbarProps> = ({ items }: NavigationTabbarProps) => {
  const { root } = useDeserializedLocation()

  return (
    <Tabbar>
      {items.map(item =>
        <TabbarItem
          key={item.to}
          selected={item.to === root}
          text={item.text}
          onClick={() => item.to !== root && transition(item.to)}
        >
          {item.icon}
        </TabbarItem>
      )}
    </Tabbar>
  )
}
