import { atom } from '@mntm/precoil'
import { AppearanceSchemeType, UserInfo } from '@vkontakte/vk-bridge'
import { Snackbar } from '../types'

export const vkUserAtom = atom<UserInfo>({} as UserInfo, 'vkUser')
export const currentSchemeAtom = atom<AppearanceSchemeType>('client_light', 'currentTheme')
export const snackbarAtom = atom<Snackbar | undefined>(undefined, 'snackbar')
