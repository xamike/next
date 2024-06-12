'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [name, setName] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setDisplayText('');
  };

  const handleTextAdd = () => {
    setDisplayText(name);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
  <span className="text-red-500">Nowy</span>{" "}
  <span className="text-green-500">projekt na</span>{" "}
  <span className="text-blue-500">zajęcia</span>
</h1>

      <h2 className="text-4xl font-bold mb-4">Michał Witkowski 119773</h2>
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded mr-2"
          placeholder="Wpisz tekst"
        />
        <button
          onClick={handleTextAdd}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Dodaj tekst
        </button>
      </div>
      {displayText && <p className="mb-4">{displayText}</p>}
      <Image
        src="/SA.png"
        alt="Profile"
        width={300}
        height={300}
        className="rounded-full"
      />
    </main>
  );
}
