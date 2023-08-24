import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CarouselModal from "./CarouselModal";

interface Props {
  images: string[];
}

export function Carousel(props: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {props.images.map((image, index) => (
            <div
              key={image + index}
              className="embla__slide flex-[0_0_100%] min-w-0"
            >
              <CarouselModal image={image} index={index} />
            </div>
          ))}
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
}
