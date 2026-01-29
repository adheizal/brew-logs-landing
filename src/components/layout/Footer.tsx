export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Brew Logs
          </div>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-zinc-600 hover:text-zinc-900">
              Contact
            </a>
            <a href="#" className="text-zinc-600 hover:text-zinc-900">
              Privacy
            </a>
            <a href="#" className="text-zinc-600 hover:text-zinc-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
