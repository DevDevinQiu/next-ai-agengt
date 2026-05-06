import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
  web,
}: Readonly<{
  children: React.ReactNode;
  web: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full`}>
      <body className="min-h-full flex flex-col border-2 p-8">
        <div className="mb-8">this is root layout</div>
        {children}
        {web}
      </body>
    </html>
  );
}
