import { useSetAtomState } from '@mntm/precoil'
import { snackbarAtom } from '../store/atoms'
import { SnackbarType } from '../types'

const setSnackbar = useSetAtomState(snackbarAtom)

export const setDoneSnackbar = (text: string) => setSnackbar({ type: SnackbarType.DONE, text })

export const setErrorSnackbar = (text: string) => setSnackbar({ type: SnackbarType.ERROR, text })