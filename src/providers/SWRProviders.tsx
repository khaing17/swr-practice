"use client";
import { SWRConfig } from "swr";
import fetcher from "@/services/fetcher";

interface SWRProvidersProps {
  children?: React.ReactNode;
}
export default function SWRProviders({ children }: SWRProvidersProps) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
}
