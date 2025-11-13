import FeaturedMatchComponent from "./FeaturedMatchComponent";

export default function SideMatches() {
  return (
    <>
      <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight tracking-tight px-4 pb-4">
        Other Important Matches
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeaturedMatchComponent />
        <FeaturedMatchComponent />
        <FeaturedMatchComponent />
        <FeaturedMatchComponent />
      </div>
    </>
  );
}
