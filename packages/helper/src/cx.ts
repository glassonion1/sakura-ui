// biome-ignore lint/suspicious/noExplicitAny: callers mix strings, booleans and undefined
export const cx = (...classNames: any[]) => classNames.filter(Boolean).join(' ')
