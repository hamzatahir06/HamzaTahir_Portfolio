export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-5 py-8 text-sm text-muted-foreground sm:px-8">
        <p className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded bg-primary font-mono text-[10px] text-primary-foreground">
            HT
          </span>
          © {new Date().getFullYear()} Hamza Tahir
        </p>
      </div>
    </footer>
  )
}
