import React from 'react'
import { cx } from '@sakura-ui/helper'
import {
  type NotificationBannerHeadingLevel,
  type NotificationBannerStyle,
  type NotificationBannerType,
  base,
  bodyStyle,
  getNotificationBannerBorderStyle,
  getNotificationBannerChipStyle,
  getNotificationBannerIconStyle,
  getNotificationBannerStyle,
  headingStyle,
  headingTextStyle,
  iconStyle
} from './notificationBannerStyle'

export type {
  NotificationBannerHeadingLevel,
  NotificationBannerStyle,
  NotificationBannerType
} from './notificationBannerStyle'

type BannerIconProps = React.ComponentProps<'svg'> & { label: string }

// The labels the icons fall back to. They are in English like the rest of the
// library, and iconLabel replaces them for a site written in another language.
const defaultIconLabels: { [key in NotificationBannerType]: string } = {
  success: 'Success',
  error: 'Error',
  warning: 'Warning',
  info1: 'Information',
  info2: 'Information'
}

// These carry meaning rather than decoration, so unlike the icons in src/icons
// they are labelled instead of hidden: the type is otherwise only conveyed by
// colour. The shapes are filled with currentcolor to follow the type's text
// colour, and the cut-outs use the Canvas system colour so they keep showing
// the background even when the user forces their own colours.
const InfoIcon = ({ label, ...props }: BannerIconProps) => (
  <svg
    aria-label={label}
    fill="none"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill="currentcolor" />
    <circle cx="12" cy="8" r="1" fill="Canvas" />
    <path d="M11 11h2v6h-2z" fill="Canvas" />
  </svg>
)

const WarningIcon = ({ label, ...props }: BannerIconProps) => (
  <svg
    aria-label={label}
    fill="none"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <path d="M1 21 12 2l11 19H1Z" fill="currentcolor" />
    <path d="M13 15h-2v-5h2v5Z" fill="Canvas" />
    <circle cx="12" cy="17" r="1" fill="Canvas" />
  </svg>
)

const ErrorIcon = ({ label, ...props }: BannerIconProps) => (
  <svg
    aria-label={label}
    fill="none"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <path
      d="M8.25 21 3 15.75v-7.5L8.25 3h7.5L21 8.25v7.5L15.75 21h-7.5Z"
      fill="currentcolor"
    />
    <path
      d="m12 13.4-2.85 2.85-1.4-1.4L10.6 12 7.75 9.15l1.4-1.4L12 10.6l2.85-2.85 1.4 1.4L13.4 12l2.85 2.85-1.4 1.4L12 13.4Z"
      fill="Canvas"
    />
  </svg>
)

const SuccessIcon = ({ label, ...props }: BannerIconProps) => (
  <svg
    aria-label={label}
    fill="none"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill="currentcolor" />
    <path
      d="m17.6 9.6-7 7-4.3-4.3L7.7 11l2.9 2.9 5.7-5.6 1.3 1.4Z"
      fill="Canvas"
    />
  </svg>
)

const BannerIcon = (
  props: BannerIconProps & { type: NotificationBannerType }
) => {
  const { type, ...rest } = props

  switch (type) {
    case 'success':
      return <SuccessIcon {...rest} />
    case 'error':
      return <ErrorIcon {...rest} />
    case 'warning':
      return <WarningIcon {...rest} />
    default:
      return <InfoIcon {...rest} />
  }
}

export namespace NotificationBanner {
  export interface Props extends React.ComponentPropsWithoutRef<'div'> {
    type: NotificationBannerType
    title: string
    bannerStyle?: NotificationBannerStyle
    headingLevel?: NotificationBannerHeadingLevel
    // What a screen reader reads for the icon. It defaults to English, so a
    // site written in another language passes its own wording here.
    iconLabel?: string
  }
}

export const NotificationBanner = (props: NotificationBanner.Props) => {
  const {
    type,
    title,
    bannerStyle = 'standard',
    headingLevel,
    iconLabel,
    className,
    children,
    ...restProps
  } = props

  // A div keeps the title out of the document outline. Pass headingLevel when
  // the banner is a section of the page rather than a passing message, and pick
  // the level from where it sits, the same way CardHeader does.
  const Heading = headingLevel ?? 'div'

  // No role is set here. An alert or a status has to be in the document before
  // the message arrives to be announced, which is the caller's decision, not
  // this component's. See the Accessible names section of the README.
  return (
    <div
      className={cx(
        base,
        getNotificationBannerStyle(bannerStyle),
        getNotificationBannerBorderStyle(type),
        bannerStyle === 'color-chip' && getNotificationBannerChipStyle(type),
        className
      )}
      {...restProps}
    >
      <Heading className={headingStyle}>
        <BannerIcon
          type={type}
          label={iconLabel ?? defaultIconLabels[type]}
          className={cx(iconStyle, getNotificationBannerIconStyle(type))}
        />
        <span className={headingTextStyle}>{title}</span>
      </Heading>
      {children && <div className={bodyStyle}>{children}</div>}
    </div>
  )
}

NotificationBanner.displayName = 'NotificationBanner'
