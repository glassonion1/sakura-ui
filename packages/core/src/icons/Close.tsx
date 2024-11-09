import type { IconProps } from './props'

export const Close = (props: IconProps) => {
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
        d="M6.39961 18.6496L5.34961 17.5996L10.9496 11.9996L5.34961 6.39961L6.39961 5.34961L11.9996 10.9496L17.5996 5.34961L18.6496 6.39961L13.0496 11.9996L18.6496 17.5996L17.5996 18.6496L11.9996 13.0496L6.39961 18.6496Z"
        fill="currentColor"
      />
    </svg>
  )
}
