import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden h-[300px]">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          <div className="embla__slide flex-[0_0_100%] min-w-0">Slide 1</div>
          <div className="embla__slide flex-[0_0_100%] min-w-0">Slide 2</div>
          <div className="embla__slide flex-[0_0_100%] min-w-0">Slide 3</div>
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
};
