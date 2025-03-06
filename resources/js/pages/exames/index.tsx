import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button, buttonVariants } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { cn } from '@/lib/utils';
import { Exam } from '@/types/exam';
import { Head, Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

interface Props {
  exams: Exam[];
}

export default function Page({ exams }: Props) {
  return (
    <MainLayout>
      <Head title="Nossos Exames" />
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
                Nossos Exames
              </h2>
            </div>
          </div>
          <p className="mx-auto max-w-2xl text-center text-base font-medium text-[#757575]">
            Na Otologic, oferecemos uma ampla gama de exames especializados em
            Otorrinolaringologia e Audiologia, garantindo diagnósticos precisos
            e um atendimento de excelência.
          </p>
          <div className="mx-auto w-11/12 max-w-7xl">
            <Accordion type="single" collapsible>
              {exams.map((exam) => (
                <AccordionItem key={exam.id} value={exam.title}>
                  <AccordionTrigger className="text-left text-base font-bold text-blue-tertiary">
                    {exam.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="text-base font-normal text-[#757575] [&_h1]:text-base [&_h1]:font-bold [&_h2]:text-base [&_h2]:font-bold [&_h3]:text-base [&_h3]:font-bold [&_h4]:text-base [&_h4]:font-bold [&_h5]:text-base [&_h5]:font-bold [&_h6]:text-base [&_h6]:font-bold [&_p]:mb-4 [&_ul]:list-disc [&_ul]:space-y-4 [&_ul]:pl-5"
                      dangerouslySetInnerHTML={{ __html: exam.body ?? '' }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
