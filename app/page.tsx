import MainMatch from "./components/matches/MainMatch";
import SideMatches from "./components/matches/FeaturedMatches";
import FeaturedComments from "./components/comments/FeaturedComments";

export default function Home() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1">
              <main className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 flex flex-col gap-8">
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
