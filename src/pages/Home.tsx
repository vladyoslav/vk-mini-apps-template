import React from 'react'
import { Avatar, Group, Panel, PanelHeader, SimpleCell } from '@vkontakte/vkui'
import { Link, transition } from '@unexp/router'
import {
  Icon28BillheadOutline,
  Icon28ChevronRightOutline,
  Icon28CheckCircleOutline,
  Icon28CancelCircleOutline,
  Icon28PawOutline
} from '@vkontakte/icons'
import { UserInfo } from '@vkontakte/vk-bridge'
import { useAtomValue } from '@mntm/precoil'
import { vkUserAtom } from '../store/atoms'
import { setDoneSnackbar, setErrorSnackbar } from '../hooks/snackbar'

type HomeProps = {
  nav: string
}

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const vkUser: UserInfo = useAtomValue(vkUserAtom)

  return (
    <Panel nav={props.nav}>
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
        <Link to='/persik'>
          <SimpleCell
            before={<Icon28PawOutline />}
            after={<Icon28ChevronRightOutline />}
          >
            Покажи Персика!
          </SimpleCell>
        </Link>
        <SimpleCell
          before={<Icon28BillheadOutline />}
          onClick={() => transition('/?m=modal')}
        >
          Покажи модальную карточку
        </SimpleCell>
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
