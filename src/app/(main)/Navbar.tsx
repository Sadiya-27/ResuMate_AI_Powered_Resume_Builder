"use client";

import logo from "@/assets/logo.png";
import ThemeToggle from "@/components/ThemeToggle";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { CreditCard } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <header className="shadow-md">
      <div className="mx-auto bg-blue-200 flex max-w-7xl items-center justify-between gap-3 p-4">
        <Link href="/resumes" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Logo"
            width={35}
            height={35}
            className=""
          />
          <span className="text-indigo-600 text-xl font-semibold tracking-tight">
            ResuMate
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: {
                avatarBox: {
                  width: 35,
                  height: 35,
                },
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="Billing"
                labelIcon={<CreditCard className="size-4" />}
                href="/billing"
              />
            </UserButton.MenuItems>
          </UserButton>
        </div>
      </div>
    </header>
  );
}
