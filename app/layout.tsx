import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeModeScript } from "flowbite-react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas , fab)
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CRUD APP",
  description: "A CRUD application built with Next.js",
  author: "Your Name",
  keywords: "CRUD, Next.js, TypeScript, React",
  // Add more metadata as needed
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        {/* Add more meta tags as needed */}
        <ThemeModeScript />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
