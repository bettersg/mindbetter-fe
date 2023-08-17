import { Box, HStack, Heading, Spacer } from "@chakra-ui/layout";
import parse, { domToReact, HTMLReactParserOptions } from "html-react-parser";
import { Header, ProfileSidebar } from "./profile-sidebar";
import { css } from "@emotion/react";
import { CSSProperties, useEffect } from "react";
import { parseHTMLContent } from "./parse-HTML-content";

const htmlContent_simple = `<h1>OTR Listens</h1>
<p>OTR Listens is a text-based chat support. It is a safe, anonymous chat platform for emotional support, manned by trained volunteers.Avie is available if you need an empathetic listening ear during these operating hours.</p>
<p>The chat conversation is strictly private, confidential, and PDPA compliant. Note: This is not a suicide prevention or a crisis service.</p>
<h1>Youth Counselling Services (TH!NK X Rainbow)</h1>
<p>OTR&rsquo;s youth counselling service provides quality psychotherapy and counselling support for youths and families that is timely and affordable.</p>
<h1>Well-being champion</h1>
<p>OTR Wellbeing Champion is a flagship program to empower a community of wellbeing champions as role models who take responsibility for own mental wellbeing&mdash; and as a wellness guide for others&mdash;at home, in the school, in the workplace, or out in the community.</p>
<p>A Wellbeing Champion is first and foremost a role model in the community who takes responsibility for his / her own mental wellbeing through self-care practices that create positive change on the inside. The change manifested within then radiates outwards &mdash; from the core to the shell&mdash;inside to the outside&mdash;enabling you to care for and serve those around you better&mdash;to become a more effective and aware mental wellness care-giver and wellness guide for others in the community.</p>
`;

const htmlContent_complex = `<h1>OTR Listens</h1>
  <p>OTR Listens is a text-based chat support. It is a safe, anonymous chat platform for emotional support, manned by trained volunteers.Avie is available if you need an empathetic listening ear during these operating hours: </p>
  <ul>
  <li>Monday - Friday (Weekdays): 4pm - 12 midnight (SGT)</li>
  <li>Saturday &amp; Sunday (Weekends): 12 noon - 12 midnight daily (SGT) </li>
  </ul>
  <p>The chat conversation is strictly private, confidential, and PDPA compliant. Note: This is not a suicide prevention or a crisis service.</p>
  <p>[Embed video] <a href="https://youtu.be/UpWXtuLDKpQ" target="_blank" rel="noopener noreferrer">https://youtu.be/UpWXtuLDKpQ</a></p>
  <p>Find out more here: <a href="https://otrlistens.net/" target="_blank" rel="noopener noreferrer">https://otrlistens.net/</a></p>
  <h1>Youth Counselling Services (TH!NK X Rainbow)</h1>
  <p>OTR&rsquo;s youth counselling service provides quality psychotherapy and counselling support for youths and families that is timely and affordable.</p>
  <p>The Service service is provided in collaboration with Th!nk Psychological Services:</p>
  <ul>
  <li>For Whom: 11 to 20 year old (with support for parents included)</li>
  <li>What: Package of 6 sessions, 60 min per session, at a rate of $90 per session</li>
  <li>How: Tele-therapy as the primary modality - with a professional therapist</li>
  <li>When: Weekdays 8:00am - 8:00pm; Saturday 8am - 3pm; Sunday 8am - 3pm; payments to be made 24 hours prior to scheduled session to secure time slot</li>
  </ul>
  <p>Find out more here: <a href="https://otrlistens.net/thinkxrainbow" target="_blank" rel="noopener noreferrer">https://otrlistens.net/thinkxrainbow</a></p>
  <h1>Well-being champion</h1>
  <p>OTR Wellbeing Champion is a flagship program to empower a community of wellbeing champions as role models who take responsibility for own mental wellbeing&mdash; and as a wellness guide for others&mdash;at home, in the school, in the workplace, or out in the community.</p>
  <p>A Wellbeing Champion is first and foremost a role model in the community who takes responsibility for his / her own mental wellbeing through self-care practices that create positive change on the inside. The change manifested within then radiates outwards &mdash; from the core to the shell&mdash;inside to the outside&mdash;enabling you to care for and serve those around you better&mdash;to become a more effective and aware mental wellness care-giver and wellness guide for others in the community.</p>
  <p>Wellbeing Champions can undergo a set of four foundational modules that form the core of OTR&rsquo;s teachings for the Wellbeing Champion: Mental Health 101, Self-Care 101, Others Care 101, and Psychological First Aid 101.</p>
  <p>Find out more here: <a href="https://overtherainbow.sg/otr-wellbeing-champion-series/" target="_blank" rel="noopener noreferrer">https://overtherainbow.sg/otr-wellbeing-champion-series/</a></p>
  `;

const contentStyle = css`
  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #707070;
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: #707070;
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }
`;

const mainHeader: CSSProperties = {
  color: "#333333",
  fontSize: "24px",
  fontWeight: "700",
};

const subHeader: CSSProperties = {
  color: "#707070",
  fontSize: "18px",
  fontWeight: "700",
};

const paragraph: CSSProperties = {
  color: "#000000",
  fontSize: "16px",
  fontWeight: "400",
};

export const ProfileContent: React.FC = () => {
  useEffect(() => {
    const data = parseHTMLContent(htmlContent_simple);
    console.log(data);
  });

  let headerCounter = 0;
  const generateHeaderId = () => `header-${headerCounter++}`;

  const headers: Header[] = [];

  const options: HTMLReactParserOptions = {
    replace: (node: any) => {
      if (node.type === "tag" && node.name.startsWith("h1")) {
        const level = node.name.substr(1);
        let headerId = node.attribs.id;

        if (!headerId) {
          headerId = generateHeaderId();
        }

        const headerText = node.children[0]?.data || "";

        if (level === "1") {
          headers.push({
            id: headerId,
            text: headerText,
            subHeaders: [],
          });
        } else if (level === "2" && headers.length > 0) {
          headers[headers.length - 1].subHeaders.push({
            id: headerId,
            text: headerText,
            subHeaders: [],
          });
        }

        return (
          <Heading as={node.name} css={contentStyle} id={headerId}>
            {domToReact(node.children, options)}
          </Heading>
        );
      }
    },
  };

  // todo must sanitize html before rendering
  return (
    <HStack>
      <Box textAlign="left" width="20vw">
        <ProfileSidebar headers={headers} />
      </Box>
      <Spacer />
      <Box width="40vw" textAlign="left">
        {parse(htmlContent_simple, options)}
      </Box>
    </HStack>
  );
};
