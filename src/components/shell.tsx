import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { BOOKING_URL, NAV } from "@/lib/site";

export const btnLook =
  "items-center justify-center rounded-full bg-loch px-6 py-3 text-sm font-semibold text-canvas transition-colors duration-200 hover:bg-ink";

export const btnPrimary = "inline-flex " + btnLook;

export const inlineLink = "font-semibold text-loch underline underline-offset-4";

export function BookLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      <div className="h-1 bg-loch" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="shrink-0 text-lg font-semibold tracking-tight text-loch" onClick={() => setOpen(false)}>
          Fingal Cottage
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={
                "text-sm font-medium " + (path === item.to ? "text-loch" : "text-ink/70 hover:text-loch")
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <BookLink className={"hidden lg:inline-flex " + btnLook}>Book now</BookLink>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full hover:bg-mist lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-line bg-canvas px-5 py-2 lg:hidden" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-4 text-base font-medium"
            >
              {item.label}
            </Link>
          ))}
          <BookLink className={btnPrimary + " my-4"}>Book now</BookLink>
        </nav>
      ) : null}
    </header>
  );
}

export function BookingCard() {
  return (
    <aside className="overflow-hidden rounded-xl border border-line bg-canvas shadow-card">
      <div className="h-1.5 bg-loch" />
      <div className="p-6">
      <p className="text-2xl font-semibold text-loch">
        From £700 <span className="text-base font-normal text-ink/60">a week</span>
      </p>
      <p className="mt-1 text-sm text-ink/60">Seasonal rates. A £100 deposit confirms the booking.</p>
      <dl className="mt-4 border-y border-line text-sm">
        <div className="flex justify-between gap-4 py-3">
          <dt className="text-ink/60">Check-in</dt>
          <dd className="font-medium">From 15:30</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-line py-3">
          <dt className="text-ink/60">Checkout</dt>
          <dd className="font-medium">By 10:30</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-line py-3">
          <dt className="text-ink/60">Damage deposit</dt>
          <dd className="font-medium">£50</dd>
        </div>
      </dl>
      <BookLink className={btnPrimary + " mt-5 w-full"}>Book now</BookLink>
      <p className="mt-3 text-center text-xs text-ink/60">Best price when you book direct.</p>
      <Link to="/pricing" className="mt-2 block text-center text-sm font-semibold text-loch underline underline-offset-4">
        View all prices
      </Link>
      </div>
    </aside>
  );
}

export function PageWithCard({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
      <div className="min-w-0">{children}</div>
      <div className="lg:sticky lg:top-24">
        <BookingCard />
      </div>
    </div>
  );
}

export function BookBanner() {
  return (
    <section className="border-t border-line bg-mist">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-semibold text-loch">Book direct</p>
          <p className="text-sm text-ink/60">Best price guarantee. A deposit of £100 confirms your stay.</p>
        </div>
        <BookLink className={btnPrimary}>Book now</BookLink>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="font-semibold text-loch">Fingal Cottage</p>
          <p className="mt-2 text-sm text-ink/60">
            Lochdon, Isle of Mull
            <br />
            PA64 6AP
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Navigation</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-ink/60 hover:text-ink hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Website information</p>
          <p className="mt-3 text-sm text-ink/60">
            Short term lettings licence AR00758F
            <br />
            EPC rating E
          </p>
          <a
            href="https://dovedesign.io"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-ink/60 underline underline-offset-4 hover:text-ink"
          >
            Website design by Dove Design
          </a>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ title, lede }: { title: string; lede: string }) {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-8">
      <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
      <div className="mt-3 h-1 w-12 rounded-full bg-loch" />
      <p className="mt-3 max-w-xl text-ink/60">{lede}</p>
    </div>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>{children}</main>
      <BookBanner />
      <SiteFooter />
    </div>
  );
}
