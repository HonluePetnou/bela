'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    // Replace current locale in pathname
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-400 hover:text-white hover:bg-white/5 border border-white/8 hover:border-white/15 transition-all duration-200"
      title={locale === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      <Globe className="w-3.5 h-3.5" />
      <span className="uppercase tracking-wider">{locale === 'fr' ? 'FR' : 'EN'}</span>
    </button>
  );
}
