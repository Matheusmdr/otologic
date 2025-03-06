import { Button, buttonVariants } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { cn } from '@/lib/utils';
import { Head, Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

const healthInsurances = [
  {
    title: 'Unimed',
    iconSrc: '/imgs/convenios/unimed.png',
  },
  {
    title: 'Oeste Saúde',
    iconSrc: '/imgs/convenios/oeste-saude.png',
  },
  {
    title: 'SulAmérica',
    iconSrc: '/imgs/convenios/sulamerica.png',
  },
  {
    title: 'Iamspe - A saúde do servidor',
    iconSrc: '/imgs/convenios/iamspe.png',
  },
  {
    title: 'Amor Saúde - Medicina, Odontologia e Exames',
    iconSrc: '/imgs/convenios/amor-saude.png',
  },
  {
    title: 'Solimed',
    iconSrc: '/imgs/convenios/solimed.png',
  },
  {
    title: 'Apas Prudente',
    iconSrc: '/imgs/convenios/apas-pp.png',
  },
  {
    title: 'Apas PV',
    iconSrc: '/imgs/convenios/apas-pv.png',
  },
];

export default function Page() {
  return (
    <MainLayout>
      <Head title="Convênios Atendidos" />
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
                Convênios Atendidos
              </h2>
            </div>
          </div>
          <p className="mx-auto max-w-2xl text-center text-base font-medium text-[#757575]">
            Atendemos os mais diversos convênios de saúde.
          </p>
          <div className="mx-auto grid w-10/12 max-w-5xl grid-cols-2 place-items-center items-center justify-center justify-items-center gap-12 md:grid-cols-4 md:gap-28">
            {healthInsurances.map((healthInsurance) => (
              <img
                key={healthInsurance.title}
                src={healthInsurance.iconSrc}
                alt={healthInsurance.title}
                className="max-h-40 w-auto md:max-h-14"
              />
            ))}
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
