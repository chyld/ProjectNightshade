import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Project Nightshade",
    description: "An app by Chyld",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
