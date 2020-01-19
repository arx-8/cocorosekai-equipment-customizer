/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * DefinitelyTyped にある定義が 1.x (beta) 用なため、0.x用
 */
declare module "redux-localstorage" {
  type Config = {
    deserialize: any
    /**
     * The localStorage key used to store state. The default value is redux.
     */
    key: string
    merge: any
    serialize: any
    slicer: any
  }

  /**
   * @param paths 保存する state 名
   * @param config
   */
  export default function persistState(
    paths: string[],
    config?: Partial<Config>
  ): any
}
