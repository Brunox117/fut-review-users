export default function FeaturedMatchComponent() {
  return (
    <>
      <div className="bg-white/50 dark:bg-black/20 rounded-xl shadow-sm border border-border-light dark:border-border-dark p-4 flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1">
        <p className="text-primary-muted text-xs font-bold uppercase tracking-wider">
          BUNDESLIGA
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              className="h-8 w-8"
              data-alt="Bayern Munich Crest"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjxuTOtEpLsA55P7VCDNhdGJE-So5Ji97mVwpLV24fn9_2bB6eThkNtJOgfuOqes521Q5M81zIG6vvmuyp96YwJinJmNGjxcULtYa2-4_2TPw1Wtu7zcBBHswyGGJHVzcxf3bb3fzOb60BmO0htYex-notr4YSjBE5yXupQoPp7JD93KJZXQw_5JwVqzpI3awyq4t6SmkUxJmD_zBYZ55HhnufPkfH2_Zkm1h2wZwTJA5CzJS55xDxuFEpzXn1HXzoloJN99Wn5O0"
            />
            <span className="font-bold">Bayern</span>
          </div>
          <span className="font-black text-2xl">0 - 2</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              className="h-8 w-8"
              data-alt="Borussia Dortmund Crest"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEgze-igMyQM7o99TdW2ewuvewAFFgyP1N3gjhppfgO4KxMIwEYHS8HO-L6Bh_7WxPnl0QGOBDzOTnDbTA2anmLudfodJnNkpWUBn7ycxqecV5T6WmzdFhdkQaFhY7PSnmAwyXcXhcvNNnh6r-eVl3-InRr7TpbQ4u2wRFWcfRApIYQEpcIrDAWUyOfceZT9FOi3RZHR28v-1aje84XHwRRyQRI77xJ6NluDiYWBopHNZDW6hAm4Q4R_UHoq7OFMGjHryJbxNV0yA"
            />
            <span className="font-bold">Dortmund</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-text-muted-light dark:text-text-muted-dark">
            <span>4.5</span>
            <div className="text-primary">
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 16,
                  fontVariationSettings: "'FILL' 1",
                }}
              >
                star
              </span>
            </div>
          </div>
        </div>
        <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
          MARCH 30, 2024
        </p>
      </div>
    </>
  );
}
