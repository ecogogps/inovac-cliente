import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist_Mono, Open_Sans } from "next/font/google";
import { ThemeProvider } from "~/ui/components/theme-provider";

import "~/css/globals.css";
import { Footer } from "~/ui/components/footer";
import { Header } from "~/ui/components/header";
import { FloatingMenu } from "~/ui/components/floating-menu";
import { ResourceHints } from "~/ui/components/resource-hints";
import Script from "next/script";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  fallback: ["monospace"]
});

export const metadata: Metadata = {
  title: "Inovac Construcciones",
  description: "Website Inovac Construcciones, web development by Bercostudio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PC64VSPD');
            `,
          }}
        />
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YXXHD5ECDM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YXXHD5ECDM');
            `,
          }}
        />
        
        <ResourceHints />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://ucarecdn.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body
        className={`${openSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height='0'
              width='0'
              style={{ display: "none", visibility: "hidden" }}
              sandbox="allow-scripts"
            ></iframe>
          </noscript>
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <FloatingMenu />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
