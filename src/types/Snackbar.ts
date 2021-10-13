
export type Snackbar = {
  type: SnackbarType
  text: string
}

export enum SnackbarType {
  DONE,
  ERROR
}