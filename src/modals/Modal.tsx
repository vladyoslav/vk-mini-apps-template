import React from 'react'
import { Button, ModalCard } from '@vkontakte/vkui'
import { transition } from '@unexp/router'
import { Icon56GhostOutline } from '@vkontakte/icons'

type ModalProps = {
  nav: string
}

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const close = () => transition(-1)

  return (
    <ModalCard
      nav={props.nav}
      onClose={close}
      icon={<Icon56GhostOutline />}
      header='Это модальная карточка'
      subheader='Это текст модальной карточки'
      actions={
        <Button size='l' mode='primary' onClick={close}>
          Понятно
        </Button>
      }
    />
  )
}