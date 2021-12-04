import { popoutAtom } from '../store/atoms'

export const setPopout = popoutAtom.set
export const closePopout = () => setPopout(undefined)