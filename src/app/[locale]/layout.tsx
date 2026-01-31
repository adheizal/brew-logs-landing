import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import type { Metadata } from 'next';
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: `https://brewlog.app/${locale}`,
      languages: {
        en: 'https://brewlog.app/en',
        id: 'https://brewlog.app/id',
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: `https://brewlog.app/${locale}`,
      siteName: 'Brew Logs',
      locale: locale,
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="alternate" hrefLang="en" href="https://brewlog.app/en" />
        <link rel="alternate" hrefLang="id" href="https://brewlog.app/id" />
        <link rel="alternate" hrefLang="x-default" href="https://brewlog.app/en" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
