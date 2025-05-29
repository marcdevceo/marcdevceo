/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/ui/Button";
import { FlexContainer } from "../ui/Spacer";
import { Text } from "../ui/Typography";

export default function CTA() {
  return (
    <FlexContainer justifyContent="center" width="w-full">
      <Button href="/contact" className="w-full">
        <Text align="center" size="subtitle" weight="bold">
          Let's Work Together
        </Text>
      </Button>
    </FlexContainer>
  );
}
