import Hero from "@/app/componets/Hero";
import ProductCarouselSection from "./componets/ProductCarouselSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <ProductCarouselSection />
    </main>
  )
}
