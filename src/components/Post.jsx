export default function Post() {
  // Example posts array (8 posts)
  const posts = [
    {
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      date: "May 14, 2020",
      title: "Far far away, behind the word mountains",
      desc: "Vokalia and Consonantia, there live the blind texts. Separated they live.",
      link: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      date: "June 2, 2020",
      title: "Exploring the hidden beaches",
      desc: "Discover the most beautiful and secluded beaches around the world.",
      link: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      date: "July 19, 2020",
      title: "A journey through the mountains",
      desc: "Experience breathtaking views and adventures in the mountains.",
      link: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      date: "August 5, 2020",
      title: "City lights and urban nights",
      desc: "The best cities to visit for nightlife and culture.",
      link: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=400&q=80",
      date: "September 10, 2020",
      title: "Tastes of the world",
      desc: "A culinary adventure through different countries and cultures.",
      link: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      date: "October 22, 2020",
      title: "Wildlife encounters",
      desc: "Get close to nature and meet amazing animals in their habitats.",
      link: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      date: "November 15, 2020",
      title: "Historic landmarks",
      desc: "Step back in time and explore the world's most iconic landmarks.",
      link: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      date: "December 1, 2020",
      title: "Winter wonderlands",
      desc: "Travel to the most magical winter destinations.",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <p className="text-lg font-bold text-indigo-900 mb-1">
                {post.title}
              </p>
              <p className="text-gray-700 text-sm mb-4 flex-1">{post.desc}</p>
              <a
                href={post.link}
                className="text-orange-500 text-sm font-semibold hover:underline mt-auto"
              >
                Read More &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}