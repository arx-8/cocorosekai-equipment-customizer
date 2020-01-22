import { APP_VERSIONS } from "src/constants/env"

/**
 * redux-localstorage で保存されたデータを移行する
 * （今は削除のみ）
 */
export const migrateReduxState = (): void => {
  APP_VERSIONS.slice(1).forEach((v) => {
    localStorage.removeItem(v)
  })
}
