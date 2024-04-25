import React from "react"

import { IconProps } from "types/icon"

export const Logo: React.FC<IconProps> = ({
  size = "20",
  color = "#9CA3AF",
  ...attributes
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="18"
      // height="18"
      viewBox="0 0 2515 435"
      fill="none"
      {...attributes}
    >
      <path
        fill={color}
        d="M.16 424.68h118.997l60.886-359.507H61.045L.16 424.68zM532.882 244.417c-24.54-18.792-68.911-31.812-133.114-39.06l-7.747-1.033c-16.975-2.403-28.599-5.246-34.871-8.53-6.279-3.277-9.046-8.365-8.301-15.265a26.044 26.044 0 018.582-13.448c4.607-4.136 10.973-7.326 19.097-9.572a102.1 102.1 0 0127.117-3.36c19.925 0 36.713 3.88 50.364 11.639 13.646 7.762 20.843 17.85 21.591 30.264l112.907 1.034c1.11-26.896-5.347-50.26-19.37-70.092-14.026-19.826-34.043-35.086-60.05-45.78-26.014-10.689-56.365-16.035-91.051-16.04a280.093 280.093 0 00-83.297 12.421c-26.76 8.272-49.27 20.339-67.53 36.202-18.261 15.873-29.606 35.016-34.035 57.427-5.907 33.1 3.593 59.221 28.5 78.363 24.913 19.142 64.857 31.643 119.833 37.501 23.978 2.418 40.581 6.125 49.81 11.122 9.221 5.003 12.544 11.814 9.966 20.435-2.957 9.305-11.076 16.634-24.357 21.986-13.281 5.352-29.699 7.161-49.254 5.428-18.459-1.718-32.664-7.065-42.618-16.041a45.077 45.077 0 01-15.501-33.617H192.768a109.99 109.99 0 0014.665 68.541c12.361 21.21 32.104 38.107 59.229 50.692 27.117 12.581 59.494 18.876 97.132 18.883 36.529 0 69.277-4.916 98.243-14.748 28.965-9.822 52.212-23.445 69.743-40.869 17.515-17.409 27.753-37.494 30.712-60.255 4.797-30.69-5.073-55.432-29.61-74.228zM770.595 65.173L588.5 424.68h126.743l31.549-69.317h111.25l11.624 69.317h120.662L931.662 65.173H770.595zm8.856 214.153l49.262-102.933 17.706 102.933h-66.968z"
      ></path>
      <path
        fill={"#E68A26"}
        d="M1046.23 424.68h120.1l45.39-270.531h-120.1l-45.39 270.531zM1241.05 32.074c-5.53-9.655-13.93-17.414-25.18-23.278C1204.61 2.934 1191.6.003 1176.85 0a105.7 105.7 0 00-42.07 8.796c-13.65 5.869-24.81 13.628-33.48 23.278a61.748 61.748 0 00-15.77 32.066 49.368 49.368 0 005.25 32.073c5.35 10.012 13.74 17.858 25.19 23.536 11.43 5.694 24.53 8.54 39.29 8.538 14.37.006 28.58-2.898 41.79-8.538a91.422 91.422 0 0033.49-23.536c8.86-9.997 14.21-20.688 16.05-32.073a47.745 47.745 0 00-5.54-32.066z"
      ></path>
      <path
        fill={color}
        d="M1555.15 89.485c-23.43-16.2-52.67-24.304-87.72-24.312h-162.17l-60.88 359.507h160.51c35.42 0 67.8-8.535 97.13-25.604a220.33 220.33 0 0072.23-66.983c18.82-27.588 30.82-56.555 35.98-86.9 5.54-33.108 3.6-63.283-5.81-90.527a128.133 128.133 0 00-49.27-65.18zm-58.94 152.089c-2.59 19.31-8.59 36.379-17.99 51.208-9.4 14.825-20.38 26.202-32.93 34.134-12.55 7.937-25.46 11.905-38.74 11.905h-27.53l32.06-189.324h31.99c19.93 0 34.87 7.845 44.83 23.536 9.97 15.691 12.74 38.538 8.31 68.541zM1932.91 264.328L1822.76 65.173h-114.57l-60.88 359.507h114.57l33.76-199.147 109.04 199.147h115.12l60.88-359.507h-114.01l-33.76 199.155zM2505.2 156.475c-10.33-28.097-28.97-50.341-55.9-66.731-26.94-16.376-61.07-24.566-102.39-24.57-41.34 0-78.7 8.537-112.08 25.611-33.41 17.067-60.62 39.653-81.64 67.758a219.946 219.946 0 00-40.96 91.819c-6.64 35.175-4.89 66.643 5.26 94.404 10.14 27.763 28.68 49.662 55.62 65.698 26.93 16.025 61.25 24.043 102.95 24.053 39.11 0 75.27-8.018 108.48-24.053a234.534 234.534 0 0083.03-65.957 213.938 213.938 0 0043.16-94.145c6.65-34.483 4.8-65.779-5.53-93.887zm-111.8 93.887a118.162 118.162 0 01-19.1 43.971 109.933 109.933 0 01-34.87 32.325 88.72 88.72 0 01-45.66 12.163c-16.98 0-30.91-3.882-41.78-11.646a57.237 57.237 0 01-22.15-31.808c-3.87-13.456-3.96-28.457-.27-45.005a115.943 115.943 0 0118.26-44.229 106.205 106.205 0 0134.59-32.583 89.794 89.794 0 0146.22-12.164c16.97 0 30.9 3.969 41.79 11.905a58.544 58.544 0 0122.13 32.066c3.88 13.456 4.16 28.458.84 45.005z"
      ></path>
    </svg>
  )
}