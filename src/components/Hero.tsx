
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/lovable-uploads/d0392304-7ac0-4f64-bd70-8423868808a0.png"
            alt="Alo Temitayo Oluwagbemiga"
            className="w-48 h-48 rounded-full mx-auto mb-8 shadow-xl border-4 border-white object-cover"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-4">
            Alo Temitayo
            <span className="block text-blue-600">Oluwagbemiga</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8">
            Graphic Designer & Software Engineer
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12">
            Crafting beautiful designs and building innovative software solutions
            that make a difference in the digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToAbout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Me
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="animate-bounce">
          <button onClick={scrollToAbout} className="text-slate-400 hover:text-blue-600 transition-colors">
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};
