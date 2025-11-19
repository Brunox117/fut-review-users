import Navbar from "../components/shared/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col overflow-x-hidden">
        <div className="flex flex-col">
          <div className="px-4 sm:px-8 lg:px-20 flex justify-center">
            <div className="flex flex-col w-full max-w-7xl">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
