import FeaturedMatchComponent from "./FeaturedMatchComponent";

export default function SideMatches() {
  return (
    <>
      <div className="flex flex-col max-w-xl">
        <h1 className="text-2xl font-bold">Partidos destacados</h1>
        <div className="flex flex-col p-2">
          <FeaturedMatchComponent />
          <FeaturedMatchComponent />
          <FeaturedMatchComponent />
        </div>
      </div>
    </>
  );
}
