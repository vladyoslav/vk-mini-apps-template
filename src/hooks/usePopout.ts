import { popoutAtom } from '../store'

export const setPopout = popoutAtom.set
export const closePopout = () => setPopout(undefined)
