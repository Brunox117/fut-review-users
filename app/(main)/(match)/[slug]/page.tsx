export default async function MatchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div>
      <h1>MatchPage</h1>
      <p>{slug}</p>
    </div>
  );
}
