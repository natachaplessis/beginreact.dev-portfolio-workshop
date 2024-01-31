import { FULL_NAME } from "../../lib/config";

export const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center lg:max-w-[80%] m-auto md:flex-row">
      <img
        width={300}
        height={300}
        src="/images/avatar1.jpg"
        alt="avatar"
        className="rounded shadow-lg md:absolute right-[8%]"
      />
      {/* Hero - Exercise*/}
      <div className="flex flex-col items-center gap-4 md:items-start">
        {/* Hero - Exercise*/}
        <h1 className="md:max-w-[80%] text-6xl drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)] md:text-8xl text-center md:text-start">
          I'm{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {FULL_NAME}
          </span>
        </h1>
        <p className="md:max-w-[50%] text-xl text-center md:text-justify">
          <b>Apprenti React.</b> I’m a software developer that make thing on
          internet, very happy to see your here, place holder please fill
          something here please fill something here.
        </p>
      </div>
    </div>
  );
};
