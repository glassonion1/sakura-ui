import type { IconProps } from './props'

export const MenuMobile = (props: IconProps) => {
  const { size, className, ...rest } = props
  return (
    <svg
      role="img"
      aria-label={`${rest['aria-label'] ?? 'Menu'}`}
      className={className}
      fill="none"
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 7H5V9H39V7ZM39 15H5V17H39V15ZM5 23H39V25H5V23Z"
        fill="currentColor"
      />
      <path
        d="M35.6474 38C33.6914 38 32.3594 37.0507 32.3594 34.4907V30H33.7514V34.576C33.7514 36.3467 34.5434 36.9227 35.6474 36.9227C36.7634 36.9227 37.5794 36.3467 37.5794 34.576V30H38.9234V34.4907C38.9234 37.0507 37.6034 38 35.6474 38Z"
        fill="currentColor"
      />
      <path
        d="M23.1172 37.8613V30H24.5452L27.4732 34.6187L28.3972 36.2827H28.4572C28.3852 35.472 28.2772 34.5227 28.2772 33.6693V30H29.5972V37.8613H28.1692L25.2412 33.232L24.3172 31.5893H24.2572C24.3292 32.4 24.4372 33.3067 24.4372 34.16V37.8613H23.1172Z"
        fill="currentColor"
      />
      <path
        d="M15.4414 37.8613V30H20.6614V31.0453H16.8334V33.232H20.0734V34.2773H16.8334V36.816H20.7934V37.8613H15.4414Z"
        fill="currentColor"
      />
      <path
        d="M5 37.8613V30H6.596L8.216 33.9787C8.42 34.5013 8.6 35.0347 8.804 35.5573H8.864C9.068 35.0347 9.236 34.5013 9.44 33.9787L11.036 30H12.644V37.8613H11.348V33.9787C11.348 33.2747 11.456 32.2613 11.528 31.5467H11.48L10.772 33.36L9.236 37.104H8.372L6.824 33.36L6.128 31.5467H6.08C6.14 32.2613 6.248 33.2747 6.248 33.9787V37.8613H5Z"
        fill="currentColor"
      />
    </svg>
  )
}
