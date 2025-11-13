export default function FeaturedComments() {
  return (
    <>
      <aside className="lg:col-span-1">
        <div className="sticky top-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight tracking-tight px-4 pb-4">
            Latest Comments
          </h2>
          <div className="flex flex-col gap-6 border-l-2 border-border-light dark:border-border-dark pl-6">
            {/* <!-- Comment 1 --> */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  data-alt="User avatar for John Doe"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOrlrbuGJbwzELUSKkMcXMhhOmey_WT2zKyzstAR3Ya4sHCNKIHPcCq5ZA3ysIu47YQiZlP9d76yFz5qUf6C9gG5wnelV6HYsmg_-u4c4m3SC-rQEqoeMU1g4Vss6eONDI0cm9ikoAOWn7JD5JdacbrphC7pbIpKWVe8xdqxMRCL7vX-khf4JkjpqRbAUEw2_Kqw09_AlZW8LyV3hdqUjgZpfWUX6Y-QEJ3p4v1MtQdoY7ZT2EaAPkbTz4YRi2z6tWq0x3mVjz7ko"
                />
                <div>
                  <p className="font-bold">John D.</p>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                    on
                    <span className="font-semibold text-primary-muted">
                      Man Utd vs Liverpool
                    </span>
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <span className="font-bold">5.0</span>
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
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
                "An absolute classNameic! The kind of game that reminds you why
                you love football. The drama, the goals, the comeback... just
                incredible."
              </p>
            </div>
            {/* <!-- Comment 2 --> */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  data-alt="User avatar for Sarah K."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzVR2OC7QydSvKd8yYBBLnu-v043i15nRyDgX_ul7jHnT-mp0u2Cm8eKqTOjj7BHhFIxBEaPvPgkvrnN5q5CTOuYf9qAw26nEcAgn53eS6fJ0ly4ys5PvgFaATpS_Qq9xlq41a9_9f91eXi3nhR-QCGyJi8_2SnvAbJGiLUaCd5JRnWCh4sb5sWNX791jo9I3e8ZwCwtm_cWqox4k6ttxOkRFnjv43Je-WpwELUdM756o3xrS8ta3RnqG4XSIQhnjqU_jsUQAkFB4"
                />
                <div>
                  <p className="font-bold">Sarah K.</p>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                    on
                    <span className="font-semibold text-primary-muted">
                      Man City vs Arsenal
                    </span>
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <span className="font-bold">3.5</span>
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
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
                "Tactical battle as expected, but a bit of a snoozefest. Neither
                team wanted to risk losing. A draw was a fair result."
              </p>
            </div>
            {/* <!-- Comment 3 --> */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  data-alt="User avatar for Mike R."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL59ryMLCnQdBJtrSXDLbo44B6atxy4aNeA72Kz86Nb8a8M0_GdLNWUPj4OZjbQyloMF3sckkASqtznozwwH6YOCqumeP7iBN5FsMFjcXeK4UYGtWctRVrceodfxCClAPDzPYgbWjYqhvlHHy_h5nm2Mzc7mJM8PPGh5EDsa4s-Av7Gs55GbXeJyTJRti53ewhg7qHyxbO9mTMey_CA3jOL7XG7stWBXSnROhZPwtAMsVO8mmqJmJtkJmE87ccwka8Xxer1P0b8_4"
                />
                <div>
                  <p className="font-bold">Mike R.</p>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                    on
                    <span className="font-semibold text-primary-muted">
                      Bayern vs Dortmund
                    </span>
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <span className="font-bold">4.5</span>
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
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
                &quot;Der Klassiker delivered! Dortmund were immense, a huge
                statement win in Munich. Bayern look completely lost at the
                moment.&quot;
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
