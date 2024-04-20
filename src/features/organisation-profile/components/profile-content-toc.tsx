import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { boldFontWeight, normalFontWeight } from "../../../theme/typography";

export interface HeaderItem {
  id: string;
  header: string;
  subHeaders?: HeaderItem[];
}

const scrollToTitle = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const elementRect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
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
  headerInView: number;
  updateHeaderInView: Function;
}> = ({ tOCItems, headerInView, updateHeaderInView }) => {
  const [activeSubHeaderId, setActiveSubHeaderId] = useState<string>("");

  const handleItemClick = (item: HeaderItem, index: number) => {
    updateHeaderInView(index);
    scrollToTitle(item.id);
  };

  console.log("Render toc ", headerInView);

  return (
    <Accordion defaultIndex={[0]} allowToggle variant="tocStyle">
      {tOCItems.map((item: HeaderItem, index: number) => {
        const hasSubSections = item.subHeaders && item.subHeaders.length > 0;

        return (
          <AccordionItem>
            <AccordionButton onClick={() => handleItemClick(item, index)}>
              <Text
                color={headerInView.toString() === item.id ? "blue" : "black"}
                textAlign="left"
                textStyle="body.md-bold"
              >
                {item.header}
              </Text>
              {hasSubSections && <AccordionIcon />}
            </AccordionButton>
            {hasSubSections && (
              <AccordionPanel>
                <VStack>
                  {item.subHeaders?.map((subHeader, subIndex) => (
                    <Text
                      textStyle="body.sm"
                      fontWeight={
                        subHeader.id === activeSubHeaderId
                          ? boldFontWeight
                          : normalFontWeight
                      }
                      onClick={() => handleItemClick(item, index)}
                      key={subIndex}
                    >
                      {subHeader.header}
                    </Text>
                  ))}
                </VStack>
              </AccordionPanel>
            )}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
