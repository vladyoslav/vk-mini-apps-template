import { ANDROID, IOS, VKCOM, PlatformType } from '@vkontakte/vkui'

const platforms: Record<string, PlatformType> = {
  iphone: IOS,
  mobile_web: IOS,
  android: ANDROID,
  desktop_web: VKCOM
}

export const getPlatform = (): PlatformType => {
  const rawPlatform: string | null = new URLSearchParams(
    window.location.search
  ).get('vk_platform')

  return platforms[rawPlatform || 'android']
}