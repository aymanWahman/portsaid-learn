// src/components/Header.tsx
import Link from 'next/link';

type HeaderProps = {
  locale: string;
};

export default function Header({ locale }: HeaderProps) {
  const isArabic = locale === 'ar';

  const navItems = [
    { href: '/', label: isArabic ? 'الرئيسية' : 'Home' },
    { href: '/about', label: isArabic ? 'عن الموقع' : 'About' },
    { href: '/contact', label: isArabic ? 'تواصل ' : 'Contact' },
  ];

  return (
    <header className="w-full border-b border-gray-300 dark:border-gray-700 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          {isArabic ? 'بورسعيد تتعلم' : 'PortSaid Learn'}
        </h1>

        <nav className="space-x-4 rtl:space-x-reverse">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="text-sm hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
