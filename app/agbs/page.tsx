"use client";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer2 from "@/components/Footer2";
import Script from "next/script"; // Import the Script component from next/script

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
      </div>
      <div className="text-white leading-relaxed max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 my-32">Allgemeine Geschäfts Bedingungen</h2>
        <p>Allgemeine Geschäftsbedingungen und Kundeninformationen</p>

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

<p>I. Allgemeine Geschäftsbedingungen</p>

<p>§ 1 Grundlegende Bestimmungen</p>

<p>(1) Die nachstehenden Geschäftsbedingungen gelten für Verträge, die Sie mit uns als Anbieter (Benjamin Mulamisini) über die Internetseite bmchatai.de schließen. Soweit nicht anders vereinbart, wird der Einbeziehung gegebenenfalls von Ihnen verwendeter eigener Bedingungen widersprochen.</p>

<p>(2) Verbraucher im Sinne der nachstehenden Regelungen ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden kann. Unternehmer ist jede natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer selbständigen beruflichen oder gewerblichen Tätigkeit handelt.</p>

<p>§ 2 Zustandekommen des Vertrages</p>

<p>(1) Gegenstand des Vertrages ist der Verkauf von digitalen Inhalten (Daten, die in digitaler Form erstellt und bereitgestellt werden).</p>

<p>(2) Ihre Anfragen zur Erstellung eines Angebotes sind für Sie unverbindlich. Wir unterbreiten Ihnen hierzu ein verbindliches Angebot in Textform (z.B. per E-Mail), welches Sie innerhalb von 5 Tagen (soweit im jeweiligen Angebot keine andere Frist ausgewiesen ist) annehmen können.</p>

<p>(3) Die Abwicklung der Bestellung und Übermittlung aller im Zusammenhang mit dem Vertragsschluss erforderlichen Informationen erfolgt per E-Mail zum Teil automatisiert. Sie haben deshalb sicherzustellen, dass die von Ihnen bei uns hinterlegte E-Mail-Adresse zutreffend ist, der Empfang der E-Mails technisch sichergestellt und insbesondere nicht durch SPAM-Filter verhindert wird.</p>

<p>§ 3 Nutzungslizenz bei digitalen Inhalten</p>

<p>(1) Die angebotenen digitalen Inhalte sind urheberrechtlich geschützt. Sie erhalten zu jedem bei uns erworbenen digitalen Inhalt eine Nutzungslizenz durch den jeweiligen Lizenzgeber. Art und Umfang der Nutzungslizenz ergeben sich aus den im jeweiligen Angebot genannten Lizenzbestimmungen.</p>

<p>§ 4 Individuell gestaltete digitale Inhalte</p>

<p>(1) Sie stellen uns die für die individuelle Gestaltung der digitalen Inhalte erforderlichen geeigneten Informationen, Texte oder Dateien über das Online-Bestellsystem oder per E-Mail spätestens unverzüglich nach Vertragsschluss zur Verfügung. Unsere etwaigen Vorgaben zu Dateiformaten sind zu beachten.</p>

<p>(2) Sie verpflichten sich, keine Daten zu übermitteln, deren Inhalt Rechte Dritter (insbesondere Urheberrechte, Namensrechte, Markenrechte) verletzen oder gegen bestehende Gesetze verstoßen. Sie stellen uns ausdrücklich von sämtlichen in diesem Zusammenhang geltend gemachten Ansprüchen Dritter frei. Das betrifft auch die Kosten der in diesem Zusammenhang erforderlichen rechtlichen Vertretung.</p>

<p>(3) Wir nehmen keine Prüfung der übermittelten Daten auf inhaltliche Richtigkeit vor und übernehmen insoweit keine Haftung für Fehler.</p>

<p>(4) Soweit im jeweiligen Angebot angegeben, erhalten Sie von uns eine Korrekturvorlage übersandt, die von Ihnen unverzüglich zu prüfen ist. Sind Sie mit dem Entwurf einverstanden, geben Sie die Korrekturvorlage durch Gegenzeichnung in Textform (z.B. E-Mail) zur Ausführung frei. Eine Ausführung der Gestaltungsarbeiten ohne Ihre Freigabe erfolgt nicht. Sie sind dafür verantwortlich, die Korrekturvorlage auf Richtigkeit und Vollständigkeit zu überprüfen und uns etwaige Fehler mitzuteilen. Wir übernehmen keine Haftung für nicht beanstandete Fehler.</p>

<p>§ 5 Vertragslaufzeit / Kündigung bei Abonnement-Verträgen</p>

<p>(1) Der zwischen Ihnen und uns geschlossene Abonnement-Vertrag hat die im jeweiligen Angebot ausgewiesene Laufzeit, nachfolgend "Grundlaufzeit" genannt. Eine Grundlaufzeit von mehr als 2 Jahren kann nicht vereinbart werden.</p>

<p>(2) Wird der Abonnement-Vertrag nicht einen Monat vor Ablauf der Grundlaufzeit (soweit im jeweiligen Angebot keine kürzere Frist geregelt ist) von einer der Parteien gekündigt, verlängert er sich stillschweigend auf unbestimmte Zeit. Das verlängerte Vertragsverhältnis kann jederzeit mit einer Frist von einem Monat (soweit im jeweiligen Angebot keine kürzere Frist geregelt ist) gekündigt werden.</p>

<p>(3) Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt hiervon unberührt.</p>

<p>(4) Jede Kündigung muss entweder in Textform (z.B. E-Mail) oder über die auf unserer Internetpräsenz eingebundene Kündigungsschaltfläche ("Verträge hier kündigen" oder ähnliche Bezeichnung) erklärt und übermittelt werden.</p>

<p>§ 6 Besondere Vereinbarungen zu angebotenen Zahlungsarten</p>

<p>(1) Zahlung über "PayPal" / "PayPal Checkout" Bei Auswahl einer Zahlungsart, die über "PayPal" / "PayPal Checkout" angeboten wird, erfolgt die Zahlungsabwicklung über den Zahlungsdienstleister PayPal (Europe) S.à.r.l. et Cie, S.C.A. (22-24 Boulevard Royal L-2449, Luxemburg; "PayPal"). Die einzelnen Zahlungsarten über "PayPal" werden Ihnen unter einer entsprechend bezeichneten Schaltfläche auf unserer Internetpräsenz sowie im Online-Bestellvorgang angezeigt. Für die Zahlungsabwicklung kann sich "PayPal" weiterer Zahlungsdienste bedienen; soweit hierfür besondere Zahlungsbedingungen gelten, werden Sie auf diese gesondert hingewiesen. Nähere Informationen zu "PayPal" finden Sie unter https://www.paypal.com/de/webapps/mpp/ua/legalhub-full.</p>

<p>(2) Zahlung über "Stripe" Bei Auswahl einer Zahlungsart, die über "Stripe" angeboten wird, erfolgt die Zahlungsabwicklung über den Zahlungsdienstleister Stripe Payments Europe Limited (1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Ireland; "Stripe"). Die einzelnen Zahlungsarten über "Stripe" werden Ihnen unter einer entsprechend bezeichneten Schaltfläche auf unserer Internetpräsenz sowie im Online-Bestellvorgang angezeigt. Für die Zahlungsabwicklung kann sich "Stripe" weiterer Zahlungsdienste bedienen; soweit hierfür besondere Zahlungsbedingungen gelten, werden Sie auf diese gesondert hingewiesen. Nähere Informationen zu "Stripe" finden Sie unter https://stripe.com/de.</p>

<p>§ 7 Zurückbehaltungsrecht</p>

<p>Ein Zurückbehaltungsrecht können Sie nur ausüben, soweit es sich um Forderungen aus demselben Vertragsverhältnis handelt.</p>

<p>§ 8 Gewährleistung</p>

<p>(1) Es bestehen die gesetzlichen Mängelhaftungsrechte.</p>

<p>(2) Soweit ein Merkmal des digitalen Inhalts von den objektiven Anforderungen abweicht, gilt die Abweichung nur dann als vereinbart, wenn Sie vor Abgabe der Vertragserklärung durch uns über selbige in Kenntnis gesetzt wurden und die Abweichung ausdrücklich und gesondert zwischen den Vertragsparteien vereinbart wurde.</p>

<p>§ 9 Rechtswahl</p>

<p>(1) Es gilt deutsches Recht. Bei Verbrauchern gilt diese Rechtswahl nur, soweit hierdurch der durch zwingende Bestimmungen des Rechts des Staates des gewöhnlichen Aufenthaltes des Verbrauchers gewährte Schutz nicht entzogen wird (Günstigkeitsprinzip).</p>

<p>(2) Die Bestimmungen des UN-Kaufrechts finden ausdrücklich keine Anwendung.</p>

<p>II. Kundeninformationen</p>

<p>1. Identität des Verkäufers</p>

<p>Benjamin Mulamisini schnitzerstraße 2 87527 Sonthofen Deutschland Telefon: +49 17685121038 E-Mail: support@bmchatai.de Beschwerdestelle des Unternehmens: Bayerisches Landesamt für Datenschutzaufsicht (BayLDA) Promenade 27 (Schloss) 91522 Ansbach Tel.: +49 981 180093-0 Fax: +49 981 180093-800 E-Mail: poststelle@lda.bayern.de Website: https://www.lda.bayern.de/</p>

<p>Alternative Streitbeilegung: Die Europäische Kommission stellt eine Plattform für die außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit, aufrufbar unter https://ec.europa.eu/odr.</p>

<p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor Verbraucherschlichtungsstellen teilzunehmen.</p>

<p>2. Informationen zum Zustandekommen des Vertrages</p>

<p>Die technischen Schritte zum Vertragsschluss, der Vertragsschluss selbst und die Korrekturmöglichkeiten erfolgen nach Maßgabe der Regelungen "Zustandekommen des Vertrages" unserer Allgemeinen Geschäftsbedingungen (Teil I.).</p>

<p>3. Vertragssprache, Vertragstextspeicherung</p>

<p>3.1. Vertragssprache ist deutsch.</p>

<p>3.2. Der vollständige Vertragstext wird von uns nicht gespeichert. Vor Absenden der Bestellung können die Vertragsdaten über die Druckfunktion des Browsers ausgedruckt oder elektronisch gesichert werden. Nach Zugang der Bestellung bei uns werden die Bestelldaten, die gesetzlich vorgeschriebenen Informationen bei Fernabsatzverträgen und die Allgemeinen Geschäftsbedingungen nochmals per E-Mail an Sie übersandt.</p>

<p>4. Verhaltenskodizes</p>

<p>4.1. Wir haben uns den Käufersiegel-Qualitätskriterien der Händlerbund Management AG (abrufbar unter https://www.haendlerbund.de/kaeufersiegel) unterworfen.</p>

<p>5. Wesentliche Merkmale der digitalen Inhalte</p>

<p>Die wesentlichen Merkmale der digitalen Inhalte finden sich im jeweiligen Angebot.</p>

<p>6. Preise und Zahlungsmodalitäten</p>

<p>6.1. Die in den jeweiligen Angeboten angeführten Preise sowie die Versandkosten stellen Gesamtpreise dar. Sie beinhalten alle Preisbestandteile einschließlich aller anfallenden Steuern.</p>

<p>6.2. Die anfallenden Versandkosten sind nicht im Kaufpreis enthalten. Sie sind über eine entsprechend bezeichnete Schaltfläche auf unserer Internetpräsenz oder im jeweiligen Angebot aufrufbar, werden im Laufe des Bestellvorganges gesondert ausgewiesen und sind von Ihnen zusätzlich zu tragen, soweit nicht die versandkostenfreie Lieferung zugesagt ist.</p>

<p>6.3. Die Ihnen zur Verfügung stehenden Zahlungsarten sind unter einer entsprechend bezeichneten Schaltfläche auf unserer Internetpräsenz oder im jeweiligen Angebot ausgewiesen.</p>

<p>6.4. Soweit bei den einzelnen Zahlungsarten nicht anders angegeben, sind die Zahlungsansprüche aus dem geschlossenen Vertrag sofort zur Zahlung fällig.</p>

<p>7. Lieferbedingungen</p>

<p>7.1. Die Lieferbedingungen, der Liefertermin sowie gegebenenfalls bestehende Lieferbeschränkungen finden sich unter einer entsprechend bezeichneten Schaltfläche auf unserer Internetpräsenz oder im jeweiligen Angebot.</p>

<p>7.2. Soweit im jeweiligen Angebot keine andere Frist angegeben ist, erfolgt die Lieferung der digitalen Inhalte innerhalb von 1-3 Tagen nach Vertragsschluss (bei vereinbarter Vorauszahlung jedoch erst nach dem Zeitpunkt Ihrer Zahlungsanweisung).</p>

<p>8. Gesetzliches Mängelhaftungsrecht</p>

<p>Die Mängelhaftung richtet sich nach der Regelung "Gewährleistung" in unseren Allgemeinen Geschäftsbedingungen (Teil I).</p>

<p>Die Mängelhaftung richtet sich nach der Regelung "Gewährleistung" in unseren Allgemeinen Geschäftsbedingungen (Teil I).</p>

<p>9. Vertragslaufzeit / Kündigung</p>

<p>Informationen zur Laufzeit des Vertrages sowie den Kündigungsbedingungen finden Sie in der Regelung "Vertragslaufzeit / Kündigung bei Abonnement-Verträgen" in unseren Allgemeinen Geschäftsbedingungen (Teil I) sowie im jeweiligen Angebot.</p>

<p>Diese AGB und Kundeninformationen wurden von den auf IT-Recht spezialisierten Juristen des Händlerbundes erstellt und werden permanent auf Rechtskonformität geprüft. Die Händlerbund Management AG garantiert für die Rechtssicherheit der Texte und haftet im Falle von Abmahnungen. Nähere Informationen dazu finden Sie unter: <a href="https://www.haendlerbund.de/de/leistungen/rechtssicherheit/agb-service">https://www.haendlerbund.de/de/leistungen/rechtssicherheit/agb-service</a>.</p>

<p>letzte Aktualisierung: 29.11.2023</p>
     
      </div>
      <Footer2/>
    </main>
  );
};

export default Home;
