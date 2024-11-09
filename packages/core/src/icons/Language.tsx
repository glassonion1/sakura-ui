import type { IconProps } from './props'

export const Language = (props: IconProps) => {
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
      <g>
        <path
          d="M10.0006 17.9166C8.91516 17.9166 7.89086 17.7086 6.92773 17.2924C5.9646 16.8763 5.12458 16.3098 4.40769 15.5929C3.69082 14.876 3.12432 14.036 2.70819 13.0729C2.29205 12.1098 2.08398 11.0855 2.08398 9.99999C2.08398 8.90598 2.29205 7.87954 2.70819 6.92068C3.12432 5.96182 3.69082 5.12394 4.40769 4.40705C5.12458 3.69018 5.9646 3.12368 6.92773 2.70755C7.89086 2.29141 8.91516 2.08334 10.0006 2.08334C11.0946 2.08334 12.1211 2.29141 13.0799 2.70755C14.0388 3.12368 14.8767 3.69018 15.5936 4.40705C16.3104 5.12394 16.8769 5.96182 17.2931 6.92068C17.7092 7.87954 17.9173 8.90598 17.9173 9.99999C17.9173 11.0855 17.7092 12.1098 17.2931 13.0729C16.8769 14.036 16.3104 14.876 15.5936 15.5929C14.8767 16.3098 14.0388 16.8763 13.0799 17.2924C12.1211 17.7086 11.0946 17.9166 10.0006 17.9166ZM10.0006 16.649C10.4259 16.0849 10.7838 15.516 11.0744 14.9423C11.365 14.3686 11.6016 13.7414 11.7843 13.0609H8.21696C8.41034 13.7628 8.64966 14.4006 8.93492 14.9743C9.22017 15.5481 9.57541 16.1063 10.0006 16.649ZM8.38688 16.4199C8.06744 15.9615 7.78057 15.4404 7.5263 14.8566C7.27202 14.2727 7.07437 13.6741 6.93334 13.0609H4.10638C4.54656 13.9263 5.13685 14.6533 5.87723 15.242C6.61764 15.8307 7.45419 16.2233 8.38688 16.4199ZM11.6144 16.4199C12.5471 16.2233 13.3836 15.8307 14.124 15.242C14.8644 14.6533 15.4547 13.9263 15.8949 13.0609H13.0679C12.9002 13.6795 12.6892 14.2807 12.4349 14.8646C12.1806 15.4484 11.9071 15.9669 11.6144 16.4199ZM3.58236 11.8109H6.68013C6.62778 11.5011 6.58986 11.1974 6.56636 10.8998C6.54286 10.6023 6.53111 10.3023 6.53111 9.99999C6.53111 9.69764 6.54286 9.39769 6.56636 9.10014C6.58986 8.80259 6.62778 8.49891 6.68013 8.18907H3.58236C3.50223 8.4722 3.4408 8.76654 3.39807 9.07209C3.35533 9.37765 3.33396 9.68695 3.33396 9.99999C3.33396 10.313 3.35533 10.6223 3.39807 10.9279C3.4408 11.2334 3.50223 11.5278 3.58236 11.8109ZM7.93011 11.8109H12.0712C12.1235 11.5011 12.1614 11.2001 12.1849 10.9078C12.2084 10.6157 12.2202 10.313 12.2202 9.99999C12.2202 9.68695 12.2084 9.38433 12.1849 9.09214C12.1614 8.79993 12.1235 8.49891 12.0712 8.18907H7.93011C7.87776 8.49891 7.83983 8.79993 7.81632 9.09214C7.79282 9.38433 7.78107 9.68695 7.78107 9.99999C7.78107 10.313 7.79282 10.6157 7.81632 10.9078C7.83983 11.2001 7.87776 11.5011 7.93011 11.8109ZM13.3211 11.8109H16.4189C16.499 11.5278 16.5605 11.2334 16.6032 10.9279C16.6459 10.6223 16.6673 10.313 16.6673 9.99999C16.6673 9.68695 16.6459 9.37765 16.6032 9.07209C16.5605 8.76654 16.499 8.4722 16.4189 8.18907H13.3211C13.3735 8.49891 13.4114 8.80259 13.4349 9.10014C13.4584 9.39769 13.4702 9.69764 13.4702 9.99999C13.4702 10.3023 13.4584 10.6023 13.4349 10.8998C13.4114 11.1974 13.3735 11.5011 13.3211 11.8109ZM13.0679 6.93912H15.8949C15.4494 6.06303 14.8631 5.33599 14.136 4.75799C13.409 4.18 12.5685 3.78471 11.6144 3.57209C11.9338 4.05714 12.218 4.58759 12.4669 5.16345C12.7159 5.73931 12.9162 6.3312 13.0679 6.93912ZM8.21696 6.93912H11.7843C11.5909 6.24253 11.3476 5.6007 11.0543 5.01361C10.7611 4.42655 10.4098 3.87232 10.0006 3.35095C9.59144 3.87232 9.24021 4.42655 8.94694 5.01361C8.65367 5.6007 8.41034 6.24253 8.21696 6.93912ZM4.10638 6.93912H6.93334C7.08505 6.3312 7.28537 5.73931 7.53432 5.16345C7.78325 4.58759 8.06744 4.05714 8.38688 3.57209C7.42748 3.78471 6.58559 4.18134 5.86121 4.76201C5.13685 5.34268 4.55191 6.06838 4.10638 6.93912Z"
          fill="currentColor"
          fillOpacity="0.9"
        />
      </g>
    </svg>
  )
}
