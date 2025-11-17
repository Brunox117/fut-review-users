import FeaturedComments from "../components/comments/FeaturedComments";
import SideMatches from "../components/matches/FeaturedMatches";
import MainMatch from "../components/matches/MainMatch";

export default function Home() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-8 md:px-8 lg:px-20 xl:px-40 flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1">
              <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 flex flex-col gap-2">
                  <MainMatch />
                  <SideMatches />
                </div>
                <FeaturedComments />
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
