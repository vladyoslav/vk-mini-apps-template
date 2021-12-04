import React from 'react'
import { Avatar, Group, Panel, PanelHeader, PanelProps, SimpleCell } from '@vkontakte/vkui'
import {
  Icon28BillheadOutline,
  Icon28ChevronRightOutline,
  Icon28CheckCircleOutline,
  Icon28CancelCircleOutline,
  Icon28PawOutline,
  Icon28WarningTriangleOutline,
  Icon28ArticleOutline
} from '@vkontakte/icons'
import { UserInfo } from '@vkontakte/vk-bridge'
import { useAtomValue } from '@mntm/precoil'
import { vkUserAtom } from '../store'
import { setDoneSnackbar, setErrorSnackbar } from '../hooks'
import { push } from '@cteamdev/router'

export const Home: React.FC<PanelProps> = ({ nav }: PanelProps) => {
  const vkUser: UserInfo = useAtomValue(vkUserAtom)

  return (
    <Panel nav={nav}>
      <PanelHeader>Главная</PanelHeader>
      <Group>
        <SimpleCell
          before={
            <Avatar size={72} src={vkUser.photo_200} />
          }
          description='Это же ты!'
        >
          {vkUser.first_name} {vkUser.last_name}
        </SimpleCell>
      </Group>
      <Group>
        <SimpleCell
          before={<Icon28PawOutline />}
          after={<Icon28ChevronRightOutline />}
          onClick={() => push('/persik')}
        >
          Покажи Персика!
        </SimpleCell>
      </Group>
      <Group>
        <SimpleCell
          before={<Icon28BillheadOutline />}
          onClick={() => push('/?modal=modal')}
        >
          Покажи модальную карточку
        </SimpleCell>
      </Group>
      <Group>
        <SimpleCell
          before={<Icon28WarningTriangleOutline />}
          onClick={() => push('/?popout=alert')}
        >
          Покажи алерт
        </SimpleCell>
        <SimpleCell
          id='ShowAlert'
          before={<Icon28ArticleOutline />}
          onClick={() => push('/?popout=action-sheet')}
        >
          Покажи список опций
        </SimpleCell>
      </Group>
      <Group>
        <SimpleCell
          before={<Icon28CheckCircleOutline />}
          onClick={() => setDoneSnackbar('Это добрый снекбар')}
        >
          Покажи добрый снекбар
        </SimpleCell>
        <SimpleCell
          before={<Icon28CancelCircleOutline />}
          onClick={() => setErrorSnackbar('Это злой снекбар')}
        >
          Покажи злой снекбар
        </SimpleCell>
      </Group>
    </Panel>
  )
}
