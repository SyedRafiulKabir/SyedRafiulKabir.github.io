import type { ReactNode } from 'react'

type Props = { size?: number; className?: string; title?: string }

function Svg({
  size = 18,
  className,
  title,
  children,
  viewBox = '0 0 24 24',
}: Props & { children: ReactNode; viewBox?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

export function IconMail(props: Props) {
  return (
    <Svg {...props}>
      <path
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5.2 7.3 12 12.1l6.8-4.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function IconLinkedIn(props: Props) {
  return (
    <Svg {...props}>
      <path
        d="M5.6 9.4h2.8v9H5.6v-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7 5.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 9.4h2.7v1.3c.6-1 1.6-1.6 3-1.6 2.2 0 3.3 1.4 3.3 3.7v5.6h-2.8v-5.1c0-1.4-.5-2.1-1.7-2.1-1.2 0-1.9.8-1.9 2.3v5h-2.7v-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function IconGitHub(props: Props) {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        d="M12 2.75a9.25 9.25 0 0 0-2.93 18.03c.46.08.63-.2.63-.45v-1.57c-2.57.56-3.11-1.1-3.11-1.1-.42-1.06-1.03-1.35-1.03-1.35-.84-.57.06-.56.06-.56.93.07 1.41.95 1.41.95.82 1.41 2.16 1 2.7.76.08-.6.32-1 .57-1.23-2.05-.23-4.2-1.02-4.2-4.56 0-1 .36-1.82.95-2.46-.1-.23-.42-1.17.09-2.44 0 0 .78-.25 2.56.94a8.77 8.77 0 0 1 4.66 0c1.78-1.19 2.56-.94 2.56-.94.51 1.27.19 2.21.1 2.44.59.64.94 1.46.94 2.46 0 3.55-2.16 4.33-4.22 4.56.33.28.62.84.62 1.7v2.52c0 .25.17.53.64.44A9.25 9.25 0 0 0 12 2.75Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function IconPin(props: Props) {
  return (
    <Svg {...props}>
      <path
        d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </Svg>
  )
}

export function IconDownload(props: Props) {
  return (
    <Svg {...props}>
      <path
        d="M12 4.5v9.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="m8.6 10.7 3.4 3.5 3.4-3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18.5h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  )
}

