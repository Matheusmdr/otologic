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
          delay: 7000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <img
            src="/imgs/fachada-otologic.png"
            className="max-h-[650px] w-full object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/imgs/fachada-otologic.png"
            className="max-h-[650px] w-full object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/imgs/fachada-otologic.png"
            className="max-h-[650px] w-full object-cover"
          />
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselDots className="-translate-y-full" /> */}
    </CarouselUI>
  );
}

export { Carousel };
