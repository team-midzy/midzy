import clsx from "clsx";

const DCIcon = ({ size, className }: DCIconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    fill="#3B468F"
    className={clsx(
      "svg-inline--fa",
      size === "sm" && "fa-sm",
      size === "lg" && "fa-lg",
      className
    )}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M512,396.8c0,63.62-51.58,115.2-115.2,115.2H115.2c-63.62,0-115.2-51.58-115.2-115.2V115.2C0,51.58,51.58,0,115.2,0h281.6c63.62,0,115.2,51.58,115.2,115.2v281.6Z"
    />
    <g fill="#FEFEFE" fillRule="evenodd" clipRule="evenodd">
      <path d="M405.46,287.99c.8-6.79-2.2-11.78-7.66-15.37-3.02-1.99-6.25-3.7-9.51-5.28-14.17-6.87-28.45-13.52-42.57-20.49-8.77-4.33-17.29-4.17-25.91.16-5.14,2.58-9.84,5.79-14.28,9.41-14.76,12.04-29.53,24.09-44.3,36.12-1.44,1.17-2.93,2.27-4.42,3.42-1.43-1.39-.83-2.85-.84-4.12-.05-22.87.04-45.73-.12-68.6-.02-3.31.97-5.45,3.54-7.43,4.65-3.6,9.21-7.36,13.53-11.36,15.99-14.79,34.56-17.85,55.08-12.52,6.56,1.7,12.83,4.17,18.95,7.05,34.92,16.44,69.81,32.92,104.78,49.26,3.53,1.65,4.77,2.41.9,5.44-15.41,12.06-30.58,24.42-45.85,36.67-1.91.03-1.8-1.07-1.33-2.37Z" />
      <path d="M304.77,366.88c-2.51.15-5.03.16-7.51.46-9.37,1.12-18.31-.51-26.91-4.14-5.1-2.15-9.99-4.84-15.18-6.75-3.97-1.46-4.81-3.82-4.76-7.81.73-66.55,1.25-133.1,2.02-199.65.05-4.54-1.37-6.63-5.41-8.48-22.52-10.28-44.9-20.89-67.33-31.37-1.5-.7-3.04-1.32-5.08-2.2,9.2,30.9,3.4,61.83,4.35,92.56-2.26-3.27-3.78-6.7-5.63-9.94-3.41-5.96-7.75-10.98-14.2-13.97-18.86-8.73-37.65-17.6-56.48-26.37-5.52-2.57-11.24-4.49-17.36-5.1-9.78-.97-17.27,2.96-21.84,11.7-3.35,6.41-4.94,13.37-5.19,20.5-1.03,28.93-1.74,57.89-.85,86.81.86,28.15,11.53,51.99,37.05,66.24,22.37,12.48,46.18,22.18,69.4,33.01,4.34,2.02,8.15.8,10.98-3.06,1.57-2.15,3-4.4,4.92-7.24,2,5.69,2.51,10.85,3.3,15.93.41,2.64,1.44,4.26,3.98,5.44,21.99,10.21,43.94,20.49,65.81,30.94,2.76,1.32,4.36.49,6.4-1.1,12.58-9.79,25.23-19.49,37.86-29.22,2.68-2.07,5.34-4.16,8-6.24l-.32-.96h0ZM178.71,272.29c0,2.42-1.45,3.76-2.8,5.31-10.54,12.13-18.35,25.59-19.98,41.94-.29,2.93-1.52,2.45-3.32,1.59-3.59-1.71-7.11-3.63-10.82-5.03-9.3-3.49-12.7-10.48-12.64-19.91.1-13.85.84-68.23.85-81.56,0-1.73-.03-3.47.14-5.19.75-7.65,3.68-9.38,10.69-6.17,9.28,4.25,18.46,8.73,27.74,12.95,6.74,3.07,10.12,8.38,10.19,15.54.15,13.5-.11,27.01-.07,40.52h0Z" />
    </g>
  </svg>
);

export default DCIcon;