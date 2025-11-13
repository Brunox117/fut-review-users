import FeaturedMatchComponent from "./FeaturedMatchComponent";

export default function SideMatches() {
  return (
    <>
      <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight tracking-tight px-4 pb-4">
        Other Important Matches
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/50 dark:bg-black/20 rounded-xl shadow-sm border border-border-light dark:border-border-dark p-4 flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1">
          <p className="text-primary-muted text-xs font-bold uppercase tracking-wider">
            PREMIER LEAGUE
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                className="h-8 w-8"
                data-alt="Manchester City Crest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASnDgcH8L2iUIxLuY9XyqV4J0pTYQVo2elvwJcVNS95WUdYrkXASjZTjvyRehnOIrVCzaxGkMXj8cexYNMKHHOv-BoHadBy6MyinKh2j0H3IspH9F1TC7aUpMjocNV1Oye4aw7zlVdcwxcokbWqZt5zGJdMHtHub3Xqg4Gf9XPVWD08L9loibxoMXdcQnHfgpx8qjIYRgGZDhZmXVDQW4kWspKFNjjMLxqLiCBkTeJ4E0ZHs0zcElv_fwTpl7NVSmSU4TX6hNMjGg"
              />
              <span className="font-bold">Man City</span>
            </div>
            <span className="font-black text-2xl">1 - 1</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                className="h-8 w-8"
                data-alt="Arsenal Crest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1evFVueXSx2Y7mxCia-7lYGeHQkkwkmRAAT0MtBiLZmp7PS0aDPUihfTrWwcfBYBZUaXLJjR3hvOxTEzPr2tbe6gJIth3O8uqalfCT6iKMd5a2xp7BRsPmG60ERoO8yqek2wqbg6PgUpj54jgMA2JRkBLdWQZLLEQLjHSFliuWCqdiKZP6f3bn_99r0v-xCq6q1UOr76lgzPJWIpGa6xP3fDagpDMbe5559XWpoBXusPciTomxWCZ1yruSvGNab1BAnfDwMDNgso"
              />
              <span className="font-bold">Arsenal</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-text-muted-light dark:text-text-muted-dark">
              <span>4.1</span>
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
            MARCH 31, 2024
          </p>
        </div>
        {/* <!-- Card 2 --> */}
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
        {/* <!-- Card 3 --> */}
        <div className="bg-white/50 dark:bg-black/20 rounded-xl shadow-sm border border-border-light dark:border-border-dark p-4 flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1">
          <p className="text-primary-muted text-xs font-bold uppercase tracking-wider">
            LA LIGA
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                className="h-8 w-8"
                data-alt="Real Madrid Crest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnjixPJIIxqYRjmQbr8w4pLHt6UgiB2IcCsJv8wZLsmQaH3-CRvn7n7UWzblUjg0_NzdRzyQGADPLIpP5fI8kATZSP3kbBoPpX65ppZhBPsOkqera7Xp9mMjRbWTDoxEr0cD6galTLr_2Sa3Z-WLADTHE1cbjtJxY_6OdGOAXLPVeklJ8SStESagNUaCXFvckMVc9814FstulofQvDKRLeMSvMXmNaBNuVicJZreNokeFI4TA-uFKCGVsFX3B_JkFC_nRYJ1laA10"
              />
              <span className="font-bold">Real Madrid</span>
            </div>
            <span className="font-black text-2xl">2 - 0</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                className="h-8 w-8"
                data-alt="Athletic Bilbao Crest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_8i3x7sb40iQ2QLQul5pJdPftgvBb8KaG3pNb0r6jQ64oTN0oULE2WcUcUy5SkHLWMDt_t7S_3MPWY1C0tpy0WdXbsqK5FDwBL4EzFljVzYRp7SxAAjjCSL-ILf3ACmFjnBoBQ_oCUJorPC602nZkPFU0eZIdmPPTZ0hw1367pQnDMGAxM9oOt-QcR-tpBSdJr7U92_hRKEp1yyWJZCsqKX32c0Sgwd4VRPplPQA15dRmb7p-6wooZe8FsE4kIIt8pD2kI1n9pRQ"
              />
              <span className="font-bold">Athletic Club</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-text-muted-light dark:text-text-muted-dark">
              <span>3.8</span>
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
            MARCH 31, 2024
          </p>
        </div>
        {/* <!-- Card 4 --> */}
        <div className="bg-white/50 dark:bg-black/20 rounded-xl shadow-sm border border-border-light dark:border-border-dark p-4 flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1">
          <p className="text-primary-muted text-xs font-bold uppercase tracking-wider">
            LIGUE 1
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                className="h-8 w-8"
                data-alt="Marseille Crest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_kKSYak8NapkqTsMm5I3mR2Hm2mt7flhFIb0lMY87UM5T61xX1dy9Nz_MvCHLLeU9bUe0i5_uPllhJ-LZSyP2UNPMxB9iOPdb8YLLEdNyGDcvvo1TQomHF_R3ZJ7c3ejlWfaI9epnFPTPiC81BVMyDXNyey_5xQVXH-euPsZlHelA47xm5hjwqPskBnDU__bYq28UAYFjAhK6XQd0uTuFwjnX19Z9XqM2kB3dlPBCcJ0eZYpmzzS5SmRrcxG1OUu_VqhYYm1eyPI"
              />
              <span className="font-bold">Marseille</span>
            </div>
            <span className="font-black text-2xl">0 - 2</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                className="h-8 w-8"
                data-alt="Paris SG Crest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDinNe_m-hpcZPuuY5r7uzJ7LeGJV74GSMUVIeQQf7shvWNhcpL7fznGO3lr3sCLBlDfzmvxbCNuD_7Fv6Meyu4bSXREPNEc2zXtLSr-u-ykE5_FI-nKVD1HQipivkN6v8c7a7WjLuRDGqUg56IMhQ4WoczyTOPc0-Lp0xa1KWrQi5Jm8a4_T_m9J533Tpq3-dShYqKDdX1_ASTbaEIe5-PCDVE5yhqb6kmvcv9Q0zs2cUZXCVjZdWjL5RbXVm4H_NlEaR0VtiP0L4"
              />
              <span className="font-bold">PSG</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-text-muted-light dark:text-text-muted-dark">
              <span>4.2</span>
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
            MARCH 31, 2024
          </p>
        </div>
      </div>
    </>
  );
}
