export const range = (from: number, to: number): readonly number[] => {
  if (to < from) {
    throw new Error("Universal error: Illegal arg")
  }
  const ret = []
  for (let index = from; index < to; index += 1) {
    ret.push(index)
  }
  return ret
}

export const toUniq = <T extends number | string>(array: T[]): T[] => {
  return [...new Set(array)]
}