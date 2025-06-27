export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-300 text-white">
      <img
        src="/liblogo.png"
        alt="Loading..."
        className="w-72 mb-6"
      />
      <p className="text-xl font-semibold animate-pulse">Loading...</p>
    </div>
  );
}
