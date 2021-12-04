import React from 'react'
import { Button, ModalCard, ModalCardProps } from '@vkontakte/vkui'
import { Icon56GhostOutline } from '@vkontakte/icons'
import { back } from '@cteamdev/router'

export const Modal: React.FC<ModalCardProps> = ({ nav }: ModalCardProps) => {
  return (
    <ModalCard
      nav={nav}
      onClose={back}
      icon={<Icon56GhostOutline />}
      header='Это модальная карточка'
      subheader='Это текст модальной карточки'
      actions={
        <Button size='l' mode='primary' onClick={back}>
          Понятно
        </Button>
      }
    />
  )
}
