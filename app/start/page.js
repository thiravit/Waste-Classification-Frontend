"use client";
import Carousel from "@/components/carousel";

export default function home() {
    
  let slides = [
    "/carousel_1.svg",
    "/carousel_2.svg",
    "/carousel_3.svg",

  ];

    return (
        <main className="bg-background h-screen">
            <img src="/bottleye_logo.svg" className="w-48 h-48 m-auto text-center" />
            <div className="px-32">
                <Carousel slides={slides} />

            </div>
        </main>
    );
}
