"use client";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import FooterImpressum from "@/components/FooterImpressum";
import Script from "next/script"; // Import the Script component from next/script

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        
      </div>
      
      <div className="text-white leading-relaxed max-w-3xl mx-auto my-24">
        <h2 className="text-2xl font-bold mb-4">Impressum</h2>

        <Script id="haendlerbund-script" strategy="afterInteractive">
        {`
            (function(d, t) {
              var s = d.createElement(t), p = d.getElementsByTagName(t)[0];
              s.src = "https://consenttool.haendlerbund.de/app.js?apiKey=4a65da51f935985521a5c1d7458d83041794bc555950ea3f&domain=a4dcbb7";
              s.referrerPolicy = "origin";
              p.parentNode.insertBefore(s, p);
            })(document, 'script');
          `}
      </Script>

        <section className="mb-8">
          <h3 className="font-semibold">Gesetzliche Anbieterkennung:</h3>
          <p>
            Benjamin Mulamisini<br />
            bmchatai<br />
            Schnitzerstraße 2<br />
            87527 Sonthofen<br />
            Deutschland<br />
            Telefon: <a href="tel:+4917685121038" className="text-blue-500">+49 17685121038</a><br />
            E-Mail: <a href="mailto:support@bmchatai.de" className="text-blue-500">support@bmchatai.de</a>
          </p>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">Beschwerdestelle des Unternehmens:</h3>
          <p>
            Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
            Promenade 27 (Schloss)<br />
            91522 Ansbach<br />
            Tel.: <a href="tel:+499811800930" className="text-blue-500">+49 981 180093-0</a><br />
            Fax: +49 981 180093-800<br />
            E-Mail: <a href="mailto:poststelle@lda.bayern.de" className="text-blue-500">poststelle@lda.bayern.de</a><br />
            Website: <a href="https://www.lda.bayern.de/" className="text-blue-500">https://www.lda.bayern.de/</a>
          </p>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">Zuständige Aufsichtsbehörde für audiovisuelle Mediendienste:</h3>
          <p>
            Bayerische Landeszentrale für neue Medien (BLM)<br />
            Heinrich-Lübke-Str. 27<br />
            81737 München<br />
            Website: <a href="https://www.blm.de/" className="text-blue-500">https://www.blm.de/</a>
          </p>
        </section>

        <section className="mb-8">
          <p>
            Aufgrund des Kleinunternehmerstatus wird gemäß § 19 UStG die MwSt. in der Rechnung nicht ausgewiesen.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">Alternative Streitbeilegung:</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform für die außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit, aufrufbar unter <a href="https://ec.europa.eu/consumers/odr" className="text-blue-500">https://ec.europa.eu/consumers/odr</a>.
          </p>
          <p>
            Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor Verbraucherschlichtungsstellen teilzunehmen.
          </p>
        </section>
      </div>
         <FooterImpressum />     
    </main>
  );
};

export default Home;
