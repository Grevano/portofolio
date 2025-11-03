import type { Metadata } from 'next';
import './globals.css'; 

export const metadata: Metadata = {
  title: 'Grevano - Portofolio',
  description: "Grevano's personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className="bg-dark-blue-bg text-text-light">
        {children}
      </body>
    </html>
  );
}
