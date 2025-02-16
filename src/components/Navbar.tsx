import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import DasboardBtn from "./DasboardBtn";

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-background">
      <div className="flex h-16 items-center px-6 container mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
        >
          <span className="bg-primary bg-clip-text text-transparent">
            NextRound
          </span>
        </Link>

        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DasboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
