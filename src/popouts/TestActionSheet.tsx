import React from 'react'
import { ActionSheet, ActionSheetItem } from '@vkontakte/vkui'
import { ToggleRef } from '@vkontakte/vkui/dist/components/ActionSheet/types'
import { closePopout } from '../hooks'

type TestActionSheetProps = {
  toggleRef: ToggleRef
}

export const TestActionSheet: React.FC<TestActionSheetProps> = ({ toggleRef }: TestActionSheetProps) => {

  return (
    <ActionSheet
      onClose={closePopout}
      iosCloseItem={<ActionSheetItem autoclose mode='cancel'>Отменить</ActionSheetItem>}
      toggleRef={toggleRef}
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
