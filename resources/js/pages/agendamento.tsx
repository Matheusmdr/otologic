import { Button, buttonVariants } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { cn } from '@/lib/utils';
import { Head, Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export default function Page() {
  return (
    <MainLayout>
      <Head title="Agendamento" />
      <main className="space-y-10 bg-white py-10 md:space-y-20 md:py-20">
        <section className="flex flex-col gap-10">
          <div className="mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-10">
            <div
              className={cn(
                buttonVariants({ variant: 'default' }),
                'mx-auto w-fit rounded-full border !border-blue-primary !bg-transparent px-4 py-1',
              )}
            >
              <h2 className="mx-auto w-fit px-2 py-1 text-center text-xl font-bold text-blue-primary">
                Agendamento
              </h2>
            </div>
          </div>
          <p className="mx-auto max-w-2xl text-center text-base font-medium text-[#757575]">
            Faça seu agendamento de exame ou consulta através do nosso WhatsApp
            ou telefone fixo.
          </p>
          <div className="flex flex-col gap-10">
            <div className="flex w-full flex-col gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=5518996812001&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20agendamento"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 text-lg font-bold text-blue-primary"
              >
                <img src="/imgs/social/whatsapp-blue.svg" alt="Logo Whatsapp" />
                18 99681-2001
              </a>
              <a
                href="tel:+551821012001"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 text-lg font-bold text-blue-primary"
              >
                <img
                  src="/imgs/social/phone-blue.svg"
                  alt="Icone de telefone"
                />
                18 2101-2001
              </a>
            </div>

            <span className="text-center text-base font-bold text-[#757575]">
              Rua Reverendo Coriolano, 1646 <br /> Jardim Aviação, CEP 19015-070{' '}
              <br />
              Presidente Prudente / SP
            </span>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1306.7866152504475!2d-51.39253224647759!3d-22.120228849234632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f510f95f0d1b%3A0xc57e22673cda98d4!2sCl%C3%ADnica%20Otologic%20-%20Otorrinolaringologia%20e%20Audiologia%20Pres.%20Prudente!5e0!3m2!1spt-BR!2sbr!4v1738381479998!5m2!1spt-BR!2sbr"
              height="550"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </section>
        <section className="flex justify-center">
          <Link href="/" className="self-center">
            <Button className="w-fit rounded-3xl border border-blue-primary bg-blue-primary px-2 py-1 text-base font-normal text-white hover:bg-white hover:text-blue-primary">
              <ChevronRight />
              Voltar para a home
            </Button>
          </Link>
        </section>
      </main>
    </MainLayout>
  );
}
