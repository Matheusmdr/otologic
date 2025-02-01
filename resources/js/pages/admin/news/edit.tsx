import { CreateAndEditNews } from '@/components/forms';
import Authenticated from '@/layouts/authenticated-layout';
import { PageProps } from '@/types';
import { News } from '@/types/news';

interface Props extends PageProps {
  news: News;
}

export default function Page({ auth, news }: Props) {
  return (
    <Authenticated user={auth.user}>
      <CreateAndEditNews data={news} userId={auth.user.id} />
    </Authenticated>
  );
}
