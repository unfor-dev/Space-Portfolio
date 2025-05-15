import Encryption from "@/Components/main/Encryption";
import Hero from "@/Components/main/Hero";
import Projects from "@/Components/main/Projects";
import Skills from "@/Components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
