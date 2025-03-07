import Autoplay from 'embla-carousel-autoplay';
import {
  CarouselContent,
  CarouselItem,
  Carousel as CarouselUI,
} from '../ui/carousel';

function Carousel() {
  return (
    <CarouselUI
      opts={{
        align: 'center',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <img
            src="/imgs/banners/Fachada-otologic-1.jpg"
            className="max-h-[700px] w-full object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/imgs/banners/Fachada-otologic-2.jpg"
            className="max-h-[700px] w-full object-cover"
          />
        </CarouselItem>
      </CarouselContent>
    </CarouselUI>
  );
}

export { Carousel };
