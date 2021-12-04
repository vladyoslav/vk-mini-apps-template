import { useSetAtomState } from '@mntm/precoil'
import { popoutAtom } from '../store/atoms'

const setPopout = useSetAtomState(popoutAtom)
export const closePopout = () => setPopout(undefined)