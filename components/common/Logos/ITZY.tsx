import { twJoin } from "tailwind-merge";

const ITZY = ({ isDark = false, size = 24, className }: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 195.60141 168.72858"
    width={size}
    height={size}
    className={twJoin(isDark ? "fill-white" : "fill-black", className)}
  >
    <path
      d="m187.754-29.195-24.84 1.7 3.217 39.67 21.623-19.492z"
      className="fill-itzy-500"
      transform="translate(-175.955 22.203)"
    />
    <path
      d="m187.754 10.682-20.27 18.194 5.88 72.52h14.39z"
      transform="translate(-175.955 22.203)"
    />
    <path
      d="M299.51 98.994v43.438h139.13L293.956 417.697v43.479h261.73l10-43.479H341.782l146.123-275.265V98.994ZM125.09-12.143a3.654 3.654 0 0 0-3.662 3.663v371.248c0 1.233 2.466 20.631 6.668 30.804 4.524 10.953 12.499 24.762 24.285 36.012s27.382 19.94 41.43 25.297c14.047 5.357 26.546 7.382 37.796 8.572 10.204 1.08 19.475 1.464 28.75 1.615v-43.713c-10.464.338-21.925.31-32.796-1.355-12.44-1.905-24.107-5.953-32.916-12.38-8.81-6.43-14.764-15.237-18.157-22.499-3.393-7.262-4.226-12.976-4.642-15.834-.393-2.692-.418-5.87-.418-6.52V143.573h85v-41.43h-85V-8.48a3.653 3.653 0 0 0-3.66-3.663H125.09z"
      transform="scale(.26458)"
    />
    <path
      d="m512.572 100 94.57 307.143-71.427 280L577.143 680l161.43-580H694.25l-61.678 230.572L556.01 100Z"
      transform="scale(.26458)"
    />
  </svg>
);

export default ITZY;