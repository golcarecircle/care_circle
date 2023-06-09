import React from "react";

interface prop {
  className?: string;
}

const MedIcon = () => (
  <svg viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_di_77_1095)">
      <circle
        cx="70.422"
        cy="65.6725"
        r="48.422"
        fill="url(#paint0_linear_77_1095)"
      />
    </g>
    <rect
      x="59.8953"
      y="38.3037"
      width="21.0531"
      height="54.7379"
      rx="0.898452"
      fill="white"
    />
    <rect
      x="97.7903"
      y="55.1453"
      width="21.0531"
      height="54.7379"
      rx="0.898452"
      transform="rotate(90 97.7903 55.1453)"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_di_77_1095"
        x="0.187592"
        y="0.0301657"
        width="140.469"
        height="140.469"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4.59209" />
        <feGaussianBlur stdDeviation="10.9062" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0862745 0 0 0 0 0.470588 0 0 0 0 0.94902 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_77_1095"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_77_1095"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4.59209" />
        <feGaussianBlur stdDeviation="2.29604" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_77_1095"
        />
      </filter>
      <linearGradient
        id="paint0_linear_77_1095"
        x1="14.4612"
        y1="-20.7276"
        x2="234.566"
        y2="2.95323"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3A8EF6" />
        <stop offset="1" stopColor="#6F3AFA" />
      </linearGradient>
    </defs>
  </svg>
);
const HeartIcon = () => (
  <svg
    width="61"
    height="40"
    viewBox="0 0 61 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M51.1254 3.53629C49.9789 2.41518 48.6176 1.52584 47.1193 0.919073C45.621 0.312305 44.015 0 42.3932 0C40.7714 0 39.1654 0.312305 37.6671 0.919073C36.1688 1.52584 34.8075 2.41518 33.661 3.53629L31.2815 5.86189L28.902 3.53629C26.5861 1.27279 23.445 0.00117325 20.1698 0.00117327C16.8946 0.0011733 13.7535 1.27279 11.4376 3.53629C9.12163 5.79979 7.82056 8.86975 7.82056 12.0708C7.82056 15.2719 9.12163 18.3418 11.4376 20.6053L13.817 22.9309L31.2815 40L48.7459 22.9309L51.1254 20.6053C52.2725 19.4848 53.1824 18.1543 53.8033 16.6899C54.4241 15.2255 54.7436 13.6559 54.7436 12.0708C54.7436 10.4857 54.4241 8.91612 53.8033 7.45174C53.1824 5.98736 52.2725 4.65687 51.1254 3.53629V3.53629Z"
      fill="url(#paint0_linear_54_165)"
    />
    <g filter="url(#filter0_b_54_165)">
      <path
        d="M25.4167 29.231C24.971 29.2305 24.5332 29.1148 24.1473 28.8954C23.7614 28.676 23.441 28.3606 23.2181 27.981L18.8846 20.3187L16.1142 24.4061C15.8757 24.7442 15.5561 25.0193 15.1837 25.2068C14.8112 25.3944 14.3975 25.4885 13.9792 25.481H2.54167C1.86757 25.481 1.22109 25.2177 0.744437 24.7488C0.267782 24.28 0 23.6441 0 22.9811C0 22.3181 0.267782 21.6822 0.744437 21.2134C1.22109 20.7445 1.86757 20.4812 2.54167 20.4812H12.6194L16.9529 14.0938C17.195 13.7379 17.526 13.4492 17.9142 13.2552C18.3023 13.0613 18.7346 12.9686 19.1696 12.9862C19.6046 13.0038 20.0277 13.1309 20.3983 13.3555C20.769 13.5801 21.0748 13.8946 21.2865 14.2688L25.4167 21.7311L32.0631 10.4814C32.2902 10.0943 32.6187 9.77415 33.0143 9.55431C33.4099 9.33448 33.8582 9.22297 34.3125 9.2314C34.7561 9.23404 35.1912 9.3508 35.5747 9.57008C35.9581 9.78937 36.2766 10.1035 36.4983 10.4814L42.5856 20.4812L45.1273 18.5062C45.5778 18.1623 46.1328 17.9774 46.7031 17.9812H58.4583C59.1324 17.9812 59.7789 18.2446 60.2556 18.7134C60.7322 19.1823 61 19.8181 61 20.4812C61 21.1442 60.7322 21.78 60.2556 22.2489C59.7789 22.7177 59.1324 22.9811 58.4583 22.9811H47.5927L43.4625 26.1935C43.1779 26.4238 42.8459 26.5904 42.4893 26.6819C42.1327 26.7734 41.7602 26.7875 41.3975 26.7233C41.0349 26.6591 40.6907 26.5181 40.389 26.3101C40.0872 26.102 39.8351 25.8319 39.65 25.5185L34.3125 16.6562L27.6152 27.981C27.3924 28.3606 27.0719 28.676 26.686 28.8954C26.3001 29.1148 25.8624 29.2305 25.4167 29.231Z"
        fill="white"
        fill-opacity="0.2"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_54_165"
        x="-13.8889"
        y="-4.65793"
        width="88.7778"
        height="47.7778"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="6.94444" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_54_165"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_54_165"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_54_165"
        x1="7.82056"
        y1="18.6667"
        x2="53.6187"
        y2="18.9064"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF7070" />
        <stop offset="1" stopColor="#FF7070" stop-opacity="0.65" />
      </linearGradient>
    </defs>
  </svg>
);
const List = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.5 7.66667H16.6111C17.3139 7.66667 17.8889 7.09167 17.8889 6.38889C17.8889 5.68611 17.3139 5.11111 16.6111 5.11111H11.5C10.7972 5.11111 10.2222 5.68611 10.2222 6.38889C10.2222 7.09167 10.7972 7.66667 11.5 7.66667ZM11.5 12.7778H16.6111C17.3139 12.7778 17.8889 12.2028 17.8889 11.5C17.8889 10.7972 17.3139 10.2222 16.6111 10.2222H11.5C10.7972 10.2222 10.2222 10.7972 10.2222 11.5C10.2222 12.2028 10.7972 12.7778 11.5 12.7778ZM11.5 17.8889H16.6111C17.3139 17.8889 17.8889 17.3139 17.8889 16.6111C17.8889 15.9083 17.3139 15.3333 16.6111 15.3333H11.5C10.7972 15.3333 10.2222 15.9083 10.2222 16.6111C10.2222 17.3139 10.7972 17.8889 11.5 17.8889ZM5.11111 5.11111H7.66667V7.66667H5.11111V5.11111ZM5.11111 10.2222H7.66667V12.7778H5.11111V10.2222ZM5.11111 15.3333H7.66667V17.8889H5.11111V15.3333ZM21.7222 0H1.27778C0.575 0 0 0.575 0 1.27778V21.7222C0 22.425 0.575 23 1.27778 23H21.7222C22.425 23 23 22.425 23 21.7222V1.27778C23 0.575 22.425 0 21.7222 0ZM20.4444 20.4444H2.55556V2.55556H20.4444V20.4444Z" />
  </svg>
);

export { HeartIcon, List, MedIcon };
