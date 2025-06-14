import { FC, useState } from "react";

import { Accordion, AccordionItem } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { Expandable } from "pages/about/common/expandable/Expandable";
import { ArticleTitle } from "pages/about/common/title/Title";

export const Education: FC = () => {
    const [educationExpanded, setEducationExpanded] = useState<number[]>([]);
    const [researchExpanded, setResearchExpanded] = useState<number[]>([]);
    const [certExpanded, setCertExpanded] = useState<number[]>([]);

    return (
        <>
            <ArticleTitle title="Education" />

            <br />

            <Accordion pt="2" allowMultiple index={educationExpanded} id="education">
                {configs.about.educations.map((edu, idx) => (
                    <AccordionItem p="0" border="0" mb="4" key={`panel-${edu.school}-${edu.degree}`}>
                        <Expandable
                            title={edu.school}
                            subTitle={edu.degree}
                            date={edu.duration}
                            content={edu.content}
                            id={edu.id}
                            idx={idx}
                            onChange={setEducationExpanded}
                            expanded={educationExpanded}
                        />
                    </AccordionItem>
                ))}
            </Accordion>

            <br />
            <br />

            <ArticleTitle title="Research" />

            <br />

            <Accordion pt="2" allowMultiple index={researchExpanded} id="research">
                {configs.about.research.map((edu, idx) => (
                    <AccordionItem p="0" border="0" mb="4" key={`panel-${edu.school}-${edu.degree}`}>
                        <Expandable
                            title={edu.school}
                            subTitle={edu.degree}
                            date={edu.duration}
                            content={edu.content}
                            id={edu.id}
                            idx={idx}
                            onChange={setResearchExpanded}
                            expanded={researchExpanded}
                        />
                    </AccordionItem>
                ))}
            </Accordion>

            <br />
            <br />

            <ArticleTitle title="Cerfications & Badges" />

            <br />

            <Accordion pt="2" allowMultiple index={certExpanded} id="cert">
                {configs.about.certifications.map((edu, idx) => (
                    <AccordionItem p="0" border="0" mb="4" key={`panel-${edu.school}-${edu.degree}`}>
                        <Expandable
                            title={edu.school}
                            subTitle={edu.degree}
                            date={edu.duration}
                            content={edu.content}
                            id={edu.id}
                            idx={idx}
                            onChange={setCertExpanded}
                            expanded={certExpanded}
                        />
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};
