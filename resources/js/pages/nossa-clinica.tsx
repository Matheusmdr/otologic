import { ExapandableImage } from '@/components/expandable-image';
import { Button, buttonVariants } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { cn } from '@/lib/utils';
import { Head, Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export default function Page() {
  return (
    <MainLayout>
      <Head title="Nossas Unidades" />
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
                Nossa Clínica
              </h2>
            </div>
          </div>
          <p className="mx-auto max-w-2xl text-center text-base font-medium text-[#757575]">
            Localizada próxima ao centro de Presidente Prudente/SP, contamos com
            instalações novas, consultórios amplos, área kids, espaço café e uma
            equipe de recepção pronta para atender nossos pacientes, com muito
            conforto e acessibilidade.
          </p>
          <div className="flex flex-col gap-10">
            <span className="text-center text-base font-bold text-[#757575]">
              CLIQUE NA FOTO PARA AMPLIAR
            </span>
          </div>
          <div className="mx-auto flex w-11/12 flex-col items-center gap-4">
            <ExapandableImage
              imgSrc="/imgs/nossa-clinica/1.png"
              alt="Nossa Clínica 1"
              className="mx-auto w-full max-w-7xl"
            />

            <div className="flex justify-center gap-2 md:gap-4">
              <ExapandableImage
                imgSrc="/imgs/nossa-clinica/2.png"
                alt="Nossa Clínica 2"
                className="w-full max-w-sm md:max-w-7xl"
              />
              <ExapandableImage
                imgSrc="/imgs/nossa-clinica/3.png"
                alt="Nossa Clínica 3"
                className="w-full max-w-sm md:max-w-7xl"
              />
            </div>

            <ExapandableImage
              imgSrc="/imgs/nossa-clinica/4.png"
              alt="Nossa Clínica 4"
              className="mx-auto w-full max-w-7xl"
            />

            <div className="flex justify-center gap-2 md:gap-4">
              <ExapandableImage
                imgSrc="/imgs/nossa-clinica/5.png"
                alt="Nossa Clínica 5"
                className="w-full max-w-sm md:max-w-7xl"
              />
              <ExapandableImage
                imgSrc="/imgs/nossa-clinica/6.png"
                alt="Nossa Clínica 6"
                className="w-full max-w-sm md:max-w-7xl"
              />
            </div>

            <div className="flex justify-center gap-2 md:gap-4">
              <ExapandableImage
                imgSrc="/imgs/nossa-clinica/7.png"
                alt="Nossa Clínica 7"
                className="w-full max-w-sm md:max-w-7xl"
              />
              <ExapandableImage
                imgSrc="/imgs/nossa-clinica/8.png"
                alt="Nossa Clínica 8"
                className="w-full max-w-sm md:max-w-7xl"
              />
            </div>

            <ExapandableImage
              imgSrc="/imgs/nossa-clinica/9.png"
              alt="Nossa Clínica 9"
              className="mx-auto w-full max-w-7xl"
            />

            <div className="flex justify-center gap-2 md:gap-4">
              <ExapandableImage
                imgSrc="/imgs/nossa-clinica/10.png"
                alt="Nossa Clínica 10"
                className="w-full max-w-sm md:max-w-7xl"
              />
              <ExapandableImage
                imgSrc="/imgs/nossa-clinica/11.png"
                alt="Nossa Clínica 11"
                className="w-full max-w-sm md:max-w-7xl"
              />
            </div>

            <div className="flex justify-center gap-2 md:gap-4">
              <ExapandableImage
                imgSrc="/imgs/nossa-clinica/12.png"
                alt="Nossa Clínica 12"
                className="w-full max-w-sm md:max-w-7xl"
              />
              <ExapandableImage
                imgSrc="/imgs/nossa-clinica/13.png"
                alt="Nossa Clínica 13"
                className="w-full max-w-sm md:max-w-7xl"
              />
            </div>
          </div>
        </section>
        <section className="flex justify-center">
          <Link href="/noticias" className="self-center">
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
