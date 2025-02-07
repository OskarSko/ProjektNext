import React from 'react';

export const metadata = {
  title: 'Kontakt',
  description: 'Skontaktuj się z twórcami forum anime.',
};

export default function Kontakt() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 rounded-lg shadow-lg bg-white">
      <p className="text-gray-600 text-center mb-4">
        Masz pytania lub sugestie? Napisz do nas, a odpowiemy tak szybko, jak to możliwe!
      </p>
      <h1 className="text-3xl font-bold mb-4">Skontaktuj się z nami</h1>
      <form action="/api/contact" method="POST" className="space-y-4">
        <div>
          <label className="block font-medium">Imię</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">E-mail</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Wiadomość</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Wyślij
        </button>
      </form>
    </div>
  );
}
