import React from 'react'
import { PopoutRoot } from '@cteamdev/router'
import { TestAlert } from './TestAlert'
import { TestActionSheet } from './TestActionSheet'

export const Popouts = () => {
  return (
    <PopoutRoot>
      <TestAlert nav='alert' />
      <TestActionSheet nav='action-sheet' />
    </PopoutRoot>
  )
}
