import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

import { persister, queryClient } from "./query-client";

type Props = {
  children: React.ReactNode;
};

export function QueryProvider({ children }: Props) {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister,
      }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}
