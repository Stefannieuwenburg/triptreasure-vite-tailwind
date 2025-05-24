export default function Services() {
  return (
    <div className="bg-gray-50 min-h-[60vh] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <div className="bg-orange-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M21 21l-6-6M3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Destination Guides</h3>
            <p className="text-gray-600 text-center">
              Discover the best places to visit, eat, and stay with our curated travel guides.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <div className="bg-orange-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 8v4l3 3M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Travel Planning</h3>
            <p className="text-gray-600 text-center">
              Get help planning your next adventure with our expert tips and personalized itineraries.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <div className="bg-orange-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Community Support</h3>
            <p className="text-gray-600 text-center">
              Join our community to share experiences, ask questions, and get support from fellow travelers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}