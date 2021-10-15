import React from 'react'
import { Alert } from '@vkontakte/vkui'
import { closePopout } from '../hooks'

export const TestAlert: React.FC = () => {

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
      onClose={closePopout}
      header='Тестовый алерт'
      text='Это тестовый алерт!'
      actionsLayout='vertical'
    />
  )
}
