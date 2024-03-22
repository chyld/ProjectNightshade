import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Project Nightshade",
    description: "An app by Chyld",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,200,0,0" />
            </head>
            <body>{children}</body>
        </html>
    );
}
