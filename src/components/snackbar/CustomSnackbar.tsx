import React from 'react'
import { useAtomState } from '@mntm/precoil'
import { snackbarAtom } from '../../store'
import { SnackbarType } from '../../types'
import { Icon20CancelCircleFillRed, Icon20CheckCircleFillGreen } from '@vkontakte/icons'
import { Snackbar } from '@vkontakte/vkui'

type CustomSnackbarProps = {
  isDesktop: boolean
}

export const CustomSnackbar: React.FC<CustomSnackbarProps> = ({ isDesktop }: CustomSnackbarProps) => {
  const [snackbar, setSnackbar] = useAtomState(snackbarAtom)

  return snackbar
    ? (
      <Snackbar
        onClose={() => setSnackbar(undefined)}
        before={snackbar?.type === SnackbarType.DONE
          ? <Icon20CheckCircleFillGreen width={24} height={24} />
          : <Icon20CancelCircleFillRed width={24} height={24} />
        }
        style={!isDesktop
          ? { marginBottom: 'calc(var(--tabbar_height) + var(--safe-area-inset-bottom))' }
          : {}
        }
      >
        {snackbar?.text}
      </Snackbar>
    )
    : <></>
}
