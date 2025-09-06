import Card from "../ui/Card";
import Button from "../ui/Button";
import { Layers, Lightbulb, Mail, Rocket, Users } from "lucide-react";
import { expertiseText, expertiseSteps } from "../../data/expertise";

const iconMap = {
  lightbulb: <Lightbulb className="text-yellow-500" size={28} />,
  layers: <Layers className="text-indigo-500" size={28} />,
  rocket: <Rocket className="text-green-500" size={28} />,
  users: <Users className="text-pink-500" size={28} />,
};

const Expertise = () => (
  <section
    id="mon-approche"
    className="py-16 bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/60"
  >
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-indigo-700 drop-shadow">
        Mon approche pour votre réussite
      </h2>
      <p className="mb-10 text-lg text-center text-gray-700 max-w-2xl mx-auto">
        {expertiseText}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {expertiseSteps.map((step, i) => (
          <Card
            key={step.title}
            className="flex flex-col items-center p-8 h-full shadow-lg hover:shadow-indigo-200 transition-transform duration-300 hover:-translate-y-2 hover:scale-105 group"
          >
            <div
              className="mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {iconMap[step.icon]}
            </div>
            <div className="font-semibold text-lg text-gray-900 mb-1">
              {step.title}
            </div>
            <div className="text-gray-600 text-center">{step.desc}</div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Button
          href="#contact"
          variant="primary"
          icon={<Mail size={18} />}
          aria-label="Discutons de votre projet"
          title="Discutons de votre projet"
          className="text-lg px-8 py-4"
        >
          Vous avez un projet ? Discutons-en !
        </Button>
      </div>
    </div>
  </section>
);

export default Expertise;
