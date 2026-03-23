import Link from "next/link";
import RotatingText from "../ui/rotating-text";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-20 flex-col items-center justify-between py-8 z-10 bg-background">
      {/* Top: Logo/Text aligned with navbar */}
      <div className="flex flex-col items-center pt-8">
        <div className="writing-vertical-rl text-sm font-bold uppercase tracking-wider text-foreground">
          <RotatingText
            texts={['FULL-STACK DEVELOPER', 'BACKEND DEVELOPER', 'APPLIED AI/ML ENGINEER', 'SYSTEM ARCHITECT']}
            mainClassName="text-sm font-bold text-foreground tracking-wider uppercaseoverflow-hidden py-0.5 sm:py-1 md:py-2"
            staggerFrom={"first"}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={5000}
          />
        </div>
      </div>

      {/* Vertical divider */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-300" />

      {/* Bottom: Links to portfolio-art and leostwin */}
      <div className="flex flex-col gap-6 items-center pb-8">
        {/* Dev link */}
        <Link
          href="https://leosiu.dev"
          className="text-muted-light hover:text-foreground transition-colors"
          aria-label="Dev Portfolio"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Art/Photography icon link */}
        <Link
          href="https://art.leosiu.dev"
          className="text-muted-light hover:text-foreground transition-colors"
          aria-label="Art & Photography Portfolio"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 7.70178C2 6.20963 3.20963 5 4.70178 5C5.47706 5 6.16537 4.5039 6.41053 3.7684L6.5 3.5C6.54219 3.37343 6.56329 3.31014 6.58586 3.254C6.87405 2.53712 7.54939 2.05037 8.32061 2.00366C8.38101 2 8.44772 2 8.58114 2H15.4189C15.5523 2 15.619 2 15.6794 2.00366C16.4506 2.05037 17.126 2.53712 17.4141 3.254C17.4367 3.31014 17.4578 3.37343 17.5 3.5L17.5895 3.7684C17.8346 4.5039 18.5229 5 19.2982 5C20.7904 5 22 6.20963 22 7.70178V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7.70178Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* LeoTwin link */}
        <Link
          href="#"
          className="text-muted-light hover:text-foreground transition-colors"
          aria-label="LeosTwin"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 15.8369C19.4559 16.5683 20.7041 17.742 21.6152 19.2096C21.7956 19.5003 21.8858 19.6456 21.917 19.8468C21.9804 20.2558 21.7008 20.7585 21.3199 20.9204C21.1325 21 20.9216 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9852 12 9.49996 12C7.01468 12 4.99996 9.98528 4.99996 7.5C4.99996 5.01472 7.01468 3 9.49996 3C11.9852 3 14 5.01472 14 7.5ZM2.55919 18.9383C4.1535 16.5446 6.66933 15 9.49996 15C12.3306 15 14.8464 16.5446 16.4407 18.9383C16.79 19.4628 16.9646 19.725 16.9445 20.0599C16.9289 20.3207 16.7579 20.64 16.5495 20.7976C16.2819 21 15.9138 21 15.1776 21H3.82232C3.08613 21 2.71804 21 2.4504 20.7976C2.24201 20.64 2.07105 20.3207 2.05539 20.0599C2.03529 19.725 2.20992 19.4628 2.55919 18.9383Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </aside>
  );
}

