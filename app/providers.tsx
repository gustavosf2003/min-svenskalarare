"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ToastProvider } from "@/context/toast";

export const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>{children}</ToastProvider>
    </QueryClientProvider>
  );
}
