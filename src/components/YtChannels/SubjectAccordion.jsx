import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { loadChannelsForSubject } from "../../utils/channelUtils";
import ChannelLink from "./ChannelLink";

const SubjectAccordion = ({ subject }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [channels, setChannels] = useState(subject.channels || []);

  const handleToggle = async () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsLoading(true);
      const loadedChannels = await loadChannelsForSubject(subject.name); // change id as needed
      setChannels(loadedChannels);
      setIsLoading(false);
      setIsOpen(true);
    }
  };

  return (
    <AccordionItem
      isDisabled={false}
      border="1px solid"
      borderColor="blue.200"
      borderRadius={{ base: "lg", md: "xl" }}
      bg="whiteAlpha.900"
      backdropFilter="blur(15px)"
      mb={{ base: 2, md: 3 }}
      overflow="hidden"
      _hover={{
        borderColor: "purple.300",
        boxShadow: {
          base: "0 4px 15px rgba(128, 90, 213, 0.15)",
          md: "0 8px 25px rgba(128, 90, 213, 0.2)",
        },
      }}
      transition="all 0.3s ease"
    >
      <AccordionButton
        p={{ base: 3, md: 4 }}
        _hover={{ bg: "blue.50" }}
        _expanded={{ bg: "purple.50", borderColor: "purple.300" }}
        transition="all 0.3s ease"
        minH={{ base: "56px", md: "auto" }}
        onClick={handleToggle}
      >
        <Box flex="1" textAlign="left">
          <Text
            fontWeight="bold"
            fontSize={{ base: "md", sm: "lg", md: "xl" }}
            color="gray.800"
            noOfLines={2}
          >
            {subject.name}
          </Text>
        </Box>
        {isLoading ? (
          <Spinner size="sm" color="purple.500" />
        ) : (
          <AccordionIcon color="purple.500" boxSize={{ base: "20px", md: "24px" }} />
        )}
      </AccordionButton>

      {isOpen && (
        <AccordionPanel pb={{ base: 3, md: 4 }} px={{ base: 3, md: 4 }} bg="gray.50">
          <VStack spacing={{ base: 2, md: 3 }} align="stretch">
            {channels.map((channel, idx) => (
              <ChannelLink key={idx} channel={channel} />
            ))}
          </VStack>
        </AccordionPanel>
      )}
    </AccordionItem>
  );
};

export default SubjectAccordion;
