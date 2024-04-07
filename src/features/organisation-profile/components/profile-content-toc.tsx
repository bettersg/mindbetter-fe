import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

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
  // Track the currently selected item
  const [selectedItem, setSelectedItem] = useState(tOCItems[0].id);

  const handleItemClick = (item: HeaderItem) => {
    setSelectedItem(item.id);
    scrollToTitle(item.id);
  };

  return (
    <Accordion allowToggle variant="tocStyle">
      {tOCItems.map((item: HeaderItem, index: number) => {
        const hasSubSections = item.subHeaders && item.subHeaders.length > 0;

        return (
          <AccordionItem key={index}>
            <AccordionButton onClick={() => handleItemClick(item)}>
              <Text textAlign="left" textStyle="body.md-bold">
                {item.header}
              </Text>
              {hasSubSections && <AccordionIcon />}
            </AccordionButton>
            {hasSubSections && (
              <AccordionPanel>
                <ul>
                  {item.subHeaders?.map((subHeader, subIndex) => (
                    <li onClick={() => handleItemClick(item)} key={subIndex}>
                      {subHeader.header}
                    </li>
                  ))}
                </ul>
              </AccordionPanel>
            )}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
