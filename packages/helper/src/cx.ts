// biome-ignore lint/suspicious/noExplicitAny: 呼び出し側が文字列・真偽値・undefined を混在させて渡すため
export const cx = (...classNames: any[]) => classNames.filter(Boolean).join(' ')
