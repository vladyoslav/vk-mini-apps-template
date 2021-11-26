import { snackbarAtom } from '../store'
import { SnackbarType } from '../types'

const setSnackbar = snackbarAtom.set

export const setDoneSnackbar = (text: string) => setSnackbar({ type: SnackbarType.DONE, text })

export const setErrorSnackbar = (text: string) => setSnackbar({ type: SnackbarType.ERROR, text })
