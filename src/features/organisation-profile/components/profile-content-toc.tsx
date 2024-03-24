import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
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
    <Accordion>
      {tOCItems.map((item: HeaderItem, index: number) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {item.header}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {item.subHeaders && (
              <ul>
                {item.subHeaders.map((subHeader, subIndex) => (
                  <li key={subIndex}>{subHeader}</li>
                ))}
              </ul>
            )}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
