import {
  Text,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';


const ChannelLink = ({ channel }) => (
  <Link
    href={channel.url}
    isExternal
    p={{ base: 2, sm: 3 }}
    borderRadius={{ base: "md", md: "lg" }}
    bg="whiteAlpha.800"
    backdropFilter="blur(10px)"
    border="1px solid"
    borderColor="blue.200"
    _hover={{
      bg: "blue.50",
      borderColor: "blue.300",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(66, 153, 225, 0.3)"
    }}
    transition="all 0.3s ease"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    minH={{ base: "44px", md: "auto" }} // Ensure touch-friendly height on mobile
  >
    <Text
      fontWeight="medium"
      color="gray.700"
      fontSize={{ base: "sm", md: "md" }}
      noOfLines={2} // Prevent text overflow
      pr={2}
    >
      {channel.name}
    </Text>
    <ExternalLinkIcon
      color="blue.500"
      boxSize={{ base: "16px", md: "20px" }}
      flexShrink={0}
    />
  </Link>
);

export default ChannelLink;