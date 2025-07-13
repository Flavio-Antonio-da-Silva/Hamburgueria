export default function Address() {
  return (
    <>
      <p className="text-black font-bold mt-7">Digite seu endereço:</p>
      <input
        type="text"
        placeholder="Digite seu endereço completo!"
        className="w-full border-gray-400 border-2 p-1 text-black rounded"
        id="address"
      />
    </>
  );
}
