import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const TopNav = () => {
  return (
    <nav className="flex items-center justify-between border-b p-4 font-bold">
      <div className="text-2xl">Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
