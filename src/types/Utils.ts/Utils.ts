/**
 * オブジェクトの value の string literal 型を返す
 */
export type ValueOf<T> = T[keyof T]

/**
 * Nominal Typing
 * (Intersection types and brands)
 *
 * (e.g.) type FooId = Brand<string, "FooId">
 * @see https://basarat.gitbook.io/typescript/main-1/nominaltyping#nominal-typing
 * @see https://michalzalecki.com/nominal-typing-in-typescript/#approach-4-intersection-types-and-brands
 */
export type Brand<K, T> = K & { __brand: T }

/**
 * 修正すべき any
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FixMeAny = any

/**
 * cast のために使う、修正しなくてよい any
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CastAny = any
