import React from 'react'
import { Button, ModalCard, ModalCardProps } from '@vkontakte/vkui'
import { transition } from '@unexp/router'
import { Icon56GhostOutline } from '@vkontakte/icons'

export const Modal: React.FC<ModalCardProps> = ({ nav }: ModalCardProps) => {
  const close = () => transition(-1)

  return (
    <ModalCard
      nav={nav}
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