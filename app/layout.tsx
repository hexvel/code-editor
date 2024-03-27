import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "Hex Bin",
  description: "Share your code with your friends in a convenient way",
  openGraph: {
    images: ["/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(roboto.className)}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
            storageKey='hexbin-theme-2'
          >
            <Toaster theme='dark' position='bottom-center' />
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
