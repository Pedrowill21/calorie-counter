import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: IProps) {
  return <div className=" bg-blue-950 w-full min-h-screen h-full">{children}</div>;
}
