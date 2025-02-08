export default function SearchBar({ placeholder }) {
    return (
      <div className="my-4">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
    );
  }
  