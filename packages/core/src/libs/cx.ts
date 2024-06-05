// biome-ignore lint/suspicious/noExplicitAny:
export const cx = (...classNames: any[]) => classNames.filter(Boolean).join(' ')
