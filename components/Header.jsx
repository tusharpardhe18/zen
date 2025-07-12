import React from "react";

const Header = () => {
  return (
    <header className="w-full min-h-screen flex items-center bg-[#0D291A] text-white px-8">
      <section className="flex w-full justify-around items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center max-w-lg gap-6 text-left">
          <h1 className="text-6xl font-bold mb-4 leading-tight">
            Discover a World <br /> of Unique <br /> Products at Zen
          </h1>
          <h5 className="text-lg font-light mb-6">
            Welcome to Zen, your ultimate shopping destination! Explore our
            curated selection of products designed to enhance your everyday
            life.
          </h5>
          <div className="flex gap-4">
            <a
              href="#shop"
              className="bg-[#2E8B57] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#276c47] transition-colors"
            >
              SHOP
            </a>
            <a
              href="#learn"
              className="border border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#0D291A] transition-colors"
            >
              LEARN MORE
            </a>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center items-center">
          <img
            src="/girl_laptop.jpg"
            alt="Zen"
            className="rounded-2xl w-[720px] h-[620px] object-cover shadow-lg"
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
