import {
  alignItemsClass,
  bgColor,
  flexDirection,
  gapClass,
  justifyContentClass,
  marginClass,
  paddingClass,
  spacingX,
} from "@/theme";

export type SpacerProps = {
  size?: keyof typeof spacingX;
};

export type ContainerProps = {
  children: React.ReactNode;
  bgVarient?: keyof typeof bgColor;
  flex?: keyof typeof flexDirection;
  justifyContent?: keyof typeof justifyContentClass;
  alignItems?: keyof typeof alignItemsClass;
  margin?: keyof typeof marginClass;
  padding?: keyof typeof paddingClass;
  gap?: keyof typeof gapClass;
  className?: string;
};
