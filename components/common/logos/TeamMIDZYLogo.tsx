import clsx from "clsx";

const TeamMIDZYLogo = ({ isDark = false }: LogoProps) => (
  <figure className="w-[5.125rem]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 104 44"
      className={clsx(isDark ? "fill-white" : "fill-black")}
    >
      <g>
        <g>
          <path d="M5.11,3.79H0V0h14.59v3.77h-5.1v5.83h4.77v.09c-.07.03-.15.06-.23.08-1.46.34-2.64,1.12-3.57,2.28-1.58,2-3.18,3.98-4.77,5.97-.07.09-.16.19-.23.27H.92c2.33-2.92,4.62-5.77,6.95-8.69h-2.76V3.8h0Z" />
          <path d="M19.87,3.73v3.47h7.13v3.68h-7.13v3.7h7.83v3.73h-11.83V0h11.64v3.73h-7.64Z" />
          <path d="M34.09,14.43l-1.06,3.89h-4.21L34.44.01h5.25l5.63,18.31h-4.21l-1.04-3.89h-5.98ZM38.73,9.55c-.67-2.44-1.22-4.66-1.67-6.66h-.04c-.46,2.13-1,4.35-1.62,6.66l-.32,1.23h4l-.34-1.23h-.01Z" />
          <path d="M62.79,18.32v-8.95c0-2.28.04-4.53.14-6.76h-.04c-.38,1.76-.9,3.98-1.57,6.66l-2.33,9.06h-4.74l-2.33-9.06c-.68-2.68-1.21-4.9-1.57-6.66h-.04c.09,2.23.14,4.48.14,6.76v8.95h-3.77V0h6.41l2.11,8.13c.57,2.29,1.05,4.54,1.44,6.74h.04c.35-2.11.82-4.36,1.41-6.74L60.17,0h6.39v18.31h-3.77Z" />
        </g>
        <g>
          <path d="M22.47,44v-10.67c0-2.73.06-5.45.19-8.17h-.06c-.63,3-1.25,5.7-1.88,8.08l-2.78,10.76h-7.58l-2.78-10.76c-.63-2.38-1.25-5.06-1.88-8.08h-.06c.13,2.71.19,5.43.19,8.17v10.67H0v-22.28h9.95l2.47,9.58c.71,2.63,1.27,5.37,1.69,8.2h.06c.38-2.54.94-5.27,1.69-8.2l2.47-9.58h9.95v22.28h-5.83.01Z" />
          <path d="M32.61,44v-22.28h6.26v22.28s-6.26,0-6.26,0Z" />
          <path d="M60.44,24.62c2.07,1.93,3.12,4.68,3.12,8.24s-1.04,6.32-3.12,8.24-5.02,2.9-8.84,2.9h-8.42v-22.28h8.42c3.81,0,6.76.97,8.84,2.9ZM49.44,38.75h1.97c1.81,0,3.2-.51,4.16-1.52.96-1.01,1.44-2.47,1.44-4.37s-.48-3.36-1.44-4.37c-.96-1.01-2.34-1.52-4.16-1.52h-1.97v11.77h0Z" />
          <path d="M72.31,38.81v.06h10.11v5.13h-17.62v-5.38l9.61-11.7v-.06h-9.17v-5.13h16.65v5.38l-9.58,11.7h0Z" />
          <path d="M96.37,44h-6.26v-8.14l-7.64-14.14h6.89l1.75,3.91c.88,1.96,1.57,3.79,2.09,5.51h.06c.56-1.77,1.27-3.61,2.13-5.51l1.75-3.91h6.86l-7.64,14.14v8.14h.01Z" />
        </g>
      </g>
    </svg>
  </figure>
);

export default TeamMIDZYLogo;