import React from 'react'
import { Group, Panel, PanelHeader, Placeholder } from '@vkontakte/vkui'
import { Icon56GhostOutline } from '@vkontakte/icons'

type InfoProps = {
  nav: string
}

export const Info: React.FC<InfoProps> = (props: InfoProps) => {
  return (
    <Panel nav={props.nav}>
      <PanelHeader>Инфо</PanelHeader>
      <Group>
        <Placeholder
          icon={<Icon56GhostOutline />}
        >
          Здесь ничего нет!
        </Placeholder>
      </Group>
    </Panel>
  )
}
