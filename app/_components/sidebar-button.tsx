"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "../_lib/utils";
import { usePathname } from "next/navigation";

interface SidebarButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function SidebarButton({ href, children }: SidebarButtonProps) {
  const pathname = usePathname();

  return (
    <Button
      className={cn(
        "justify-start gap-2",
        pathname === href && "bg-primary text-white",
      )}
      variant={"ghost"}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
