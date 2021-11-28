import React from 'react'
import {
  Group,
  Panel,
  SimpleCell,
  SplitCol
} from '@vkontakte/vkui'
import { NavigationItem } from '../../types'
import { replace, useCurrentState } from '@cteamdev/router'

type NavigationMenuProps = {
  items: NavigationItem[]
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ items }: NavigationMenuProps) => {
  const { view } = useCurrentState()

  return (
    <SplitCol width='280px' maxWidth='280px' spaced fixed>
      <Panel nav='/'>
        <Group>
          {items.map(item =>
            <SimpleCell
              key={item.to}
              before={item.icon}
              disabled={item.to === view}
              onClick={() => item.to !== view && replace(item.to)}
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
