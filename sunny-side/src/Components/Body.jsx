import React from 'react'

export default function Body() {
  return (
    <div className="grid grid-cols-1 mt-24 md:grid-cols-2 auto-rows-auto md:mt-8 lg:mt-40 xl:mt-96 pt-10 w-full 2xl:pt-72 2xl:mt-44">
      {/* ---------- TRANSFORM YOUR BRAND ------------ */}
      <img
        src="./images/mobile/image-transform.jpg"
        alt="egg"
        className=" md:hidden"
      />

      <div className="bg-white">
        <div className="pt-10 pb-5 px-6 md:px-10 md:pb-3 md:pt-3 lg:px-20 lg:pt-20 lg:pb-5 xl:pt-44 ">
          <h1 className="font-fraunces font-bold text-center text-4xl tracking-wide lg:text-left lg:w-96 text-desBlue ">
            Transform your brand
          </h1>
          <p className="text-center pt-8 font-barlow px-6 lg:px-0 lg:pr-14 xl:pr-36 text-grayishBlue text-md lg:text-left">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>

          <div className="text-center">
            <button className="uppercase font-fraunces pt-8 border-b-8 border-yellow-200 rounded font-bold tracking-wide text-desBlue">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <img
        src="./images/desktop/image-transform.jpg"
        alt="egg"
        className="hidden md:flex w-full"
      />

      {/* ----------- STANDOUT ------------ */}
      <img
        src="./images/mobile/image-stand-out.jpg"
        alt="cup"
        className="md:hidden"
      />

      <img
        src="./images/desktop/image-stand-out.jpg"
        alt="cup"
        className="hidden md:flex w-full"
      />
      <div className="bg-white">
        <div className="pt-10 pb-5 px-6 md:pb-3 md:pt-3 lg:pt-16 lg:pb-5 lg:px-20 xl:pt-44">
          <h1 className="font-fraunces font-bold text-center text-4xl tracking-wide lg:text-left lg:w-full text-desBlue ">
            Stand out to the right audience
          </h1>
          <p className="text-center pt-8 font-barlow px-6 lg:px-0 lg:pr-14 xl:pr-36 text-grayishBlue text-md lg:text-left">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>

          <div className="text-center">
            <button className="uppercase font-fraunces pt-8 border-b-8 border-softRed rounded font-bold tracking-wide text-desBlue">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* ----------- PHOTOS ------------ */}
      <div>
        <img
          src="./images/mobile/image-graphic-design.jpg"
          alt="graphic design"
          className="md:hidden"
        />
        <img
          src="./images/desktop/image-graphic-design.jpg"
          alt="graphic design"
          className="hidden md:flex w-full"
        />
        <div className="-mt-48 pb-14 px-4 text-center md:-mt-36 lg:-mt-40 xl:-mt-48">
          <h1 className="pb-3 font-fraunces font-bold text-desBlue text-2xl">
            Graphic Design
          </h1>
          <p className="text-desBlue leading-7 font-barlow xl:px-32">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>
      </div>
      <div>
        <img
          src="./images/mobile/image-photography.jpg"
          alt="photography"
          className="md:hidden"
        />

        <img
          src="./images/desktop/image-photography.jpg"
          alt="photography"
          className="hidden md:flex w-full"
        />

        <div className="-mt-48 pb-14 px-4 text-center md:-mt-36 lg:-mt-40 xl:-mt-48">
          <h1 className="pb-3 font-fraunces font-bold text-desBlue text-2xl">
            Photography
          </h1>
          <p className="text-desBlue leading-7 font-barlow xl:px-32 ">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
}

