import React from 'react'
import { Alert } from '@vkontakte/vkui'
import { PopoutProps } from '../types'
import { back } from '@cteamdev/router'

export const TestAlert: React.FC<PopoutProps> = () => {

  return (
    <Alert
      actions={[{
        title: 'Круто!',
        mode: 'destructive',
        autoclose: true
      }, {
        title: 'Отмена',
        mode: 'cancel',
        autoclose: true
      }]}
      onClose={back}
      header='Тестовый алерт'
      text='Это тестовый алерт!'
      actionsLayout='vertical'
    />
  )
}
