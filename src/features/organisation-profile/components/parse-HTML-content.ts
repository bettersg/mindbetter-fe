import parse, { HTMLReactParserOptions } from "html-react-parser";
import { Element, isTag, isText } from "domhandler/lib/node";

export interface SubSection {
  headerId: string;
  subHeader: string;
  content: string | ListContent;
}

export interface ListContent {
  listItems: string[];
}

export interface Section {
  headerId: string;
  mainheader: string;
  subSections: SubSection[];
}

export interface ParsedContent {
  sections: Section[];
}

let headerCounter = 0;
const generateHeaderId = () => `header-${headerCounter++}`;

export function parseHTMLContent(htmlContent: string): ParsedContent {
  // reset header ids
  headerCounter = 0;

  let content: ParsedContent = {
    sections: [],
  };

  let currentSection: Section | null = null;
  let currentSubSection: SubSection | null = null;

  const parseOptions: HTMLReactParserOptions = {
    replace: (domNode) => {
      const node: Element = domNode as Element;
      if (!isTag(node)) {
        return undefined;
      }

      if (node.tagName === "h1") {
        currentSection = {
          headerId: generateHeaderId(),
          mainheader: "",
          subSections: [],
        };

        const headerText = node.childNodes[0];

        if (isText(headerText)) {
          currentSection.mainheader = headerText.data;
          content.sections.push(currentSection);
          currentSubSection = null;
        }
      } else if (node.tagName === "p" && currentSection) {
        currentSubSection = {
          headerId: generateHeaderId(),
          subHeader: "",
          content: "",
        };

        const textData = node.childNodes[0];

        if (isText(textData)) {
          currentSubSection.content = textData.data;
          currentSection.subSections.push(currentSubSection);
        }
      }

      return undefined;
    },
  };

  parse(htmlContent, parseOptions);

  return content;
}
