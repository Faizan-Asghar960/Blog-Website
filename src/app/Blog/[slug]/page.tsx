// src/app/Blog/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import BlogComments from "@/app/compnent/comment"; // Import the BlogComments component

interface BlogDetailProps {
  params: {
    slug: string;
  };
}


interface Blog {
    id: number;
    title: string;
    description: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    content: string | string[];
    slug: string;
  }
  
  // Blogs Array (Updated slugs and uniform formatting)
  const blogs: Blog[] = [
    {
      id: 1,
      title: "Empire State Building",
      description: "A famous building in New York City.",
      date: "2024-03-20",
      readTime: "5 min read",
      category: "USA Empire",
      image: "/explore1.jpg",
      content: [   
  "The Empire State Building is an iconic skyscraper in New York City. It was completed in 1931 and held the title of the world's tallest building for nearly 40 years.",
  "The building stands 1,454 feet tall, including its antenna, and is a masterpiece of Art Deco architecture.",
  "Visitors can enjoy breathtaking views from its observatories on the 86th and 102nd floors.",
  " building in New York City, the ninth-tallest completed skyscraper in the United States,",
  " and the 57th-tallest completed skyscraper in the world.",
  "The site of the Empire State Building, on the west side of Fifth Avenue between West 33rd and 34th Streets, ",
  "was developed in 1893 as the Waldorf–Astoria Hotel. In 1929, Empire State Inc. acquired the site and devised",
  "plans for a skyscraper there. The design for the Empire State Building was changed fifteen times until it was",
  " ensured to be the world's tallest building. Construction started on March 17, 1930, and the building opened ",
  "thirteen and a half months afterward on May 1, 1931. Despite",
  "Empire State Building was New York City's tallest building until it was surpassed in 2012 by One World Trade Center. ",
  "As of 2024, the building is the seventh-tallest building in New York City,",
  " the ninth-tallest completed skyscraper in the United States, and the 57th-tallest completed skyscraper in the world.",
      ],
      slug: "empire-state-building",
    },
    {
      id: 2,
      title: "Washington Monument",
      description: "The Washington Monument is one of the most iconic landmarks in the USA.",
      date: "2024-03-19",
      readTime: "7 min read",
      category: "USA Washington Monument",
      image: "/explore2.jpg",
      content: [
       "The Washington Monument, an obelisk located in Washington, D.C., honors George Washington, the first U.S. president.",
   "Standing at 555 feet, it was the tallest man-made structure in the world when completed in 1884.",
   "Visitors can ride an elevator to the observation deck for stunning views of the capital.",
   "The Washington Monument is an obelisk on the National Mall in Washington, D.C.,",
   " built to commemorate George Washington, a Founding Father of the United States, ",
   "victorious commander-in-chief of the Continental Army from 1775 to 1783 in the American Revolutionary War,",
   " and the first president of the United States from 1789 to 1797. Standing east of the Reflecting Pool and the Lincoln",
  " Memorial,[2] the monument is made of bluestone gneiss for the foundation and of granite for the construction.[3]",
   " The outside facing consists, due to the interrupted building process, of three different kinds of white marble:[4] ",
   "in the lower third, marble from Baltimore County, Maryland, followed by a narrow zone of marble from Sheffield,",
  " Berkshire County, Massachusetts, and, in the upper part, the so-called Cockeysville Marble.",
   " Both (Maryland Marbles) came from the lost Irish Quarry Town of New Texas.[5] ,It is both the world's",
   " tallest predominantly stone structure and the world's tallest obelisk,[A] standing 554 feet 7+11⁄32 inches (169.046 m)",
    " tall, according to U.S. National Geodetic Survey measurements in 2013–2014.[B] It is the tallest monumental column",       " in the world if all are measured above their pedestrian entrances.[A] It was the world's",
     " tallest structure between 1884 and 1889, after which it was overtaken by the Eiffel Tower, in Paris. Previously,",
       " the tallest structures were Lincoln Cathedral (1311–1548; 525 ft/160 m) and Cologne Cathedral (1880–1884; 515 ft/157 m)",
  
      ],
      slug: "washington-monument",
    },
    {
      id: 3,
      title: "Independence Hall",
      description:
        "Independence Hall is a historic civic building in Philadelphia, where both the Declaration of Independence and the Constitution of the United States were signed.",
      date: "2024-03-18",
      readTime: "6 min read",
      category: "Design",
      image: "/explore3.jpg",
      content: [
        "Independence Hall is a landmark steeped in American history.",
        "The building was constructed in the Georgian style and completed in 1753.",
        "Visitors can take guided tours to learn about its historical significance.",
       " Independence Hall is a historic civic building in Philadelphia, where both the Declaration",
       " of Independence and the Constitution of the United States were debated and adopted by the Founding ",
       "Fathers of the United States. The structure, which is the centerpiece of Independence National Historical Park,",
       " was designated a World Heritage Site in 1979.[3]",
      "The construction of Independence Hall, initially called the Pennsylvania State House,",
      " was completed in 1753. It served as the first capitol of both the colonial-era of the Province",
      " of Pennsylvania and, following American independence, the nation's first capital and the capital of Pennsylvania.",
      ],
      slug: "independence-hall",
    },
    {
      id: 4,
      title: "Walt Disney Concert Hall",
      description:
        "The Walt Disney Concert Hall at 111 South Grand Avenue in downtown Los Angeles, California, is the fourth hall of the Los Angeles Music Center and was designed by Frank Gehry.",
      date: "2024-03-18",
      readTime: "7.30 min read",
      category: "Design",
      image: "/explore4.jpg",
      content: [ "Experience world-class acoustics and stunning architecture.",
    " It was opened on October 23, 2003. Bounded by Hope Street, Grand Avenue, and 1st and 2nd Streets, ",
    "it seats 2,265 people and serves, among other purposes, as the home of the Los Angeles Philharmonic orchestra",
    " and the Los Angeles Master Chorale. The hall is a compromise between a vineyard-style seating configuration,",
    " like the Berliner Philharmonie by Hans Scharoun,[2] and a classical shoebox design like the Vienna Musikverein",
    " or the Boston Symphony Hall.[3]",
    "Lillian Disney made an initial gift of $50 million in 1987 to build a performance venue as a gift to the people ",
    "of Los Angeles and a tribute to Walt Disney's devotion to the arts and to the city. Both Gehry's",
    " architecture and the acoustics of the concert hall, designed by Minoru Nagata,[4] the final completion",
    " supervised by Nagata's assistant and protege Yasuhisa Toyota,[5] have been praised, in contrast to its predecessor,",
    " the Dorothy Chandler Pavilion.[6]",
    
  
     ],
      slug: "walt-disney-concert-hall",
    },
    {
      id: 5,
      title: "JPMorgan Chase World Headquarters",
      description: "Process 2020 under construction, 2023 complete, the 2025 total floor 60",
      date: "2024-03-18",
      readTime: "5.45 min read",
      category: "Building",
      image: "/explore5.jpg",
      content: "A modern architectural marvel in New York City.",
      slug: "jpmorgan-chase-world-headquarters",
    },
    {
      id: 6,
      title: "520 Fifth Avenue",
      description: "Process 2020 under construction, 2024 expected to complete in 2026",
      date: "2024-03-18",
      readTime: "8 min read",
      category: "Unique Building",
      image: "/explore6.jpg",
      content: "An upcoming landmark building set to redefine New York's skyline.",
      slug: "520-fifth-avenue",
    },
  ];

export async function generateStaticParams() {
  // Assuming you have static generation, return the params for each blog
  return blogs.map((blog) => ({
    slug: blog.title.toLowerCase().replace(/ /g, "-"),
  }));
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const blog = blogs.find(
    (b) => b.title.toLowerCase().replace(/ /g, "-") === params?.slug?.toLowerCase()
  );

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Back to Blog Button */}
      <div className="p-4">
        <Link href="/Blog">
          <span className="text-blue-400 hover:text-blue-600 text-sm flex items-center">
            ← Back to Blog
          </span>
        </Link>
      </div>

      {/* Banner Section */}
      <div
        className="h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${blog.image})`,
        }}
      >
        <h3 className="text-4xl font-bold text-white bg-black/50 p-4">{blog.title}</h3>
      </div>

      {/* Blog Content Section */}
      <div className="max-w-4xl mx-auto p-8">
        <p className="text-gray-400">{blog.date}</p>
        <p className="text-blue-400 text-sm">{blog.category}</p>

        {/* Render paragraphs dynamically */}
        <div className="mt-4 space-y-4">
          {Array.isArray(blog.content) ? (
            blog.content.map((paragraph, index) => (
              <p key={index} className="text-gray-200">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-gray-200">{blog.content}</p>
          )}
        </div>

        {/* Comments Section */}
        <BlogComments /> {/* Use the BlogComments component here */}
      </div>
    </div>
  );
}
