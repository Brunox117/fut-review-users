export default function FeaturedMatchComponent() {
  return (
    <>
      <div className="flex flex-col max-w-xl border-b border-solid border-b-[#333333]/30 p-2">
        <h5>Liga</h5>
        <div className="flex flex-row justify-between items-center">
          <h3>Equipo local</h3>
          <h3 className="px-5">2 - 1</h3>
          <h3>Equipo visitante</h3>
        </div>
      </div>
    </>
  );
}
