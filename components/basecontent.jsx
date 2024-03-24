"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Basecontent(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <div>{props.children}</div>
    </QueryClientProvider>
  );
}
