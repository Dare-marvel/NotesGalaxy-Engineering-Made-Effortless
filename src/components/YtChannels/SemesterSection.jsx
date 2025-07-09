import {
  Box,
  Accordion,
  Heading,
  Badge,
  Flex,
} from '@chakra-ui/react';

import SubjectAccordion from './SubjectAccordion';

const SemesterSection = ({ semester, subjects }) => (
    <Box
        mb={{ base: 4, md: 6 }}
        px={{ base: 3, sm: 4, md: 10, lg: 8 }}
        width={{ base: "full", md: "auto" }}
    >
        <Flex
            align="center"
            mb={{ base: 3, md: 4 }}
            direction={{ base: "column", sm: "row" }}
            gap={{ base: 2, sm: 0 }}
            px={{ base: 3, sm: 4, md: 12, lg: 12 }}
        >
            <Heading
                size={{ base: "md", sm: "lg", md: "xl" }}
                color="purple.700"
                fontWeight="bold"
                // mr={{ base: 0, sm: 3 }}
                textShadow="0 2px 4px rgba(128, 90, 213, 0.3)"
                textAlign={{ base: "center", sm: "left" }}
                mb={{ base: 1, sm: 0 }}
            >
                {semester}
            </Heading>
            <Badge
                colorScheme="blue"
                variant="subtle"
                px={{ base: 2, md: 3 }}
                mx={{ base: 0, sm: 2, md: 6, lg: 6 }}
                py={1}
                borderRadius="full"
                fontSize={{ base: "xs", md: "sm" }}
            >
                {subjects.length} subject{subjects.length !== 1 ? 's' : ''}
            </Badge>
        </Flex>

        <Accordion
            px={{ base: 3, sm: 4, md: 12, lg: 12 }}
            allowMultiple>
            {subjects.map((subject, idx) => (
                <SubjectAccordion key={idx} subject={subject} />
            ))}
        </Accordion>
    </Box>
);

export default SemesterSection;