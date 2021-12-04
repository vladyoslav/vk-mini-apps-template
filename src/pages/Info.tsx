import React from 'react'
import { Group, Panel, PanelHeader, PanelProps, Placeholder } from '@vkontakte/vkui'
import { Icon56GhostOutline } from '@vkontakte/icons'

export const Info: React.FC<PanelProps> = ({ nav }: PanelProps) => {
  return (
    <Panel nav={nav}>
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
