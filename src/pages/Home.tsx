import React, { Ref, useRef } from 'react'
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
import { setDoneSnackbar, setErrorSnackbar, setPopout } from '../hooks'
import { TestActionSheet, TestAlert } from '../popouts'
import { useRouter } from '@cteamdev/router'

export const Home: React.FC<PanelProps> = ({ nav }: PanelProps) => {
  const { push } = useRouter()
  const vkUser: UserInfo = useAtomValue(vkUserAtom)
  const ref: Ref<HTMLElement> = useRef<HTMLElement>(null)

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
          onClick={() => push('/?m=modal')}
        >
          Покажи модальную карточку
        </SimpleCell>
      </Group>
      <Group>
        <SimpleCell
          before={<Icon28WarningTriangleOutline />}
          onClick={() => setPopout(<TestAlert />)}
        >
          Покажи алерт
        </SimpleCell>
        <SimpleCell
          before={<Icon28ArticleOutline />}
          getRootRef={ref}
          onClick={() => setPopout(<TestActionSheet toggleRef={ref.current} />)}
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
