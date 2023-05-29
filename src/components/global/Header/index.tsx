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

const Header = ({ colorMode = "dark" }: IHeader) => {
  const menuRef: React.RefObject<HTMLDivElement> | null = useRef(null);
  const pathName = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  function toggleOpenMenu() {
    if (!menuRef?.current) return;

    menuRef?.current?.classList?.toggle("flex");
    menuRef?.current?.classList?.toggle("hidden");
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

  const userMenuItems = [
    {
      label: "My account",
      icon: <I.ProfileIcon />,
      path: "/",
    },
    {
      label: "Payments",
      icon: <></>,
      path: "/",
    },
    {
      label: "Settings",
      icon: <></>,
      path: "/",
    },
  ];

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
        <div className="gap-4 items-center hidden sm:flex">
          <Link
            href="#"
            className={`font-semibold flex items-center gap-1 text-${
              colorMode === "dark" ? "blacklish-green" : "white"
            }`}
          >
            <I.HeartIcon color={colorMode === "dark" ? "#112211" : "#FFFFFF"} />
            Favourites
          </Link>
          <span className="h-4 w-0.5 bg-blacklish-green"></span>
          <div className="flex gap-2 items-center cursor-pointer relative">
            <div className="rounded-full w-10 aspect-square bg-gray-200 relative">
              <span className="w-3 h-3 aspect-square rounded-full bg-slamon absolute right-0 bottom-0 flex justify-center items-center">
                <I.ChevronDownIcon size={10} />
              </span>
              <Image
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg=="
                }
                alt={"User Profile Photo"}
                width={40}
                height={40}
                className="rounded-full aspect-square"
              />
            </div>
            <p
              className={`font-semibold text-${
                colorMode === "dark" ? "blacklish-green" : "white"
              }`}
            >
              John D.
            </p>

            <div className="absolute bg-white shadow-primary-shadow top-14 rounded-lg w-72 right-1/2 p-7">
              <div className="flex items-center gap-4 pb-5 border-b border-black border-opacity-20">
                <div className="rounded-full w-14 aspect-square bg-gray-200 relative flex items-center justify-center">
                  <Image
                    src={
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg=="
                    }
                    alt={"User Profile Photo"}
                    width={40}
                    height={40}
                    className="rounded-full aspect-square bg-cover bg-center"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="font-semibold text-md leading-4">John Doe.</p>
                  <p className="font-normal">Online</p>
                </div>
              </div>

              <div className="flex flex-col pt-5 my-2">
                {userMenuItems?.map((item) => (
                  <Link
                    href={item?.path}
                    key={item?.label}
                    className="flex justify-between"
                  >
                    <span className="flex gap-2 text-md font-medium p-1">
                      {item?.icon}
                      {item?.label}
                    </span>
                    a
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
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
