import MainMatch from "./components/matches/MainMatch";
import SideMatches from "./components/matches/FeaturedMatches";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen font-sans dark:bg-black p-4">
        <MainMatch />
        <SideMatches />
      </div>
    </>
  );
}
