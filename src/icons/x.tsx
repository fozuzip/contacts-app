import { IconProps } from "./type";

export const X = ({ size = 24, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="lucide lucide-x"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M18 6L6 18M6 6l12 12"></path>
    </svg>
  );
};
