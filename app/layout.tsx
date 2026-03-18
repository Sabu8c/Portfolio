import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
    title: "Sacha Bumann — Engineering the Future",
    description:
        "Portfolio of Sacha Bumann: Microengineering student at EPFL, founder of Yotta Technology SNC, aerospace enthusiast, and hardware/software technologist.",
    keywords: ["Sacha Bumann", "EPFL", "Microengineering", "Portfolio", "Yotta Technology", "Aerospace"],
    openGraph: {
        title: "Sacha Bumann — Engineering the Future",
        description:
            "Microengineering at EPFL | Founder of Yotta Technology | Aerospace Enthusiast",
        type: "website",
    },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${GeistMono.variable}`}
            style={{ scrollBehavior: "auto" }}
            suppressHydrationWarning
        >
            <body className="font-sans antialiased text-foreground bg-void transition-colors duration-300">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
