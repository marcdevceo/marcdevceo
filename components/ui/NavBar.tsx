import { bgColor, marginClass, paddingClass } from "@/theme";
import { NavBarProps } from "@/types/components";
import Image from "next/image";
import Link from "next/link";

export default function NavBar({
  children,
  background = "neutral",
  padding = "md",
  margin = "none",
  title = "",
  logo = "",
  titleHref = "#",
  logoHref = "#",
  links = [],
  ...rest
}: NavBarProps) {
  return (
    <nav
      className={
        `${bgColor[background]}
        ${paddingClass[padding]}
        ${marginClass[margin]},
        `
      }
      {...rest}
    >
      <div className="flex items-center justify-between">
        {/* Site name or logo */}
        <div className="hidden sm:block text-xl text-center font-bold text-primary">
          {logo ? (
            <Link href={logoHref}>
              <Image src={logo} alt="Logo" width={50} height={50} className="h-8 w-auto" />
            </Link>
          ) : title ? (
            <Link href={titleHref} className="hover:text-accent transition-colors">
              {title}
            </Link>
          ) : null}{" "}
        </div>

        {/* Nav Links */}
        <div className="flex justify-center w-full sm:w-auto gap-4 sm:gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-primary hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {children}
    </nav>
  );
}
