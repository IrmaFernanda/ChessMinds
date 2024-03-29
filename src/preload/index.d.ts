import { GetOptions } from '@shared/types'

declare global {
  interface Window {
    context: {
      locale: string
      getOptions: GetOptions
    }
  }
}
