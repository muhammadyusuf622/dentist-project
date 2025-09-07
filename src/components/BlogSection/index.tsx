import FadeInSection from "../FadeInSection";


function BlogSection() {
  const blogPosts = [
    {
      category: "INVISALIGN",
      categoryColor: "bg-green-400",
      title:
        "Invisalign qanday ishlaydi: Invisalign jarayoni bo'yicha bosqichma-bosqich qo'llanma",
      description:
        "Invisalign qanday ishlashiga qiziqasizmi? Bizning keng qamrovli qo'llanmamiz dastlabki maslahatlashuvdan tortib yakuniy natijalargacha bilishingiz kerak bo'lgan hamma narsani o'z ichiga oladi.",
      image: "/dental-aligners-invisalign-teal-background.jpg",
      link: "#",
    },
    {
      category: "ORAL HEALTH",
      categoryColor: "bg-orange-400",
      title:
        "Dental Map Kayl va Xuttodagi ikkita yangi zamonaviy stomatologiya studiyasi bilan Texasdagi borligini kengaytirmoqda!",
      description:
        "Dental Map-ning Kayl va Xutto-ga kengayishi Texasdagi og'iz bo'shlig'i sog'lig'i uchun o'zgaruvchan lahzani anglatadi.",
      image: "/modern-dental-office-interior-with-swish-branding.jpg",
      link: "#",
    },
    {
      category: "ORAL HEALTH",
      categoryColor: "bg-fuchsia-600",
      title: "Tish cho'tkasini qanchalik tez-tez almashtirishim kerak?",
      description:
        "Tish cho'tkasini har 3-4 oyda o'zgartirishingiz kerak. Tish cho'tkasini o'zgartirish bo'yicha ADA tavsiyalari va bu sizning tish salomatligingizga qanday ta'sir qilishi haqida ko'proq bilib oling.",
      image: "/colorful-toothbrushes-pink-orange-purple.jpg",
      link: "#",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeInSection>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-600 mb-2 tracking-wide">
              Yorqin tabassumlarni yaratish
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-green-950 text-balance">
              Dental Map Tabassum Blog
            </h2>
          </div>
        </FadeInSection>

        {/* Blog Posts Grid */}
        <FadeInSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-tr-[100px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Image */}
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <span className="inline-block text-xs font-semibold text-gray-600 tracking-wider uppercase mb-3">
                    {post.category}
                    <div
                      className={`${post.categoryColor} w-full h-1 rounded-full`}
                    ></div>
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-green-950 mb-3 leading-tight text-balance">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 text-pretty">
                    {post.description}
                  </p>

                  {/* Read More Link */}
                  <a
                    href={post.link}
                    className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-teal-600 transition-colors duration-200 group"
                  >
                    Postni o'qing
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </FadeInSection>

        {/* CTA Button */}
        <FadeInSection>
          <div className="text-center">
            <button className="bg-teal-400 hover:bg-teal-500 text-white font-medium px-8 py-3 rounded-tr-4xl rounded-bl-4xl transition-colors duration-200 shadow-sm hover:shadow-md">
              Barcha blog xabarlarini o'rganing
            </button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export default BlogSection;