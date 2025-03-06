import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

interface ExapandableImageProps {
  imgSrc?: string;
  className?: string;
  alt?: string;
}

function ExapandableImage({ imgSrc, className, alt }: ExapandableImageProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <img
          src={imgSrc}
          className={cn('cursor-pointer', className)}
          alt={alt}
        />
      </DialogTrigger>
      <DialogContent className="flex w-10/12 max-w-5xl justify-center p-2">
        <img
          src={imgSrc}
          className={cn('h-auto max-w-full cursor-pointer', className)}
        />
      </DialogContent>
    </Dialog>
  );
}

export { ExapandableImage };
