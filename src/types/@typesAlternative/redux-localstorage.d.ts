/**
 * DefinitelyTyped にある定義が 1.x (beta) 用なため、0.x用
 */
declare module "redux-localstorage" {
  // eslint-disable-next-line import/no-default-export
  export default function persistState(
    paths: string[],
    config?: Record<string, FixMeAny>
  ): FixMeAny
}
