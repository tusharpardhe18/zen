const features = [
  {
    title: "Explore a Vast Range of Products for Every Need",
    desc: "At Zen, we prioritize a smooth and enjoyable shopping experience.",
    link: "Shop",
    href: "#shop",
  },
  {
    title: "Dedicated Customer Support to Assist You Anytime",
    desc: "Our responsive customer support team is here to help you 24/7.",
    link: "Contact",
    href: "#contact",
  },
  {
    title: "Stay Updated with the Latest Trends and Offers",
    desc: "Join our newsletter to never miss out on exciting deals.",
    link: "Subscribe",
    href: "#subscribe",
  },
];

const Page1 = () => {
  return (
    <section className="bg-black text-white min-h-screen px-12 py-[10%]">
      <div>
        <h1 className="text-6xl font-bold mb-12 leading-tight">
          Experience Seamless Shopping with <br /> Our User-Friendly Interface
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 justify-around">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-start ">
            <img
              src={
                idx === 0
                  ? "/product.png"
                  : idx === 1
                  ? "/customer_support.png"
                  : "/stay.png"
              }
              alt={feature.title}
              className="w-16 h-16 mb-4 object-contain rounded"
            />
            <h2 className="text-3xl font-semibold mb-4">{feature.title}</h2>
            <p className="mb-6 text-base text-gray-200">{feature.desc}</p>
            <a
              href={feature.href}
              className="flex items-center gap-2 text-white font-medium hover:underline"
            >
              {feature.link}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page1;
