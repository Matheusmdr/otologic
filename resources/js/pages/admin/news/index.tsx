import { DataTable } from '@/components/data-table';
import { newsColumns } from '@/components/data-table/columns/news-columns';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import Authenticated from '@/layouts/authenticated-layout';
import { PageProps } from '@/types';
import { News } from '@/types/news';
import { Link } from '@inertiajs/react';

interface Props extends PageProps {
  news: News[];
}

export default function Page({ auth, news }: Props) {
  return (
    <Authenticated user={auth.user}>
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-col gap-2 p-4">
          <div>
            <Button className="w">
              <Link href="/admin/news/create">Adicionar noticias</Link>
            </Button>
          </div>
          {news && <DataTable data={news} columns={newsColumns} />}
        </div>
      </TooltipProvider>
    </Authenticated>
  );
}
