/* eslint-disable react/jsx-no-undef */
"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import { useState } from "react";
import logo from "../../../../public/images/logo.png";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="fixed z-[100] backdrop-blur-sm w-full">
      <header className="">
        <nav className="flex w-full items-center justify-around bg-0 sm:mb-0">
          {/* Logo  */}
          <Link href={"/"} className="flex xs:hidden md:block">
            <Image src={logo} alt="logo" height={50} width={50} />
          </Link>
          {/* Navgation  */}

          <div className="flex xs:hidden lg:block w-2/4 pl-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Home  */}

                <NavigationMenuItem className="bg-transperent inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent/50">                 
                    <Link href={"/"}>Home</Link>
                </NavigationMenuItem>

                {/* About Us  */}

                <NavigationMenuItem className="hover:bg-transparent w-32">
                  <NavigationMenuTrigger className="bg-transparent hover:bg-tranparent w-32">
                    <Link href={"/about"} className="flex flex-row">
                      About Us
                      <ChevronDown
                        className="relative top-[4px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                        aria-hidden="true"
                      />
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-2 md:w-[300px] lg:w-[300px] bg-white">
                      <li className="">
                        <Link href={"/about#History-section"}>History </Link>
                      </li>
                      <li className="">
                        <Link href={"/About#Teams-section"}>Our Team </Link>
                      </li>
                      <li className="">
                        <Link href={"/About#Clients-section"}>Our Clients </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Projects  */}

                <NavigationMenuItem className=" w-32 hover:bg-accent/50 rounded-md">
                  <NavigationMenuTrigger className="flex bg-transparent hover:bg-tranparent w-32">
                    <Link href={"/Projects"} className="flex flex-row">
                      Projects
                      <ChevronDown
                        className="relative top-[4px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                        aria-hidden="true"
                      />
                    </Link>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-2 md:w-[300px] lg:w-[300px] bg-white">
                        <li className="">
                          <Link href={"/"}>Portfolio </Link>
                        </li>
                        <li className="">
                          <Link href={"/"}>Case Studies</Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>

                {/* Services */}

                <NavigationMenuItem className="hover:bg-transparent w-32">
                  <NavigationMenuTrigger className="bg-transparent hover:bg-tranparent w-32">
                    <Link href={"/Services"} className="flex flex-row">
                      Services
                      <ChevronDown
                        className="relative top-[4px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                        aria-hidden="true"
                      />
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-2 md:w-[500px] md:grid-cols-2 lg:w-[400px] ">
                      <li className="">
                        <Link href={"/Services/BIM"}>Building Information Modeling</Link>
                      </li>
                      <li className="">
                        <Link href={"/Services/Autocad"}>Autocad</Link>
                      </li>
                      <li className="">
                        <Link href={"/Services/Architecture"}>Architecture</Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact  */}

                <NavigationMenuItem className="bg-transperent inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent/50">
                  <Link
                    href="/Contact"
                    className="bg-transparent hover:bg-tranparent rounded-md"
                  >
                    Contact Us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>

        <div className=" bg-white justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:px-8 w-full bg-blue-300 top-0 left-0 right-0 z-10 lg:hidden md:hidden">
          <div>
            <div className="relative flex items-center justify-between md:py-5 md:block transperant">
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className=" lg:hidden md-hidden sm:block flex flex-row items-center justify-between">
                <div className="flex flex-row mt-4">
                  {/* Logo  */}
                  <Link href={"/"}>
                    <Image src={logo} alt="logo" height={50} width={50} />
                  </Link>
                </div>

                <div className="items-center-end absolute top-8 right-6">
                  <button
                    className="p-1 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border-4"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <Image
                        src="/images/close.png"
                        width={30}
                        height={30}
                        alt="close"
                      />
                    ) : (
                      <Image
                        src="/images/hambug.png"
                        width={30}
                        height={30}
                        alt="open"
                        className="focus:border-none active:border-none"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? " md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-white  border-black  hover:text-gray-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0   hover:bg-white  border-black  hover:text-gray-600 md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About Us
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0   hover:bg-white  border-black  hover:text-gray-600 md:hover:bg-transparent">
                  <Link href="/services" onClick={() => setNavbar(!navbar)}>
                    Services
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0    hover:bg-white  border-black  hover:text-gray-600 md:hover:bg-transparent">
                  <Link href="/projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0   hover:bg-white  border-black  hover:text-gray-600 md:hover:bg-transparent">
                  <Link href="/Contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
