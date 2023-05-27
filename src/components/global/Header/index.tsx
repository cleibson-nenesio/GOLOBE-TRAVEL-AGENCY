"use client";

// Next
import Link from "next/link";
import Image from "next/image";

// React
import React, { useRef, useState } from "react";

// Images
import Logo from "@/assets/images/logo.svg";

// Icons
import * as I from "@/assets/icons";

const Header = () => {
  const [currentFlow, setCurrentFlow] = useState<"flight" | "stays">("flight");
  const menuRef: React.RefObject<HTMLDivElement> | null = useRef(null);

  function toggleOpenMenu() {
    if (!menuRef?.current) return;

    const hiddenMenuStyles = ["h-0", "px-0", "py-0", "border-none"];
    const showMenuStyles = [
      "h-15",
      "px-5",
      "py-2",
      "border-mint-green",
      "border",
    ];

    if (menuRef?.current?.classList?.contains("h-0")) {
      menuRef?.current?.classList?.add(...showMenuStyles);
      menuRef?.current?.classList?.remove(...hiddenMenuStyles);
      return;
    }

    menuRef?.current?.classList?.remove(...showMenuStyles);
    menuRef?.current?.classList?.add(...hiddenMenuStyles);
  }

  const menuItems = [
    {
      label: "Find Flight",
      path: "/",
      icon: <I.PlaneIcon />,
      style: "",
    },
    {
      label: "Find Stays",
      path: "/",
      icon: <I.BedIcon />,
      style: "",
    },
    {
      label: "Login",
      path: "/login",
      icon: <></>,
      style: "",
    },
    {
      label: "Sign Up",
      path: "/signup",
      icon: <></>,
      style: "px-6 py-2 bg-blacklish-green text-white font-semibold rounded-lg",
    },
  ];

  return (
    <header className="flex justify-between px-7 lg:px-14 2xl:px-24 py-6 sticky">
      <nav className="hidden sm:flex gap-7 text-blacklish-green">
        <div
          className={`flex items-center gap-1 cursor-pointer font-semibold relative before:transition-all before:duration-300 before:absolute before:bottom-0 before:h-1 before:bg-mint-green before:w-full before:rounded-t-sm ${
            currentFlow === "flight" ? "before:opacity-100" : "before:opacity-0"
          }`}
          onClick={() => setCurrentFlow("flight")}
        >
          <I.PlaneIcon />
          <span className="hidden lg:block">Find</span>
          <span className="hidden sm:block">Flight</span>
        </div>
        <div
          className={`flex items-center gap-1 cursor-pointer font-semibold relative before:transition-all before:duration-300 before:absolute before:bottom-0 before:h-1 before:bg-mint-green before:w-full before:rounded-t-sm ${
            currentFlow === "stays" ? "before:opacity-100" : "before:opacity-0"
          }`}
          onClick={() => setCurrentFlow("stays")}
        >
          <I.BedIcon />
          <span className="hidden lg:block">Find</span>{" "}
          <span className="hidden sm:block">Stays</span>
        </div>
      </nav>

      <Link href="/">
        <Image
          src={Logo}
          alt="Golobe Travel Agency Logo"
          width={110}
          height={36}
          priority
        />
      </Link>

      <div className="gap-7 items-center hidden sm:flex">
        <Link href="/login" className="font-semibold text-blacklish-green">
          Login
        </Link>
        <Link
          href="/signup"
          className="px-5 py-3 bg-blacklish-green text-white font-semibold rounded-lg"
        >
          Sign Up
        </Link>
      </div>

      <div onClick={toggleOpenMenu} className="relative sm:hidden">
        <I.ThickMenuHamburguerIcon size={28} />

        <div
          ref={menuRef}
          className="flex flex-col w-max items-center justify-center gap-3 bg-white border-mint-green border rounded-lg h-0 px-0 py-0 overflow-hidden border-none absolute top-8 right-0"
        >
          {menuItems?.map((item) => (
            <Link
              href={item?.path}
              key={item?.label}
              className={`flex gap-2 text-blacklish-green font-semibold ${item?.style}`}
            >
              {item?.icon}
              {item?.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
