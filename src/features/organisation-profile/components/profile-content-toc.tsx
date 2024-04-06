import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";

export interface HeaderItem {
  header: string;
  subHeaders?: string[];
}

export const ProfileContentTOC: React.FC<{
  tOCItems: HeaderItem[];
}> = ({ tOCItems }) => {
  return (
    <Accordion allowToggle variant="tocStyle">
      {tOCItems.map((item: HeaderItem, index: number) => {
        const hasNoSubSections = item.subHeaders?.length === 0;

        if (hasNoSubSections) {
          return (
            <AccordionItem key={index}>
              <AccordionButton>
                <Text textAlign="left" textStyle="body.md-bold">
                  {item.header}
                </Text>
              </AccordionButton>
            </AccordionItem>
          );
        }

        return (
          <AccordionItem key={index}>
            <AccordionButton>
              <Text textAlign="left" textStyle="body.md-bold">
                {item.header}
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {item.subHeaders && (
                <ul>
                  {item.subHeaders.map((subHeader, subIndex) => (
                    <li key={subIndex}>{subHeader}</li>
                  ))}
                </ul>
              )}
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
