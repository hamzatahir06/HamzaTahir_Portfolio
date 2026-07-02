export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded bg-primary font-mono text-[10px] text-primary-foreground">
            HT
          </span>
          © {new Date().getFullYear()} Hamza Tahir
        </p>
        <p>Built with Next.js, Tailwind CSS &amp; Framer Motion.</p>
      </div>
    </footer>
  )
}
