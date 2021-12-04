import React, { Ref, useRef } from 'react'
import { ActionSheet, ActionSheetItem } from '@vkontakte/vkui'
import { PopoutProps } from '../types'
import { back } from '@cteamdev/router'

export const TestActionSheet: React.FC<PopoutProps> = () => {
  const ref: Ref<HTMLElement> = useRef<HTMLElement>(document.getElementById('ShowAlert'))

  return (
    <ActionSheet
      onClose={back}
      iosCloseItem={<ActionSheetItem autoclose mode='cancel'>Отменить</ActionSheetItem>}
      toggleRef={ref}
    >
      <ActionSheetItem autoclose>
        Это первая опция
      </ActionSheetItem>
      <ActionSheetItem autoclose>
        Это вторая опция
      </ActionSheetItem>
    </ActionSheet>
  )
}
