import FeaturedComments from "../components/comments/FeaturedComments";
import SideMatches from "../components/matches/FeaturedMatches";
import MainMatch from "../components/matches/MainMatch";

export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 flex flex-col gap-2">
        <MainMatch />
        <SideMatches />
      </div>
      <FeaturedComments />
    </main>
  );
}
