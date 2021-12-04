import React from 'react'
import {
  Group,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  PanelProps
} from '@vkontakte/vkui'
import { Link } from '@unexp/router'
import persikImage from '../assets/persik.png'

export const Persik: React.FC<PanelProps> = ({ nav }: PanelProps) => {
  return (
    <Panel nav={nav}>
      <PanelHeader
        left={
          <Link to={-1}>
            <PanelHeaderBack />
          </Link>
        }
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
