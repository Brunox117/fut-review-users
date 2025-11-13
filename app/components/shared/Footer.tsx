export default function Footer() {
  return (
    <>
      <footer className="mt-16 pt-8 border-t border-border-light dark:border-border-dark flex flex-col sm:flex-row items-center justify-between text-sm text-text-muted-light dark:text-text-muted-dark">
        <p>© 2024 Matchday Review. All rights reserved.</p>
        <div className="flex items-center gap-6 mt-4 sm:mt-0">
          <a className="hover:text-primary-muted" href="#">
            About
          </a>
          <a className="hover:text-primary-muted" href="#">
            Contact
          </a>
          <a className="hover:text-primary-muted" href="#">
            Terms of Service
          </a>
        </div>
      </footer>
    </>
  );
}
