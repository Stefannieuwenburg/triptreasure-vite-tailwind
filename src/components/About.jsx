export default function About() {
  return (
    <div className="bg-white min-h-[60vh] py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">About TripTreasure</h2>
        <p className="text-gray-700 text-lg mb-4 text-center">
          Welcome to TripTreasure! We are passionate travelers dedicated to sharing the best travel tips, guides, and inspiration for your next adventure.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to help you discover amazing destinations, plan unforgettable trips, and connect with a community of fellow explorers. Whether you’re a seasoned globetrotter or planning your first journey, TripTreasure is here to support you every step of the way.
        </p>
        <p className="text-gray-600 mb-4">
          On our blog, you’ll find destination guides, travel planning resources, and stories from around the world. We believe travel is for everyone and strive to make it accessible, enjoyable, and memorable.
        </p>
        <div className="mt-8 text-center">
          <span className="inline-block bg-orange-100 text-orange-500 px-6 py-2 rounded-full font-semibold">
            Thank you for being part of our journey!
          </span>
        </div>
      </div>
    </div>
  );
}