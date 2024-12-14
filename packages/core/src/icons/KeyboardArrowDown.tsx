import type { IconProps } from './props'

export const KeyboadArrowDown = (props: IconProps) => {
  const { size, className, ...rest } = props
  return (
    <svg
      aria-hidden={true}
      className={className}
      fill="none"
      height={size}
      role="img"
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      {...rest}
    >
      <g>
        <path
          d="M8 11.4L2 5.33332L2.66667 4.66666L8 9.99999L13.3333 4.66666L14 5.33332L8 11.4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}
