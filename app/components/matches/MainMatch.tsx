export default function MainMatch() {
  return (
    <>
      <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight tracking-tight px-4 pb-4">
        Match of the Day
      </h2>
      <div className="bg-white/50 dark:bg-black/20 rounded-xl shadow-sm border border-border-light dark:border-border-dark p-4 @container">
        <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start gap-6">
          <div
            className="w-full @xl:w-1/2 bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
            data-alt="Action shot from the Manchester United vs Liverpool FA Cup match"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJiOnlgV_Ib5klV2XggKHZMP6kfav7Ql1DS_-6gyS4T4fDZOl1AO7G1oyas2n94PelseXjlEFNaoWl55xyj69JKmJLDkZjtkzcwEutBLUPhw9qNH2tP-gWKF0mvYb_3w-_fHE9wdhmXjSRJwau943kAn7IS8TmuX7u0pjKZWPvZx1QDRNCYO-5ZKagDtlT41CyO-mtsPtH5eJyeMWvIfrZk3WwFmQodQNwlHNoAhSRYPkRmUwUx0D_DrCnCtViZTQ6yDQdG2Uo9Z0')",
            }}
          ></div>
          <div className="flex w-full @xl:w-1/2 min-w-72 grow flex-col items-stretch justify-center gap-2">
            <p className="text-primary-muted text-sm font-bold uppercase tracking-wider">
              FA CUP QUARTER-FINAL
            </p>
            <p className="font-headline text-2xl font-bold leading-tight">
              Manchester United 4 - 3 Liverpool
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-relaxed">
                A dramatic extra-time winner from Amad Diallo sends United to
                the FA Cup semi-finals in a modern classNameic at Old Trafford
                that will be remembered for years.
              </p>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal">
                Possession: 48% - 52% | Shots on Target: 8 - 11
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-6 pt-4 border-t border-border-light dark:border-border-dark">
                <div className="flex flex-col gap-2">
                  <p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-tighter">
                    4.8
                  </p>
                  <div className="flex gap-0.5">
                    <div className="text-primary">
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: 18,
                          fontVariationSettings: "'FILL' 1",
                        }}
                      >
                        star
                      </span>
                    </div>
                    <div className="text-primary">
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: 18,
                          fontVariationSettings: "'FILL' 1",
                        }}
                      >
                        star
                      </span>
                    </div>
                    <div className="text-primary">
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: 18,
                          fontVariationSettings: "'FILL' 1",
                        }}
                      >
                        star
                      </span>
                    </div>
                    <div className="text-primary">
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: 18,
                          fontVariationSettings: "'FILL' 1",
                        }}
                      >
                        star
                      </span>
                    </div>
                    <div className="text-primary">
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: 18,
                          fontVariationSettings: "'FILL' 1",
                        }}
                      >
                        star_half
                      </span>
                    </div>
                  </div>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">
                    1,284 reviews
                  </p>
                </div>
                <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
                  <p className="text-text-light dark:text-text-dark text-sm font-normal">
                    5
                  </p>
                  <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                    <div
                      className="rounded-full bg-primary"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal text-right">
                    85%
                  </p>
                  <p className="text-text-light dark:text-text-dark text-sm font-normal">
                    4
                  </p>
                  <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                    <div
                      className="rounded-full bg-primary"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal text-right">
                    10%
                  </p>
                  <p className="text-text-light dark:text-text-dark text-sm font-normal">
                    3
                  </p>
                  <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                    <div
                      className="rounded-full bg-primary"
                      style={{ width: "3%" }}
                    ></div>
                  </div>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal text-right">
                    3%
                  </p>
                  <p className="text-text-light dark:text-text-dark text-sm font-normal">
                    2
                  </p>
                  <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                    <div
                      className="rounded-full bg-primary"
                      style={{ width: "1%" }}
                    ></div>
                  </div>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal text-right">
                    1%
                  </p>
                  <p className="text-text-light dark:text-text-dark text-sm font-normal">
                    1
                  </p>
                  <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                    <div
                      className="rounded-full bg-primary"
                      style={{ width: "1%" }}
                    ></div>
                  </div>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal text-right">
                    1%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
