import React from 'react'
import { Modal } from './Modal'
import { ModalRoot } from '@cteamdev/router'

export const Modals = () => {
  return (
    <ModalRoot>
      <Modal nav='modal' />
    </ModalRoot>
  )
}
