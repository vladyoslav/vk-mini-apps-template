
export const getHashParam = (param: string): string | null => {
  return new URLSearchParams(window.location.search).get(param)
}