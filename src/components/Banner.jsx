export default function Banner() {
  return (
    <div
      className="bg-cover bg-center min-h-[50vh] flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="container mx-auto bg-white/70 rounded-xl">
        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Welcome to My Travel Blog TripTreasure
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Join me on my adventures around the world!
          </p>
        </div>
      </div>
    </div>
  );
}