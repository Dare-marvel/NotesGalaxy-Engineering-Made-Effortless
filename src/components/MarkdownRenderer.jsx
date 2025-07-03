import {
  Box,
  Text,
  Heading,
  Divider,
  Link,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Code,
  OrderedList,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; // Import KaTeX CSS

export const MarkdownRenderer = ({ 
  content,
  maxWidth = "4xl",
}) => {
  const components = {
    // Headings
    h1: ({ children }) => (
      <Heading as="h1" size="lg" mb={6} mt={8} color="gray.800" lineHeight="1.2">
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading as="h2" size="md" mb={4} mt={6} color="gray.700" lineHeight="1.3">
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading as="h3" size="md" mb={3} mt={5} color="gray.700" lineHeight="1.4">
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading as="h4" size="md" mb={2} mt={4} color="gray.600" lineHeight="1.4">
        {children}
      </Heading>
    ),
    h5: ({ children }) => (
      <Heading as="h5" size="sm" mb={2} mt={3} color="gray.600" lineHeight="1.4">
        {children}
      </Heading>
    ),
    h6: ({ children }) => (
      <Heading as="h6" size="xs" mb={2} mt={3} color="gray.600" lineHeight="1.4">
        {children}
      </Heading>
    ),

    // Paragraphs
    p: ({ children }) => (
      <Text mb={4} color="gray.700" lineHeight="1.7" fontSize="md">
        {children}
      </Text>
    ),

    // Lists
    ul: ({ children }) => (
      <UnorderedList spacing={2} mb={4} pl={4} color="gray.700">
        {children}
      </UnorderedList>
    ),
    ol: ({ children }) => (
      <OrderedList spacing={2} mb={4} pl={4} color="gray.700">
        {children}
      </OrderedList>
    ),
    li: ({ children }) => (
      <ListItem lineHeight="1.6">
        {children}
      </ListItem>
    ),

    // Code blocks and inline code
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <Box my={4} borderRadius="md" overflow="hidden">
          <SyntaxHighlighter
            language={match[1]}
            style={oneDark}
            PreTag="div"
            customStyle={{
              margin: 0,
              borderRadius: '6px',
              fontSize: '14px'
            }}
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </Box>
      ) : (
        <Code
          px={2}
          py={1}
          bg="gray.100"
          color="red.600"
          borderRadius="sm"
          fontSize="sm"
          fontFamily="mono"
        >
          {children}
        </Code>
      );
    },

    // Blockquotes
    blockquote: ({ children }) => (
      <Box
        borderLeftWidth="4px"
        borderLeftColor="blue.400"
        bg="blue.50"
        pl={4}
        pr={4}
        py={3}
        my={4}
        borderRadius="md"
        color="gray.700"
        fontStyle="italic"
      >
        {children}
      </Box>
    ),

    // Links
    a: ({ href, children }) => (
      <Link 
        href={href} 
        color="blue.500" 
        textDecoration="underline"
        _hover={{ color: "blue.600", textDecoration: "none" }}
        isExternal={href?.startsWith('http')}
      >
        {children}
      </Link>
    ),

    // Images
    img: ({ src, alt }) => (
      <Box my={6} textAlign="center">
        <Image
          src={src}
          alt={alt}
          maxW="100%"
          borderRadius="md"
          shadow="md"
          mx="auto"
        />
        {alt && (
          <Text fontSize="sm" color="gray.500" mt={2} fontStyle="italic">
            {alt}
          </Text>
        )}
      </Box>
    ),

    // Tables
    table: ({ children }) => (
      <TableContainer my={6}>
        <Table variant="simple" size="sm">
          {children}
        </Table>
      </TableContainer>
    ),
    thead: ({ children }) => <Thead>{children}</Thead>,
    tbody: ({ children }) => <Tbody>{children}</Tbody>,
    tr: ({ children }) => <Tr>{children}</Tr>,
    th: ({ children }) => (
      <Th bg="gray.50" color="gray.700" fontWeight="bold">
        {children}
      </Th>
    ),
    td: ({ children }) => (
      <Td color="gray.700" borderColor="gray.200">
        {children}
      </Td>
    ),

    // Horizontal rule
    hr: () => <Divider my={8} />,

    // Strong and emphasis
    strong: ({ children }) => (
      <Text as="strong" fontWeight="bold" color="gray.800">
        {children}
      </Text>
    ),
    em: ({ children }) => (
      <Text as="em" fontStyle="italic">
        {children}
      </Text>
    ),
  };

  return (
    <Box maxW={maxWidth} mx="auto" px={4}>
      <ReactMarkdown
        components={components}
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
};