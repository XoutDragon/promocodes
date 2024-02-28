import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

import { LoginForm } from "./components/LoginForm";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-2 h-full">
        <div className="relative w-full h-full">
          <Image src="/hero.gif" layout="fill" alt="hero" objectFit="cover" />
        </div>
        <LoginForm />
      </main>
    </>
  );
}
