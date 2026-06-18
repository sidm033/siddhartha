'use client'

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-white/60">
            <span className="text-brand-primary">S</span>M
          </span>
          <span className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Siddhartha Mukherjee
          </span>
        </div>
        <p className="text-xs text-white/20">
          Designed & engineered with precision
        </p>
      </div>
    </footer>
  )
}
