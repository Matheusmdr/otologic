import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { buttonVariants } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PropsWithChildren, useEffect } from 'react';

function MainLayout({ children }: PropsWithChildren) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      {children}
      <Toaster />
      <a
        href="https://wa.me/5518996812001"
        target="_blank"
        rel="noreferrer noopener"
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'icon' }),
          'fixed bottom-2 right-2 h-12 w-12 hover:bg-transparent md:h-20 md:w-20',
        )}
      >
        <img src="/imgs/whatsapp-button.png" alt="whatsapp-button" />
      </a>
      <Footer />
    </>
  );
}

export default MainLayout;
