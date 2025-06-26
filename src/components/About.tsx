
import { Code, Palette, Coffee } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a passionate creative professional with expertise in both graphic design 
            and software engineering, bringing ideas to life through code and visual design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              My Journey
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              With a unique blend of technical and creative skills, I bridge the gap 
              between design and development. My background spans from creating visually 
              stunning graphics to building robust software applications.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Based in Abeokuta, Ogun State, Nigeria, I'm always excited to take on 
              new challenges and collaborate on innovative projects that push the 
              boundaries of what's possible.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-slate-800 mb-2">Development</h4>
                <p className="text-sm text-slate-600">Building scalable applications</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Palette className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-slate-800 mb-2">Design</h4>
                <p className="text-sm text-slate-600">Creating visual experiences</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Coffee className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h4 className="font-semibold text-slate-800 mb-2">Collaboration</h4>
                <p className="text-sm text-slate-600">Working with amazing teams</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-slate-800 mb-4">Skills & Expertise</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-600">Software Development</span>
                    <span className="text-slate-600">95%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: "95%"}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-600">Graphic Design</span>
                    <span className="text-slate-600">90%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: "90%"}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-600">Problem Solving</span>
                    <span className="text-slate-600">98%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: "98%"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
