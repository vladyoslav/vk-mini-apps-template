import { ANDROID, IOS, VKCOM, PlatformType } from '@vkontakte/vkui'
import { getHashParam } from './getHashParam'

const platforms: Record<string, PlatformType> = {
  iphone: IOS,
  mobile_web: IOS,
  android: ANDROID,
  desktop_web: VKCOM
}

export const getPlatform = (): PlatformType => {
  const rawPlatform: string | null = getHashParam('vk_platform')

  return platforms[rawPlatform || 'desktop_web']
}
