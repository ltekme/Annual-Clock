import type { Metadata } from "next";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
    title: "Clock",
    description: "Annual clock for the year.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Analytics />
            <body className={`select-none`}>{children}</body>
        </html>
    );
}
