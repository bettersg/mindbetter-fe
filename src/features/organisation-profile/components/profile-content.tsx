import { Text } from "@chakra-ui/layout";
import Delta, { AttributeMap, Op } from "quill-delta";
import { Box, Divider, HStack, Spacer } from "@chakra-ui/react";

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

const delta_content = `
 [
        {
            "insert": "OTR Listens"
        },
        {
            "attributes": {
                "header": 1
            },
            "insert": "\\n"
        },
        {
            "insert": "OTR Listens is a text-based chat support. It is a safe, anonymous chat platform for emotional support, manned by trained volunteers. Avie is available if you need an empathetic listening ear during these operating hours:\\nMonday - Friday (Weekdays): 4pm - 12 midnight (SGT)"
        },
        {
            "attributes": {
                "list": "bullet"
            },
            "insert": "\\n"
        },
        {
            "insert": "Saturday & Sunday (Weekends): 12 noon - 12 midnight daily (SGT)"
        },
        {
            "attributes": {
                "list": "bullet"
            },
            "insert": "\\n"
        },
        {
            "insert": "The chat conversation is strictly private, confidential, and PDPA compliant. Note: This is not a suicide prevention or a crisis service.\\n[Embed video] "
        },
        {
            "attributes": {
                "link": "https://youtu.be/UpWXtuLDKpQ"
            },
            "insert": "https://youtu.be/UpWXtuLDKpQ"
        },
        {
            "insert": "\\nFind out more here: "
        },
        {
            "attributes": {
                "link": "https://otrlistens.net/"
            },
            "insert": "https://otrlistens.net/"
        },
        {
            "insert": "\\nYouth Counselling Services (TH!NK X Rainbow)"
        },
        {
            "attributes": {
                "header": 1
            },
            "insert": "\\n"
        },
        {
            "insert": "OTR’s youth counselling service provides quality psychotherapy and counselling support for youths and families that is timely and affordable.\\nThe Service service is provided in collaboration with Th!nk Psychological Services:\\nFor Whom: 11 to 20 year old (with support for parents included)"
        },
        {
            "attributes": {
                "list": "bullet"
            },
            "insert": "\\n"
        },
        {
            "insert": "What: Package of 6 sessions, 60 min per session, at a rate of $90 per session"
        },
        {
            "attributes": {
                "list": "bullet"
            },
            "insert": "\\n"
        },
        {
            "insert": "How: Tele-therapy as the primary modality - with a professional therapist"
        },
        {
            "attributes": {
                "list": "bullet"
            },
            "insert": "\\n"
        },
        {
            "insert": "When: Weekdays 8:00am - 8:00pm; Saturday 8am - 3pm; Sunday 8am - 3pm; payments to be made 24 hours prior to scheduled session to secure time slot"
        },
        {
            "attributes": {
                "list": "bullet"
            },
            "insert": "\\n"
        },
        {
            "insert": "Find out more here: "
        },
        {
            "attributes": {
                "link": "https://otrlistens.net/thinkxrainbow"
            },
            "insert": "https://otrlistens.net/thinkxrainbow"
        },
        {
            "insert": "\\nWell-being champion"
        },
        {
            "attributes": {
                "header": 1
            },
            "insert": "\\n"
        },
        {
            "insert": "OTR Wellbeing Champion is a flagship program to empower a community of wellbeing champions as role models who take responsibility for own mental wellbeing— and as a wellness guide for others—at home, in the school, in the workplace, or out in the community.\\nA Wellbeing Champion is first and foremost a role model in the community who takes responsibility for his / her own mental wellbeing through self-care practices that create positive change on the inside. The change manifested within then radiates outwards — from the core to the shell—inside to the outside—enabling you to care for and serve those around you better—to become a more effective and aware mental wellness care-giver and wellness guide for others in the community.\\nWellbeing Champions can undergo a set of four foundational modules that form the core of OTR’s teachings for the Wellbeing Champion: Mental Health 101, Self-Care 101, Others Care 101, and Psychological First Aid 101.\\nFind out more here: "
        },
        {
            "attributes": {
                "link": "https://overtherainbow.sg/otr-wellbeing-champion-series/"
            },
            "insert": "https://overtherainbow.sg/otr-wellbeing-champion-series/"
        },
        {
            "insert": "\\n"
        }
    ]
  `;

export const ProfileContent: React.FC = () => {
  const sample2: Op[] = JSON.parse(delta_content);
  const sampleDelta: Delta = new Delta(sample2);

  const renderText = (line: Delta, attributes: AttributeMap, index: number) => {
    const text = line
      .filter((op) => typeof op.insert === "string")
      .map((op) => op.insert)
      .join("");

    if (attributes.header === 1) {
      return (
        <>
          {index !== 0 && (
            <Divider
              mb={16}
              mt={16}
              borderWidth={1}
              borderColor="netural.secondary"
            />
          )}
          <Text textStyle="title.lg-bold" mb={4}>
            {text}
          </Text>
        </>
      );
    } else if (attributes.header === 2) {
      return <Text textStyle="title.md">{text}</Text>;
    } else {
      return <Text textStyle="label.lg">{text}</Text>;
    }
  };

  const renderDelta = (delta: Delta) => {
    const renderedContent: React.ReactNode[] = [];

    // parse into sections based on header 1
    // then parse into sub sections based on header 2
    // then parse into lines?

    delta.eachLine((line: Delta, attributes: AttributeMap, i: number) => {
      renderedContent.push(renderText(line, attributes, i));
    });

    return renderedContent;
  };

  return (
    <HStack spacing={8} align="start">
      <Box textAlign="left" width="10vw" border="2px">
        <Text>Test</Text>
      </Box>
      <Spacer />
      <Box textAlign="left">{renderDelta(sampleDelta)}</Box>
    </HStack>
  );
};
