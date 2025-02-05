import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w mx-auto ">
       <h1 className="heading p-12">
       Okay... was genau hebt <span className="text-purple">dich</span> von den anderen ab?
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  
  {
    title: "Partnerschaft auf Augenhöhe",
    description:
      "Dein Erfolg ist unser Erfolg. Eine echte Partnerschaft basiert auf geteiltem Risiko – und genau das bieten wir. Du trägst nicht die Last alleine, wir stehen an deiner Seite.",
  },
  {
    title: "Ergebnisse, die zählen",
    description:
      "Unser Fokus liegt darauf, konkrete Resultate für dein Unternehmen zu liefern. Weniger Gerede, mehr messbare Erfolge – das ist unser Ansatz.",
  },
  {
    title: "Fachwissen & Spezialisierung",
    description:
      "Wir kennen die Branchen, mit denen wir arbeiten, in- und auswendig. Dadurch liefern wir nicht nur Lösungen, sondern garantieren Ergebnisse.",
  },
  {
    title: "Effiziente Lösungen, die wirklich funktionieren",
    description:
      "Wir kombinieren Fachwissen und Innovation, um leistungsstarke Chatbots zu entwickeln, die deine Geschäftsprozesse optimieren. Ob CRM, Terminplanung oder Kundensupport – mit uns bist du der Konkurrenz immer einen Schritt voraus.",
  },

];
