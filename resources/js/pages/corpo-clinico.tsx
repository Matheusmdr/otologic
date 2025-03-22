import { Button, buttonVariants } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { cn } from '@/lib/utils';
import { Head, Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export default function Page() {
  return (
    <MainLayout>
      <Head title="Corpo Clínico" />
      <main className="space-y-10 bg-blue-secondary py-10 md:space-y-20 md:py-20">
        <section className="flex flex-col gap-10">
          <div className="mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-10">
            <div
              data-aos="fade-up"
              className={cn(
                buttonVariants({ variant: 'default' }),
                'mx-auto w-fit rounded-full border !border-white !bg-transparent px-4 py-1',
              )}
            >
              <h2 className="mx-auto w-fit px-2 py-1 text-center text-xl font-bold text-white">
                Corpo Clínico
              </h2>
            </div>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mx-auto max-w-2xl px-4 text-center text-base font-medium text-white"
          >
            Na Otologic, contamos com uma equipe de especialistas em
            otorrinolaringologia e audiologia, altamente qualificada e dedicada
            ao cuidado integral da sua saúde.
          </p>
          <div className="divide mx-auto grid w-11/12 max-w-7xl grid-cols-1 items-center justify-center gap-10 divide-white sm:grid-cols-2 sm:divide-x-0 md:flex-row lg:grid-cols-3 lg:gap-0 lg:divide-x">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center gap-4"
            >
              <img
                src="/imgs/corpo-clinico/natalie.png"
                alt="Dra. Natalie Ravazzi"
                className="max-w-xs"
              />
              <div className="flex flex-col gap-1 border-b border-white pb-4 text-center sm:border-none sm:pb-0">
                <span className="font-bold text-white">
                  Dra. Natalie Ravazzi
                </span>
                <span className="text-white">
                  Médica Otorrinolaringologista
                </span>
                <span className="text-white">CRM/SP 95.612 | RQE 47.090</span>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col items-center justify-center gap-4"
            >
              <img
                src="/imgs/corpo-clinico/ana-julia.png"
                alt="Dra. Ana Júlia Peretti"
                className="max-w-xs"
              />
              <div className="flex flex-col gap-1 border-b border-white pb-4 text-center sm:border-none sm:pb-0">
                <span className="font-bold text-white">
                  Dra. Ana Júlia Peretti
                </span>
                <span className="text-white">
                  Médica Otorrinolaringologista
                </span>
                <span className="text-white">CRM/SP 151.000 | RQE 59.620</span>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex flex-col items-center justify-center gap-4"
            >
              <img
                src="/imgs/corpo-clinico/simone.png"
                alt="Fga. Simone Ravazzi"
                className="max-w-xs"
              />
              <div className="flex flex-col gap-1 border-b border-white pb-4 text-center sm:border-none sm:pb-0">
                <span className="font-bold text-white">
                  Fga. Simone Ravazzi
                </span>
                <span className="text-white">Fonoaudióloga</span>
                <span className="text-white">CRF 2/6276 | CRFF 3938/07</span>
              </div>
            </div>
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
