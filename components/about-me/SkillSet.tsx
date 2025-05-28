"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import { List, Subtitle, Text } from "@/components/ui/Typography";
import { FlexContainer, SpacerY } from "@/components/ui/Spacer";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { skillMap, SkillType } from "@/data/skillslist";

export default function SkillSet() {
  const [selectedSkill, setSelectedSkill] = useState<SkillType | null>(null);

  const handleOpen = (type: SkillType) => {
    setSelectedSkill(type);
  };

  const handleClose = () => {
    setSelectedSkill(null);
  };

  return (
    <>
      <Subtitle align="center">Technical Skillsets</Subtitle>
      <Text align="center">Click each for more details:</Text>
      <SpacerY size="xl" />
      <FlexContainer
        justifyContent="center"
        width="w-full"
        gap="xl"
        className="flex-wrap"
      >
        {Object.keys(skillMap).map((label) => (
          <Button key={label} onClick={() => handleOpen(label as SkillType)}>
            {label}
          </Button>
        ))}

        <Modal
          isOpen={!!selectedSkill}
          onClose={handleClose}
          title={selectedSkill ? skillMap[selectedSkill].title : ""}
        >
          {selectedSkill && (
            <Card background="none">
              <List
                lists={skillMap[selectedSkill].skills}
                renderItem={(item, i) => <li key={i}>{item}</li>}
              />
            </Card>
          )}
        </Modal>
      </FlexContainer>
    </>
  );
}
