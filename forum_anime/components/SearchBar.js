"use client";  // Oznaczamy ten komponent jako klienta, aby użyć React Hooks

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar({ placeholder }) {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/anime?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded-md">Search</button>
    </form>
  );
}
