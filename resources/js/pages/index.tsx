import { Carousel } from '@/components/carousel';
import { HeroBanner } from '@/components/hero-banner';
import { News } from '@/components/news';
import { Button, buttonVariants } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { cn } from '@/lib/utils';
import { Banners } from '@/types/banners';
import { News as NewsType } from '@/types/news';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

interface Props {
  banners: Banners[];
  news: NewsType[];
}

export default function Page({ banners, news }: Props) {
  return (
    <MainLayout>
      <HeroBanner banners={banners} />
      <main className="bg-main-background py-10 md:py-20">
        <section className="pb-10 md:pb-20 md:pt-0">
          <div className="mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 md:gap-8">
            <div className="flex flex-col gap-8">
              <h2 className="text-center text-xl font-medium text-blue-primary">
                REFERÊNCIA <br />
                <strong className="font-bold">em saúde e bem-estar!</strong>
              </h2>
              <p className="mx-auto max-w-2xl text-center text-base font-medium text-[#757575]">
                A Clínica Otologic é referência em saúde e bem-estar,
                especializada em Otorrinolaringologia e Audiologia. Oferecemos
                atendimento completo e personalizado, abrangendo consultas
                clínicas para crianças e adultos, cirurgias e exames
                especializados.
              </p>
            </div>
          </div>
        </section>
        <Carousel />
        <section className="bg-blue-secondary py-10 md:py-20">
          <div className="mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 md:gap-8">
            <div className="flex flex-col items-center gap-8">
              <div
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'rounded-full border !border-white !bg-transparent px-4 py-1',
                )}
              >
                <h2 className="mx-auto w-fit px-2 py-1 text-center text-xl font-bold text-white">
                  Somos especialistas
                </h2>
              </div>

              <p className="mx-auto max-w-2xl text-center text-base font-medium text-white">
                A Clínica Otologic é referência em saúde e bem-estar,
                especializada em Otorrinolaringologia e Audiologia. Oferecemos
                atendimento completo e personalizado, abrangendo consultas
                clínicas para crianças e adultos, cirurgias e exames
                especializados.
              </p>

              <div className="mx-auto grid w-full max-w-2xl grid-cols-3 divide-x divide-white">
                <div className="flex flex-col items-center justify-between gap-4">
                  <img src="/imgs/ouvido.svg" className="max-w-20" />
                  <span className="text-base font-medium text-white">
                    OUVIDO
                  </span>
                </div>
                <div className="flex flex-col items-center justify-between gap-4">
                  <img src="/imgs/nariz.svg" className="max-w-20" />
                  <span className="text-base font-medium text-white">
                    NARIZ
                  </span>
                </div>
                <div className="flex flex-col items-center justify-between gap-4">
                  <img src="/imgs/garganta.svg" className="max-w-20" />
                  <span className="text-base font-medium text-white">
                    GARGANTA
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <Link href="/convenios" className="self-center">
                  <Button className="w-fit rounded-3xl border border-blue-primary bg-blue-primary px-2 py-1 text-base font-bold text-white hover:bg-white hover:text-blue-primary">
                    Conheça nossa clínica
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-2 md:gap-8">
            <div className="flex flex-col items-center gap-8">
              <div
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'rounded-full border !border-blue-primary !bg-transparent px-4 py-1',
                )}
              >
                <h2 className="mx-auto w-fit px-2 py-1 text-center text-xl font-bold text-blue-primary">
                  Notícias
                </h2>
              </div>

              <p className="mx-auto max-w-2xl text-center text-base font-medium text-[#757575]">
                Fique por dentro das curiosidades, doenças, exames e tratamentos
                para a sua saúde.
              </p>
            </div>

            <News latestNews={news} />

            <div className="flex justify-center">
              <Link href="/noticias" className="self-center">
                <Button className="w-fit rounded-3xl border border-blue-primary bg-blue-primary px-2 py-1 text-base font-bold text-white hover:bg-white hover:text-blue-primary">
                  <ChevronRight />
                  Mais notícias
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
