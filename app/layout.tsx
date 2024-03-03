// all pages's layout, called root layout
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Optimizing Inter Fonts */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
