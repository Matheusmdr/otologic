import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { News } from '@/types/news';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { Path, useForm } from 'react-hook-form';
import { z } from 'zod';
import { MdEditorField } from './fields/md-editor-field';
import { UploadImageField } from './fields/upload-image-field.tsx';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB em bytes

const formSchema = z.object({
  title: z.string().min(1, { message: 'Por favor, insira um título' }),
  body: z.string(),
  body2: z.string().min(1, { message: 'Por favor, insira um conteúdo' }),
  coverImage: z
    .object({
      preview: z.string(),
      file: z.instanceof(File).optional(),
    })
    .refine(
      (value) => !value.file || value.file.type?.includes('image'),
      'Apenas arquivos .jpg, .jpeg, .png e .webp são aceitos.',
    )
    .refine(
      (value) => !value.file || value.file?.size <= MAX_FILE_SIZE,
      `Tamanho máximo: ${MAX_FILE_SIZE / 1000}KB`,
    )
    .refine((value) => value.preview?.trim(), 'Por favor, insira uma imagem'),
  mainImage: z
    .object({
      preview: z.string(),
      file: z.instanceof(File).optional(),
    })
    .refine(
      (value) => !value.file || value.file.type?.includes('image'),
      'Apenas arquivos .jpg, .jpeg, .png e .webp são aceitos.',
    )
    .refine(
      (value) => !value.file || value.file?.size <= MAX_FILE_SIZE,
      `Tamanho máximo: ${MAX_FILE_SIZE / 1000}KB`,
    )
    .refine((value) => value.preview?.trim(), 'Por favor, insira uma imagem'),
});

type FormValues = z.infer<typeof formSchema>;

interface CreateAndEditNewsProps {
  userId: number;
  data?: News;
}

export function CreateAndEditNews({ data, userId }: CreateAndEditNewsProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data?.title ?? '',
      body: data?.body ?? '',
      body2: data?.body_2 ?? '',
      coverImage: {
        file: undefined,
        preview: data?.cover_image ?? '',
      },
      mainImage: {
        file: undefined,
        preview: data?.main_image ?? '',
      },
    },
  });

  function onSubmit(values: FormValues) {
    if (data?.id) {
      router.post(
        `/admin/news/${data.id}`,
        {
          _method: 'put',
          title: values.title,
          body: values.body ?? '',
          body_2: values.body2 ?? '',
          cover_image: values.coverImage.file,
          main_image: values.mainImage.file,
        },
        {
          onSuccess: () => {
            toast({
              title: 'Noticia editada',
              description: 'Noticia editada com sucesso.',
            });
          },
          onError: (errors) => {
            console.log(errors);
            toast({
              title: 'Erro',
              description: 'Ocorreu um erro ao editar a noticia.',
              variant: 'destructive',
            });
          },
        },
      );
      return;
    }

    router.post(
      '/admin/news',
      {
        title: values.title,
        body: values.body ?? '',
        body_2: values.body2 ?? '',
        cover_image: values.coverImage.file,
        main_image: values.mainImage.file,
        user_id: userId,
      },
      {
        onSuccess: () => {
          toast({
            title: 'Noticia criada',
            description: 'Noticia criada com sucesso.',
          });
        },
        onError: () => {
          toast({
            title: 'Erro',
            description: 'Ocorreu um erro ao criar a noticia.',
            variant: 'destructive',
          });
        },
      },
    );
  }

  const handleDeleteImage = (imageType: 'cover_image' | 'main_image') => {
    const fields = {
      cover_image: 'cover',
      main_image: 'main',
    };

    form.setValue(fields[imageType] as Path<FormValues>, {
      preview: '',
      file: undefined,
    });

    if (data) {
      router.post(
        `/admin/news/${data?.id}/delete-image`,
        { image_type: imageType },
        {
          onSuccess: () => {
            toast({
              title: 'Imagem deletada',
              description: 'Imagem deletada com sucesso.',
            });
          },
          onError: () => {
            toast({
              title: 'Erro',
              description: 'Ocorreu um erro ao deletar a imagem.',
              variant: 'destructive',
            });
          },
        },
      );
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título da noticia</FormLabel>
              <FormControl>
                <Input placeholder="Título da noticia" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <fieldset className="flex gap-4">
          <UploadImageField
            form={form}
            label="Imagem de capa"
            name="coverImage"
            className="w-full"
            onDelete={() => handleDeleteImage('cover_image')}
          />
          <UploadImageField
            form={form}
            label="Imagem principal"
            name="mainImage"
            className="w-full"
            onDelete={() => handleDeleteImage('main_image')}
          />
        </fieldset>
        <MdEditorField
          form={form}
          label="Conteúdo (antes das imagens)"
          name="body"
          htmlValue={data?.body ?? ''}
        />
        <MdEditorField
          form={form}
          label="Conteúdo (depois das imagens)"
          name="body2"
          htmlValue={data?.body_2 ?? ''}
        />
        <div className="flex justify-end">
          <Button type="submit">{data ? 'Editar' : 'Criar'}</Button>
        </div>
      </form>
    </Form>
  );
}
