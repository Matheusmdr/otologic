import { Button, buttonVariants } from '@/components/ui/button';
import GuestLayout from '@/layouts/main-layout';
import { cn } from '@/lib/utils';
import { News } from '@/types/news';
import { Head, Link } from '@inertiajs/react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronRight } from 'lucide-react';

interface Props {
  news: News;
}

export default function Page({ news }: Props) {
  return (
    <GuestLayout>
      <Head>
        <title>{news.title}</title>
      </Head>
      <main className="space-y-10 bg-white py-10 md:space-y-20 md:py-20">
        <section className="flex flex-col gap-10">
          <div className="mx-auto flex w-11/12 max-w-5xl flex-col justify-center gap-2 md:gap-6">
            <div className="mx-auto flex w-11/12 max-w-7xl flex-col justify-center gap-10">
              <div
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'mx-auto w-fit rounded-full border !border-blue-primary !bg-transparent px-4 py-1',
                )}
              >
                <h2 className="mx-auto w-fit px-2 py-1 text-center text-xl font-bold text-blue-primary">
                  Notícias
                </h2>
              </div>
            </div>
            <div>
              <span className="text-sm text-[#757575]">
                {format(new Date(news.created_at), 'PPP', {
                  locale: ptBR,
                })}
              </span>
            </div>
            <div className="h-[1px] w-full bg-gray-300" />
            <div className="flex flex-col gap-6">
              <h1 className="text-base font-semibold text-[#757575]">
                {news.title}
              </h1>
              <div
                className="[&_h2]:font-bold[&_h3]:text-base [&_h5]:font-bold[&_h6]:text-base space-y-4 text-sm font-normal text-[#757575] [&_h1]:text-base [&_h1]:font-bold [&_h2]:text-base [&_h3]:font-bold [&_h4]:text-base [&_h4]:font-bold [&_h5]:text-base [&_h6]:font-bold [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-[#757575]"
                dangerouslySetInnerHTML={{ __html: news.body }}
              />
              <img
                src={news.cover_image}
                alt={news.title}
                className="mx-auto w-10/12 rounded-xl md:max-w-[600px]"
              />
              <div
                className="[&_h2]:font-bold[&_h3]:text-base [&_h5]:font-bold[&_h6]:text-base space-y-4 text-sm font-normal text-[#757575] md:!text-lg [&_h1]:text-base [&_h1]:font-bold [&_h2]:text-base [&_h3]:font-bold [&_h4]:text-base [&_h4]:font-bold [&_h5]:text-base [&_h6]:font-bold [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-[#757575]"
                dangerouslySetInnerHTML={{ __html: news.body_2 }}
              />
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
    </GuestLayout>
  );
}
