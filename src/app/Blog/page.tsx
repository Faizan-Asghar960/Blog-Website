import Link from "next/link";
import Navbar from "../compnent/Navbar";

const blogs = [

  {
    id: 1,
    title: "Empire State Building",
    description:
      "The Washington Monument, the Empire State Building, the Willis Tower—these buildings aren't just famous in America but recognized and beloved worldwide. Whether ",
    date: "2024-03-20",
    readTime: "5 min read",
    category: "USA Empire",
    image: "/explore1.jpg",
    slug: "empire-state-building",
  },
  {
    id: 2,
    title: "Washington Monument",
    description:
      "The Washington Monument, the Empire State Building, the Willis Tower—these buildings aren't just famous in America but recognized and beloved worldwide. Whether ",
    date: "2024-03-19",
    readTime: "7 min read",
    category: "USA Washington Monument",
    image: "/explore2.jpg",
    slug: "Washington-Monument",
  },
  {
    id: 3,
    title: "Independence Hall",
    description:
      "Independence Hall is a historic civic building in Philadelphia, where both the Declaration of Independence and the Constitution of the United States ",
    date: "2024-03-18",
    readTime: "6 min read",
    category: "Design",
    image: "/explore3.jpg",
    slug: "Independence-Hall",
  },
  {
    id: 4,
    title: "Walt Disney Concert Hall",
    description:
      "The Walt Disney Concert Hall at 111 South Grand Avenue in downtown Los Angeles, California, is the fourth hall of the Los Angeles Music Center and was designed by Frank Gehry. ",
    date: "2024-03-18",
    readTime: "7.30 min read",
    category: "Design",
    image: "/explore4.jpg",
    slug: "Walt-Disney-Concert-Hall",
  },
  {
    id: 5,
    title: "JPMorgan Chase World Headquarters",
    description:
      "Process 2020 under construction, 2023 complete, the 2025 total floor 60",
    date: "2024-03-18",
    readTime: "5.45 min read",
    category: "Building",
    image: "/explore5.jpg",
    slug: "JPMorgan-Chase-World-Headquarters",
  },
  {
    id: 6,
    title: "520 Fifth Avenue",
    description:
      "Process 2020 under construction, 2024 expected to complete in 2026",
    date: "2024-03-18",
    readTime: "8 min read",
    category: "Unique Building",
    image: "/explore6.jpg",
    slug: "520-Fifth-Avenue",
  },
  // Add more blogs here...
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
     <Navbar/>  <header className="text-center py-8">
        <h1 className="text-4xl font-bold">Featured Articles</h1>
        <p className="text-gray-400">Explore our latest stories and insights</p>
     </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-md transform hover:scale-105 hover:shadow-2xl hover:shadow-white transition-all duration-500"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-blue-400 text-sm">{blog.category}</span>
              <h2 className="text-xl font-semibold mt-2">{blog.title}</h2>
              <p className="text-gray-400 mt-1 text-sm">{blog.description}</p>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
              <Link href={`/Blog/${blog.slug}`}>
                <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
}