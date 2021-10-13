import React from 'react'
import {
  Group,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder
} from '@vkontakte/vkui'
import { Link } from '@unexp/router'
import persikImage from '../assets/persik.png'

type PersikProps = {
  nav: string
}

export const Persik: React.FC<PersikProps> = (props: PersikProps) => {
  return (
    <Panel nav={props.nav}>
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
