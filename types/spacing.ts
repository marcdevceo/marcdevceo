export type SpacerProps = {
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
};

export type ContainerProps = {
  children: React.ReactNode;
  flex?: "none" | "row" | "column";
  justifyContent?:
    | "left"
    | "center"
    | "right"
    | "between"
    | "around"
    | "evenly";
  alignItems?: "left" | "center" | "right" | "stretch";
  margin?:
    | "none"
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
  padding?:
    | "none"
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
    gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "4xl" | "5xl" | "6xl";
  className?: string;
};
