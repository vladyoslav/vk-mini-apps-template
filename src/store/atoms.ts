import { atom } from '@mntm/precoil'
import { UserInfo } from '@vkontakte/vk-bridge'
import { Snackbar } from '../types'
import { ReactNode } from 'react'

export const vkUserAtom = atom<UserInfo>({} as UserInfo, 'vkUser')

export const snackbarAtom = atom<Snackbar | undefined>(undefined, 'snackbar')

export const popoutAtom = atom<ReactNode | undefined>(undefined, 'popout')