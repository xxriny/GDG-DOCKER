import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen px-5 pb-16 pt-8 sm:px-10 lg:px-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
