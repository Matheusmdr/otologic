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
      <DialogContent className="!max-w-fit">
        <img src={imgSrc} className={cn('cursor-pointer', className)} />
      </DialogContent>
    </Dialog>
  );
}

export { ExapandableImage };
