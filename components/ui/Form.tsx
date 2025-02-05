import { useState } from 'react';
export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    importantQuestion: '',
    foundUs: '',
    website: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    try {
      const response = await fetch('https://bmchatai.de/injekt.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccessMessage('E-Mail erfolgreich gesendet!');
        setFormData({
          name: '',
          email: '',
          companyName: '',
          phoneNumber: '',
          importantQuestion: '',
          foundUs: '',
          website: '',
        });
      } else {
        const errorResponse = await response.json();
        setErrorMessage(errorResponse.message || 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.');
      }
    } catch (error) {
      const errorMessage = (error as Error).message || 'Ein unbekannter Fehler ist aufgetreten.';
      setErrorMessage('Fehler beim Senden der E-Mail: ' + errorMessage);
    }
  };
  return (
    <>
      {/* Full-width heading without background */}
      <div className="w-full py-12 text-center text-white px-4 my-24">
        <h1 className="text-4xl font-bold mb-4">
          Möchten <span className="text-purple">Sie</span> erfahren, wie unsere <span className="text-purple">AI-Chatbots</span> Ihr Unternehmen <span className="text-purple">unterstützen</span> können?
        </h1>
        <p className="text-center my-4 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Füllen Sie einfach das untenstehende Formular aus, und wir melden uns innerhalb von 48 Stunden für ein kostenloses Gespräch bei Ihnen.
          <br />
          <br />
          Keine versteckten Kosten, keine Verpflichtungen, keine lästigen Verkaufsgespräche. Versprochen.
        </p>
      </div>
      {/* Form section with background color */}
      <form
        onSubmit={handleSubmit}
        className="max-w-7xl mx-auto mt-12 p-6 bg-gray-900 rounded shadow space-y-6 relative z-10"
      >
        {/* Name and Email side by side */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1">
            <label htmlFor="name" className="block mb-2 text-white">
              Name <span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Max Mustermann"
              className="border border-gray-600 p-3 rounded w-full bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="email" className="block mb-2 text-white">
              Email <span className="text-red-500">*</span>:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="max.mustermann@example.com"
              className="border border-gray-600 p-3 rounded w-full bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
        </div>
        {/* Company Name and Phone Number side by side */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1">
            <label htmlFor="companyName" className="block mb-2 text-white">
              Unternehmensname <span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Ihr Unternehmensname"
              className="border border-gray-600 p-3 rounded w-full bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="phoneNumber" className="block mb-2 text-white">
              Mobilnummer (z.B. +49 123 4567890) <span className="text-red-500">*</span>:
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+49 123 4567890"
              className="border border-gray-600 p-3 rounded w-full bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
        </div>
        {/* Important Question */}
        <div>
          <label htmlFor="importantQuestion" className="block mb-2 text-white">
            Was ist Ihre wichtigste Frage? <span className="text-red-500">*</span>:
          </label>
          <input
            type="text"
            name="importantQuestion"
            id="importantQuestion"
            value={formData.importantQuestion}
            onChange={handleChange}
            placeholder="Ihre Frage hier..."
            className="border border-gray-600 p-3 rounded w-full bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        {/* How did you find us */}
        <div>
          <label htmlFor="foundUs" className="block mb-2 text-white">
            Wie haben Sie uns gefunden? <span className="text-red-500">*</span>:
          </label>
          <input
            type="text"
            name="foundUs"
            id="foundUs"
            value={formData.foundUs}
            onChange={handleChange}
            placeholder="Google, Empfehlung, etc."
            className="border border-gray-600 p-3 rounded w-full bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        {/* Website */}
        <div>
          <label htmlFor="website" className="block mb-2 text-white">
            Ihre Website (falls vorhanden):
          </label>
          <input
            type="text"
            name="website"
            id="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://www.ihrewebsite.de"
            className="border border-gray-600 p-3 rounded w-full bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        {/* Submit button with full width */}
        <button type="submit" className="bg-blue-500 text-white p-3 rounded w-full">
          Absenden
        </button>
        {/* Success and Error Messages */}
        {successMessage && <div className="text-green-500 mt-4">{successMessage}</div>}
        {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
      </form>
    </>
  );
}