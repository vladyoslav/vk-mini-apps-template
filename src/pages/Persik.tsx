import React from 'react'
import {
  Group,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  PanelProps
} from '@vkontakte/vkui'
import persikImage from '../assets/persik.png'
import { back } from '@cteamdev/router'

export const Persik: React.FC<PanelProps> = ({ nav }: PanelProps) => {
  return (
    <Panel nav={nav}>
      <PanelHeader
        left={<PanelHeaderBack onClick={back} />}
      >
        Персик
      </PanelHeader>
      <Group>
        <Placeholder
          icon={<img src={persikImage} width={128} />}
        />
      </Group>
    </Panel>
  )
}
