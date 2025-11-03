import * as CarouselImages from "@/assets/images/Carousel";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, Triangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CarouselWrapper() {
    const carouselItems = [
        {
            src: CarouselImages.AyuntamientoDeMutxamelLogo,
            alt: "Ayuntamiento de Mutxamel Logo",
        },
        { src: CarouselImages.CajamarLogo, alt: "Cajamar Logo" },
        { src: CarouselImages.UALLogo, alt: "UAL Logo" },
        {
            src: CarouselImages.UniversidadDeAlcalaLogo,
            alt: "Universidad de Alcala Logo",
        },
        { src: CarouselImages.LaVozDeAlmeriaLogo, alt: "La Voz De Almeria Logo" },
        { src: CarouselImages.LogosAlmeriaCiudad, alt: "Logos Almeria Ciudad" },
        { src: CarouselImages.LogosHolaluz, alt: "Logos Holaluz" },
    ];

    return (
        <div className="px-20 py-8">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                    slidesToScroll: 1,
                }}
            >
                <CarouselContent className="ml-0">
                    {carouselItems.map((item, index) => (
                        <CarouselItem key={item.alt || index} className="basis-1/2 pl-0">
                            <img
                                src={item.src.src}
                                alt={item.alt}
                                className="h-fit w-fit transition-all duration-300"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="bg-transparent border-0 shadow-none" />

                <CarouselNext className="bg-transparent border-0 shadow-none" />
            </Carousel>
        </div>
    );
}