import React from 'react'
import { ModalRoot } from '@vkontakte/vkui'
import { Modal } from './Modal'
import { useRouter, useParams } from '@cteamdev/router'

export const Modals = () => {
  const { back } = useRouter()
  const { m = null } = useParams()

  return (
    <ModalRoot activeModal={m} onClose={back}>
      <Modal nav='modal' />
    </ModalRoot>
  )
}
