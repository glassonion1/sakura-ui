import type { IconProps } from './props'

export const Menu = (props: IconProps) => {
  const { size, className, ...rest } = props
  return (
    <svg
      className={className}
      fill="none"
      height={size}
      role="img"
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      {...rest}
    >
      <path
        clipRule="evenodd"
        d="M21 5.5H3V7H21V5.5ZM21 11.2998H3V12.7998H21V11.2998ZM3 17H21V18.5H3V17Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}
