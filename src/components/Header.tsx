"use client";

import React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "TechnoScape '18",
    href: "/docs/primitives/alert-dialog",
    description: "Blockchain Technology for Transparency and Security.",
  },
  {
    title: "TechnoScape '19",
    href: "/docs/primitives/hover-card",
    description:
      "Virtual Reality and Augmented Reality for Immersive Experiences.",
  },
  {
    title: "TechnoScape '20",
    href: "/docs/primitives/progress",
    description: "Financial Technology (Fintech) for Financial Inclusion.",
  },
  {
    title: "TechnoScape '21",
    href: "/docs/primitives/scroll-area",
    description: "Internet of Things (IoT) for Smart Industry.",
  },
  {
    title: "TechnoScape '22",
    href: "/docs/primitives/tabs",
    description: "Metaverse for Virtual Connection and Communities.",
  },
  {
    title: "TechnoScape '23",
    href: "/docs/primitives/tooltip",
    description: "Blockchain Technology for Decentralization and Autonomy.",
  },
];

const Header = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white">
            Getting started
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] items-center">
              <li className="row-span-2 ">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      TechnoScape
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Dive into industry talks and workshops, unleash your
                      coding skills, and celebrate technology with interactive
                      exhibits and demos.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/Login" title="Login">
                Simply enter your username/email and password to get started.
              </ListItem>
              <ListItem href="/Register" title="Register">
                The registration process is quick and easy! Just fill out the
                form and get started today.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white">
            Events
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              id="ContactHeader"
            >
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
