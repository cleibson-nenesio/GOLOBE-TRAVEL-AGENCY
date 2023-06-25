"use client";

// Next
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// React
import React, { useRef, useState } from "react";

// Images
import Logo from "@/assets/images/logo.svg";
import ReverseLogo from "@/assets/images/reverse_logo.svg";

// Icons
import * as I from "@/assets/icons";

// Types
import { IHeader } from "./types";

// Components
import UserProfile from "@/components/shared/UserProfile";

const Header = ({ colorMode = "dark" }: IHeader) => {
  const menuRef: React.RefObject<HTMLDivElement> | null = useRef(null);
  const pathName = usePathname();

  const fakeUser = {
    id: 1,
    name: "John D.",
    photo:
      "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
    online: true,
  };

  const isLoggedIn = false;

  function toggleOpenMenu() {
    if (!menuRef?.current) return;

    menuRef?.current?.classList?.toggle("flex");
    menuRef?.current?.classList?.toggle("hidden");
  }

  const guestUser = [
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

  const loggedInUser = [
    {
      label: fakeUser?.name,
      path: "/user",
      icon: (
        <div className="rounded-full w-7 aspect-square bg-gray-200 mr-4 relative flex items-center justify-center">
          <Image
            src={fakeUser?.photo}
            alt={`${fakeUser?.photo} Profile Picture`}
            width={40}
            height={40}
            className="rounded-full aspect-square bg-cover bg-center"
          />
        </div>
      ),
      style: "",
    },
    {
      label: "Favourites",
      path: "/user/favourites",
      icon: <I.HeartIcon />,
      style: "",
    },
  ];

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
  ];

  if (isLoggedIn) menuItems?.push(...loggedInUser);
  if (!isLoggedIn) menuItems?.push(...guestUser);

  return (
    <header className="flex justify-between px-7 lg:px-14 2xl:px-24 py-6 sticky">
      <nav className="hidden sm:flex gap-7 text-blacklish-green">
        <Link
          className={`flex items-center gap-1 cursor-pointer font-semibold relative before:transition-all before:duration-300 before:absolute before:-bottom-6 before:h-1 before:bg-mint-green before:w-full ${
            pathName === "/flights" ? "before:opacity-100" : "before:opacity-0"
          } text-${colorMode === "dark" ? "blacklish-green" : "white"}`}
          href="/flights"
        >
          <I.PlaneIcon color={colorMode === "dark" ? "#112211" : "#FFFFFF"} />
          <span className="hidden lg:block">Find</span>
          Flight
        </Link>
        <Link
          className={`flex items-center gap-1 cursor-pointer font-semibold relative before:transition-all before:duration-300 before:absolute before:-bottom-6 before:h-1 before:bg-mint-green before:w-full ${
            pathName === "/stays" ? "before:opacity-100" : "before:opacity-0"
          } text-${colorMode === "dark" ? "blacklish-green" : "white"}`}
          href="/stays"
        >
          <I.BedIcon color={colorMode === "dark" ? "#112211" : "#FFFFFF"} />
          <span className="hidden lg:block">Find</span> Stays
        </Link>
      </nav>

      <Link href="/">
        {colorMode === "dark" && (
          <Image
            src={Logo}
            alt="Golobe Travel Agency Logo"
            width={110}
            height={36}
            priority
          />
        )}

        {colorMode === "light" && (
          <Image
            src={ReverseLogo}
            alt="Golobe Travel Agency Logo"
            width={110}
            height={36}
            priority
          />
        )}
      </Link>

      {!isLoggedIn && (
        <div className="gap-7 items-center hidden sm:flex">
          <Link
            href="/login"
            className={`font-semibold text-${
              colorMode === "dark" ? "blacklish-green" : "white"
            }`}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className={`px-5 py-3 bg-${
              colorMode === "dark" ? "blacklish-green" : "white"
            } text-${
              colorMode === "dark" ? "white" : "blacklish-green"
            } font-semibold rounded-lg`}
          >
            Sign Up
          </Link>
        </div>
      )}

      {isLoggedIn && (
        <UserProfile
          user={fakeUser}
          isDarkTheme={pathName === "/" ? false : true}
        />
      )}

      <div onClick={toggleOpenMenu} className="relative sm:hidden">
        <I.ThickMenuHamburguerIcon
          size={28}
          color={colorMode === "dark" ? "#112211" : "#FFFFFF"}
        />

        <div
          ref={menuRef}
          className="hidden flex-col w-max items-center justify-center gap-3 px-5 py-2 bg-white border-mint-green border rounded-lg absolute top-10 right-0 z-50"
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
