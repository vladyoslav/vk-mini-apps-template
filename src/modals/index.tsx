import React from 'react'
import { transition, useParams } from '@unexp/router'
import { ModalRoot } from '@vkontakte/vkui'
import { Modal } from './Modal'

export const Modals = () => {
  const { m = null } = useParams()
  const close = () => transition(-1)

  return (
    <ModalRoot activeModal={m} onClose={close}>
      <Modal nav='modal' />
    </ModalRoot>
  )
}