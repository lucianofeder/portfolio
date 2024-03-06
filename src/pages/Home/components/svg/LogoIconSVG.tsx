import { SVGProps } from "react"

export const LogoIconSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_39_10)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 4.95C22.5 2.21619 20.2838 0 17.55 0H4.95C2.21619 0 0 2.21619 0 4.95V17.7119C0 20.4457 2.21619 22.6618 4.95 22.6618H17.55C20.2838 22.6618 22.5 24.878 22.5 27.6118V40.05C22.5 42.7837 24.7162 45 27.45 45H40.05C42.7837 45 45 42.7837 45 40.05V27.288C45 24.5542 42.7837 22.3381 40.05 22.3381H27.45C24.7162 22.3381 22.5 20.1219 22.5 17.3881V4.95Z"
        fill="#93DD2C"
        stroke=""
      />
    </g>
    <path
      className="logo-letter"
      d="M11.18 6.9V12.96H14.756V15H10.88C10.2 15 9.708 14.832 9.404 14.496C9.108 14.16 8.96 13.708 8.96 13.14V6.9H11.18Z"
      fill="#F4F4F6"
    />
    <path
      className="logo-letter"
      d="M33.12 38H30.9V31.76C30.9 31.192 31.048 30.74 31.344 30.404C31.648 30.068 32.14 29.9 32.82 29.9H36.9V31.94H33.12V38ZM36.624 35.552H32.64L32.34 33.512H36.624V35.552Z"
      fill="#F4F4F6"
    />
    <defs>
      <clipPath id="clip0_39_10">
        <rect width={45} height={45} fill="white" />
      </clipPath>
    </defs>
  </svg>
)
