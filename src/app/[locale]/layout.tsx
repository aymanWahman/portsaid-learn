// src/app/[locale]/layout.tsx
import '@/styles/globals.css';
import Header from '@/components/Header.tsx';

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <Header locale={locale} />
        <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
