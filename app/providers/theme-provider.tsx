"use client";

import { ThemeProvider } from "next-themes";

export default function NextThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}


