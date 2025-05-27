import {
  alignItemsClass,
  flexDirection,
  gapClass,
  justifyContentClass,
  marginClass,
  paddingClass,
  spacingX,
  spacingY,
} from "@/theme";
import { ContainerProps, SpacerProps } from "@/types/spacing";

export default function SpacerX({ size = "lg" }: SpacerProps) {
  return <div className={`${spacingX[size]}`} />;
}
export function SpacerY({ size = "lg" }: SpacerProps) {
  return <div className={`${spacingY[size]}`} />;
}

export function Main({
  children,
  flex = "column",
  margin = "md",
  gap = "md",
  padding = "sm",
  justifyContent = "left",
  alignItems = "left",
  className = "",
}: ContainerProps) {
  return (
    <body
      className={`flex min-h-screen ${flexDirection[flex]} ${justifyContentClass[justifyContent]} ${alignItemsClass[alignItems]} ${gapClass[gap]} ${marginClass[margin]} ${paddingClass[padding]} ${className}`}
    >
      {children}
    </body>
  );
}

export function FlexContainer({
  children,
  flex = "row",
  margin = "none",
  gap = "none",
  padding = "none",
  justifyContent = "left",
  alignItems = "left",
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`flex ${flexDirection[flex]} ${justifyContentClass[justifyContent]} ${alignItemsClass[alignItems]} ${gapClass[gap]} ${marginClass[margin]} ${paddingClass[padding]} ${className}`}
    >
      {children}
    </div>
  );
}

export function Container({
  children,
  margin = "none",
  padding = "none",
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`${marginClass[margin]} ${paddingClass[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
