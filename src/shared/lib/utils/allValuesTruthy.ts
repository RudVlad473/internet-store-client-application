export function allValuesTruthy(obj: Record<string, any>): boolean {
  return Object.values(obj).every((value) => value)
}
