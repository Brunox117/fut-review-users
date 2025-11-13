export default function FeaturedCommentComponent() {
  return (
    <>
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
          &quot;An absolute classNameic! The kind of game that reminds you why
          you love football. The drama, the goals, the comeback... just
          incredible.&quot;
        </p>
      </div>
    </>
  );
}
