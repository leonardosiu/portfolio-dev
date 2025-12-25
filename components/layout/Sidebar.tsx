import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-20 flex-col items-center justify-between py-8 z-10 bg-background">
      {/* Top: Logo/Text aligned with navbar */}
      <div className="flex flex-col items-center pt-8">
        <div className="writing-vertical-rl text-sm font-bold uppercase tracking-wider text-foreground">
          SYSTEM ARCHITECT
        </div>
      </div>

      {/* Vertical divider */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-300" />

      {/* Bottom: Links to portfolio-art and leostwin */}
      <div className="flex flex-col gap-6 items-center pb-8">
        {/* Art/Photography icon link */}
        <Link
          href="/portfolio-art"
          className="text-muted-light hover:text-foreground transition-colors"
          aria-label="Art & Photography Portfolio"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0v1.5a3 3 0 01-3 3h-3a3 3 0 01-3-3v-1.5m9 0h-9"
            />
          </svg>
        </Link>

        {/* LeoTwin link */}
        <Link
          href="/leostwin"
          className="text-muted-light hover:text-foreground transition-colors"
          aria-label="LeoTwin"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
        </Link>
      </div>
    </aside>
  );
}

