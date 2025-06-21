"use client";

import { useState } from "react";
import { skillMap, SkillType } from "@/data/skillslist";
import { BodyText, Button, Card, FlexContainer, List, Modal, Subtitle } from "@/ui-framework";

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
      <BodyText align="center" size="buttonText">Click each for more details:</BodyText>
      <FlexContainer
        justify="center"
        width="full"
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
            <Card bg="none">
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
