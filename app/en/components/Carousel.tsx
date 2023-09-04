import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CarouselModal from "./CarouselModal";
import Image from "next/image";
import LeftArrow from "../../../public/arrow-left.svg";
import RightArrow from "../../../public/arrow-right.svg";

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
    <div className="embla overflow-hidden lg:w-[160%]">
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
      {props.images.length === 1 ? null : (
        <div className="flex justify-center mt-2">
          <button
            className="embla__prev mr-2 w-[20px] h-[20px]"
            onClick={scrollPrev}
          >
            <Image src={LeftArrow} alt="Previous image" />
          </button>
          <button
            className="embla__next ml-2 w-[20px] h-[20px]"
            onClick={scrollNext}
          >
            <Image src={RightArrow} alt="Next image" />
          </button>
        </div>
      )}
    </div>
  );
}
