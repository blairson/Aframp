import Link from 'next/link'
import { ArrowDownToLine, Banknote, Receipt, Wallet } from 'lucide-react'

const actions = [
  // Tints are full class strings (not interpolated) so Tailwind can detect them.
  // Each is a 15% fill with a -400 icon, which keeps >7:1 contrast on the dark panel.
  { label: 'Charge', icon: Banknote, tint: 'bg-green-500/15 text-green-400', href: '/charge' },
  { label: 'Payments', icon: Receipt, tint: 'bg-blue-500/15 text-blue-400', href: '/transactions' },
  {
    label: 'Cash out',
    icon: ArrowDownToLine,
    tint: 'bg-teal-500/15 text-teal-400',
    href: '/withdraw',
  },
  { label: 'Wallet', icon: Wallet, tint: 'bg-lime-500/15 text-lime-400', href: '/wallet' },
]

export function QuickActions() {
  return (
    <div className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:gap-5">
      {actions.map(({ label, icon: Icon, tint, href }) => (
        <Link
          key={label}
          href={href}
          className="group flex flex-col items-center gap-1.5 rounded-lg focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
        >
          <span
            className={`flex size-11 items-center justify-center rounded-full transition-transform group-hover:scale-105 ${tint}`}
          >
            <Icon className="size-5" strokeWidth={2.25} aria-hidden />
          </span>
          <span className="text-dim group-hover:text-bright text-xs">{label}</span>
        </Link>
      ))}
    </div>
  )
}
