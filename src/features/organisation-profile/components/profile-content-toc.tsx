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
  id: string;
  header: string;
  subHeaders?: HeaderItem[];
}

const scrollToTitle = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const elementRect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY =
      elementRect.top +
      scrollTop -
      window.innerHeight / 4 +
      elementRect.height / 4;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }
};

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
              <AccordionButton onClick={() => scrollToTitle(item.id)}>
                <Text textAlign="left" textStyle="body.md-bold">
                  {item.header}
                </Text>
              </AccordionButton>
            </AccordionItem>
          );
        }

        return (
          <AccordionItem key={index}>
            <AccordionButton onClick={() => scrollToTitle(item.id)}>
              <Text textAlign="left" textStyle="body.md-bold">
                {item.header}
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {item.subHeaders && (
                <ul>
                  {item.subHeaders.map((subHeader, subIndex) => (
                    <li onClick={() => scrollToTitle(item.id)} key={subIndex}>
                      {subHeader.header}
                    </li>
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
