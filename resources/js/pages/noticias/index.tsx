import { Button, buttonVariants } from '@/components/ui/button';
import GuestLayout from '@/layouts/main-layout';
import { cn } from '@/lib/utils';
import { News } from '@/types/news';
import { Head, Link } from '@inertiajs/react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Fragment } from 'react';

interface Props {
  news: {
    current_page: number;
    data: News[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
      url: string;
      label: string;
      active: boolean;
    }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
}

export default function Page({ news }: Props) {
  const { data } = news;

  return (
    <GuestLayout>
      <Head>
        <title>Notícias</title>
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
            <p className="mx-auto max-w-2xl text-center text-base font-medium text-[#757575]">
              Fique por dentro de todas as notícias sobre cuidados com a sua
              saúde!
            </p>
            <div>
              {data.map((newsItem) => (
                <Fragment key={newsItem.id}>
                  <div className="flex flex-row items-center gap-4 py-4">
                    <img
                      src={newsItem.cover_image}
                      alt={newsItem.title}
                      className="w-full rounded-xl object-cover md:max-h-[250px]"
                    />
                    <div className="flex w-full flex-col gap-2">
                      <span className="text-[#757575]">
                        {format(new Date(newsItem.created_at), 'PPP', {
                          locale: ptBR,
                        })}
                      </span>
                      <h1 className="text-base font-semibold text-[#757575]">
                        {newsItem.title}
                      </h1>
                      <Link href={`/noticias/${newsItem.slug}`}>
                        <Button className="w-fit rounded-3xl border border-blue-primary bg-blue-primary px-2 py-1 text-base font-normal text-white hover:bg-white hover:text-blue-primary">
                          <ChevronRight />
                          Saiba Mais
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-gray-300" />
                </Fragment>
              ))}
            </div>
            <div className="flex justify-center gap-6">
              {news.prev_page_url?.trim() && (
                <Link
                  href={news.prev_page_url}
                  className="flex self-center text-xs font-bold text-blue-primary"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Página anterior
                </Link>
              )}
              {news.next_page_url?.trim() && (
                <Link
                  href={news.next_page_url}
                  className="flex self-center text-xs font-bold text-blue-primary"
                >
                  Próxima página <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              )}
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
