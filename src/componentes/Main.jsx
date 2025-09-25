export default function Main({ name, src, job, alt }) {
  return (
    <div className="flex sm:even:pt-20 md:even:pt-0 justify-center">
      <div className="flex flex-col  h-full">
        <img
          className="h-[220px]  sm:h-[270px] w-[200px]"
          src={src}
          alt={alt}
        />
        <h3>
          <strong>{name}</strong>
        </h3>
      </div>
      <h3 className="font-serif" style={{ writingMode: "vertical-rl" }}>
        {job}
      </h3>
    </div>
  );
}