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
        // refreshInterval: 3000,
        // revalidateIfStale: false,
        // revalidateOnFocus: false,
      }}
    >
      {children}
    </SWRConfig>
  );
}
