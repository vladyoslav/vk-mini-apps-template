import { useSetAtomState } from '@mntm/precoil'
import { popoutAtom } from '../store/atoms'

export const setPopout = useSetAtomState(popoutAtom)
export const closePopout = () => setPopout(undefined)