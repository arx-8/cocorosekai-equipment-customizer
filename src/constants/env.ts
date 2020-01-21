export const APP_NAME = "cec"

/**
 * 先頭要素が最新 ver.
 * redux-localstorage で使う
 * 先頭要素以外（過去のver）の localstorage redux state は、migrate される
 */
export const APP_VERSIONS = ["v1", "redux"]

export const isDevelopment = process.env.NODE_ENV !== "production"

export const GOOGLE_ANALYTICS_TRACKING_CODE = process.env
  .REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE!

// 定義忘れチェック
if (isDevelopment) {
  if (GOOGLE_ANALYTICS_TRACKING_CODE == null) {
    throw new Error("GOOGLE_ANALYTICS_TRACKING_CODE is undefined!")
  }
}
