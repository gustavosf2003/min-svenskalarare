"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { NavigationProvider } from "@/context/NavigationContext";
import { ToastProvider } from "@/context/toast";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      placeholderData: (prev) => prev,
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationProvider>
        <ToastProvider>{children}</ToastProvider>
      </NavigationProvider>
    </QueryClientProvider>
  );
}
