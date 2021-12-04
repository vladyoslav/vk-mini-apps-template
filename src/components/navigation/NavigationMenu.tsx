import React from 'react'
import {
  Group,
  Panel,
  SimpleCell,
  SplitCol
} from '@vkontakte/vkui'
import { transition, useLocation } from '@unexp/router'
import { NavigationItem } from '../../types'

type NavigationMenuProps = {
  items: NavigationItem[]
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ items }: NavigationMenuProps) => {
  const { pathname } = useLocation()

  const view: string = '/' + pathname.split('/')[1]

  console.log(pathname)
  // const { view } = useDeserializedLocation()

  return (
    <SplitCol width='280px' maxWidth='280px' spaced fixed>
      <Panel nav='/'>
        <Group>
          {items.map(item =>
            <SimpleCell
              key={item.to}
              before={item.icon}
              disabled={item.to === view}
              onClick={() => item.to !== view && transition(item.to, { replace: true })}
              style={item.to === view ? { backgroundColor: 'var(--button_secondary_background)' } : {}}
            >
              {item.text}
            </SimpleCell>
          )}
        </Group>
      </Panel>
    </SplitCol>
  )
}
