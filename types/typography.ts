import { textColor } from "@/theme";

export type TextProps = {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  color?: keyof typeof textColor;
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "xxl"
    | "xxxl"
    | "4xl"
    | "5xl"
    | "6xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  font?: "heading" | "sans" | "mono";
  className?: string;
};

