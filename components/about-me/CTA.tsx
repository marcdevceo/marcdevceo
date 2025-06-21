/* eslint-disable react/no-unescaped-entities */

import { BodyText, Button, FlexContainer } from "@/ui-framework";

export default function CTA() {
  return (
    <FlexContainer justify="center" width="full">
      <Button href="/contact" className="w-full">
        <BodyText align="center" size="subtitle" weight="bold">
          Let's Work Together
        </BodyText>
      </Button>
    </FlexContainer>
  );
}
