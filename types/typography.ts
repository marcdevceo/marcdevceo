import {
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  textColor,
} from "@/theme";

export type TextProps = {
  children: React.ReactNode;
  align?: keyof typeof textAlign;
  color?: keyof typeof textColor;
  size?: keyof typeof fontSize;
  weight?: keyof typeof fontWeight;
  font?: keyof typeof fontFamily;
  className?: string;
};

export type ListsProps<T> = {
  lists: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};