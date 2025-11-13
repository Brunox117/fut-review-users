import FeaturedCommentComponent from "./FeaturedCommentComponent";

export default function FeaturedComments() {
  return (
    <>
      <aside className="lg:col-span-1">
        <div className="sticky top-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight tracking-tight px-4 pb-4">
            Latest Comments
          </h2>
          <div className="flex flex-col gap-6 border-l-2 border-border-light dark:border-border-dark pl-6">
            <FeaturedCommentComponent />
            <FeaturedCommentComponent />
            <FeaturedCommentComponent />
          </div>
        </div>
      </aside>
    </>
  );
}
