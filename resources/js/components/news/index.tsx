import { cn } from '@/lib/utils';
import { News as NewsType } from '@/types/news';
import { Link } from '@inertiajs/react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '../ui/card';

interface NewsProps {
  latestNews: NewsType[];
}

function News({ latestNews }: NewsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 py-5 md:grid-cols-2 md:gap-8 md:py-10 lg:grid-cols-3">
      {latestNews.map((news, i) => (
        <Card
          className={cn(
            'flex h-full w-full flex-row rounded-2xl border-none bg-transparent p-0 shadow-none md:rounded-[34px]',
          )}
          key={i}
        >
          <img
            src={`${news.cover_image}`}
            className="max-h-44 max-w-44 basis-1/2"
            alt={news.title}
          />
          <CardContent className="flex basis-1/2 flex-col gap-1 bg-white px-2 py-3 md:gap-4 md:py-4">
            <span className="text-base text-[#757575]">
              {format(new Date(news.created_at), 'PP', { locale: ptBR })}
            </span>
            <h4 className="text-base font-semibold text-[#757575]">
              {news.title.length > 80
                ? news.title.substring(0, 80) + '...'
                : news.title}
            </h4>
            <CardFooter className="flex bg-white p-0">
              <Link
                href={`/noticias/${news.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-blue-primary px-2 py-1 text-base text-white"
              >
                <ChevronRight className="h-4 w-4" />
                Saiba Mais
              </Link>
            </CardFooter>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export { News };
