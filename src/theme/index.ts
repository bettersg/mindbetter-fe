import { extendTheme } from "@chakra-ui/react";

import { textStyles } from "./styles";
import { fonts, typography } from "./typography";
import { Table } from "./components/table";
import { colors } from "./colours";

const overrides = {
  fonts,
  typography,
  textStyles,
  colors,
  // Other foundational style overrides go here
  components: {
    Table,
    // Other components go here
  },
};

export default extendTheme(overrides);
