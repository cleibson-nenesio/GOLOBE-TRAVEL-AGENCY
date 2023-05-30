"use client";

// Next
import Image from "next/image";
import Link from "next/link";

// React
import React, { useRef } from "react";

// Icons
import * as I from "@/assets/icons";

// Types
import { IUserProfile } from "./types";

const UserProfile = ({ user, isDarkTheme = true }: IUserProfile) => {
  const menuRef: React.RefObject<HTMLDivElement> | null = useRef(null);

  function handleOpenMenu() {
    if (!menuRef?.current) return;

    menuRef?.current?.classList?.toggle("hidden");
  }

  const userMenuItems = [
    {
      label: "My account",
      icon: <I.ProfileIcon />,
      path: "/",
    },
    {
      label: "Payments",
      icon: <I.CreditCardIcon />,
      path: "/",
    },
    {
      label: "Settings",
      icon: <I.SettingsIcon />,
      path: "/",
    },
  ];

  return (
    <div className="gap-4 items-center hidden sm:flex relative">
      <Link
        href="#"
        className={`font-semibold flex items-center gap-1 text-${
          isDarkTheme ? "blacklish-green" : "white"
        }`}
      >
        <I.HeartIcon color={isDarkTheme ? "#112211" : "#FFFFFF"} />
        Favourites
      </Link>
      <span className="h-4 w-0.5 bg-blacklish-green"></span>
      <div
        className="flex gap-2 items-center cursor-pointer relative"
        onClick={handleOpenMenu}
      >
        <div className="rounded-full w-10 aspect-square bg-gray-200 relative">
          <span className="w-3 h-3 aspect-square rounded-full bg-slamon absolute right-0 bottom-0 flex justify-center items-center">
            <I.ChevronDownIcon size={10} />
          </span>
          <Image
            src={user?.photo}
            alt={"User Profile Photo"}
            width={40}
            height={40}
            className="rounded-full aspect-square"
          />
        </div>
        <p
          className={`font-semibold text-${
            isDarkTheme ? "blacklish-green" : "white"
          }`}
        >
          {user?.name}
        </p>
      </div>
      <div
        className="absolute bg-white shadow-primary-shadow top-14 rounded-lg w-72 right-10 px-5 py-4 hidden"
        ref={menuRef}
      >
        <div className="flex items-center pb-5 gap-4">
          <div className="rounded-full w-14 aspect-square bg-gray-200 relative flex items-center justify-center">
            <Image
              src={user?.photo}
              alt={`${user?.photo} Profile Picture`}
              width={40}
              height={40}
              className="rounded-full aspect-square bg-cover bg-center"
            />
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-md leading-4">{user?.name}</p>
            <p className="font-normal">{user.online ? "Online" : "Offline"}</p>
          </div>
        </div>

        <div className="flex flex-col py-5 border-y border-y-black border-opacity-20 my-2">
          {userMenuItems?.map((item) => (
            <Link
              href={item?.path}
              key={item?.label}
              className="flex justify-between items-center py-2 px-1 rounded-lg hover:bg-slate-100"
            >
              <span className="flex gap-2 font-medium p-1">
                {item?.icon}
                {item?.label}
              </span>
              <I.ChevronRightIcon />
            </Link>
          ))}
        </div>

        <div className="flex flex-col">
          <Link
            href="/"
            className="flex justify-between items-center py-2 px-1 rounded-lg hover:bg-slate-100"
          >
            <span className="flex gap-2 font-medium p-1">
              <I.SupportIcon />
              Support
            </span>

            <I.ChevronRightIcon />
          </Link>
          <Link
            href="/"
            className="flex items-center py-2 px-1 rounded-lg hover:bg-slate-100"
          >
            <span className="flex gap-2 font-medium p-1">
              <I.LogoutIcon />
              Logout
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
