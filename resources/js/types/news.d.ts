interface News {
  id: number;
  user_id: number;
  title: string;
  body: string;
  body_2: string;
  cover_image: string;
  main_image: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
}

export type { News };
