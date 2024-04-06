import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const tocStyle = definePartsStyle({
  container: {
    borderBottomWidth: "1px", // Set bottom border width
    _first: {
      borderTopWidth: "0", // Remove top border for first item
    },
    _last: {
      borderBottomWidth: "0", // Remove bottom border for last item
    },
  },
  button: {
    _selected: "blue.500",
  },
  icon: {
    fontSize: "32px",
    marginLeft: "auto", // Right-align the icon
  },
});

export const Accordion = defineMultiStyleConfig({
  variants: { tocStyle },
});
