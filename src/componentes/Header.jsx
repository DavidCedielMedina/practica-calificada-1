import ButtonDark from "./ButtonDark";

export default function Header() {
  return (
    <header className="flex flex-col justify-center w-full md:flex-row md:justify-around p-2 gap-1">
      <h1 className="flex text-2xl font-serif">
        <strong>The Creative Crew</strong>
      </h1>
      <div className="flex flex-col md:w-80">
        <h3 className="font-serif">
          <strong>Who we are</strong>
        </h3>
        <p className=" font-serif">
          we are team of creatively diverse. driven. innovative individuals
          working in various locations from the world.
        </p>
      </div>
      <ButtonDark />
    </header>
  );
}
