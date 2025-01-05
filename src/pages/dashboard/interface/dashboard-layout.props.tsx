import { ReactNode } from "react";

export interface DashboardLayoutProps {
  children: ReactNode;
  userRole: "buyer" | "seller";
}
