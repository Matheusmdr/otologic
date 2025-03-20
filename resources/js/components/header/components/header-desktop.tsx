import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { Fragment } from 'react';
import { WhatsappButton } from './whatsapp-button';

interface HeaderDesktopProps {
  menuItems: { title: string; href: string; isExternal: boolean }[];
}

function HeaderDesktop({ menuItems }: HeaderDesktopProps) {
  return (
    <header
      id="top"
      className="sticky top-0 z-10 hidden bg-blue-primary shadow lg:block"
    >
      <div className="mx-auto flex w-11/12 max-w-5xl items-center justify-between py-4">
        <Link href="/">
          <img
            src="/imgs/otologic-white.svg"
            alt="Logo Otologic"
            className="w-80"
          />
        </Link>
        <WhatsappButton className="px-6" />
        <a href="tel:+5518996812001" target="_blank" rel="noreferrer noopener">
          <Button className="rounded-3xl border-2 border-white bg-blue-primary text-xl text-white hover:bg-white hover:text-blue-primary">
            18 99681-2001
          </Button>
        </a>
      </div>
      <nav className="bg-blue-primary py-4">
        <div className="mx-auto flex w-11/12 max-w-7xl justify-between text-white">
          {menuItems.map((item) => (
            <Fragment key={item.title}>
              {item.isExternal ? (
                <a
                  href={item.href}
                  className="text-xl font-bold hover:text-white"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="text-xl font-bold hover:text-white"
                >
                  {item.title}
                </Link>
              )}
            </Fragment>
          ))}
        </div>
      </nav>
    </header>
  );
}

export { HeaderDesktop };
