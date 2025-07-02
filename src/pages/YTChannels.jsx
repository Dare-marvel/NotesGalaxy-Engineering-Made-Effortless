import { useState, useMemo } from 'react';
import {
  Box,
  VStack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
  Container,
  Heading,
  Badge,
  Flex,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import { ExternalLinkIcon, SearchIcon } from '@chakra-ui/icons';

import SidebarAdLeft from '../components/SidebarAd/SidebarAdLeft';
import SidebarAdRight from '../components/SidebarAd/SidebarAdRight';

// Mock YouTube channel data - replace with actual links
const subjectsData = {
  "Semester 1": [
    {
      name: "C Programming (PSIPL)",
      channels: [
        { name: "CodeWithHarry - C Programming", url: "https://youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR" },
        { name: "Jenny's Lectures CS IT", url: "https://youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S" },
        { name: "Neso Academy - C Programming", url: "https://youtube.com/playlist?list=PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR&feature=shared" }
      ]
    },
    {
      name: "Digital Systems and Microprocessors (DSM)",
      channels: [
        { name: "Neso Academy - Digital Electronics", url: "https://youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm" },
        { name: "Digital Electronics for GATE by Tutorials Point", url: "https://youtube.com/playlist?list=PLWPirh4EWFpHk70zwYoHu87uVsCC8E2S-&feature=shared" },
        { name: "Engineering Funda", url: "https://youtube.com/playlist?list=PLgwJf8NK-2e7nYSG31YWEUfwgAp2uIOBY&feature=shared" }
      ]
    },
    {
      name: "Basic Electrical Engineering (BEE)",
      channels: [
        { name: "Basic Electrical Engineering by Umesh Dhande", url: "https://youtube.com/playlist?list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc&feature=shared" },
        { name: "Basic Electrical Engineering - Perfect Computer Engineer", url: "https://youtube.com/playlist?list=PLPIwNooIb9vhiZRRq1fEWXvSLz7VMeqSh&feature=shared" },
        { name: "Basic Electrical Engineering by Gautam Varde", url: "https://youtube.com/playlist?list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&feature=shared" }
      ]
    },
    {
      name: "Engineering Graphics (EG)",
      channels: [
        { name: "Tikle's Academy", url: "https://youtube.com/playlist?list=PLDN15nk5uLiD3MEUiqsYPnZOHcVu7um6_&feature=shared" },
      ]
    }
  ],
  "Semester 2": [
    {
      name: "OOPS in Java",
      channels: [
        { name: "CodeWithHarry - Java Tutorial", url: "https://youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q" },
        { name: "Programming with Mosh - Java", url: "https://youtu.be/eIrMbAQSU34?feature=shared" },
        { name: "Derek Banas - Java Tutorial", url: "https://youtube.com/playlist?list=PLE7E8B7F4856C9B19" }
      ]
    }
  ],
  "Semester 3": [
    {
      name: "Probability and Statistics",
      channels: [
        { name: "Khan Academy - Statistics", url: "https://youtube.com/playlist?list=PL1328115D3D8A2566" },
        { name: "Pushpendra Classes - Hypothesis Testing", url: "https://youtube.com/playlist?list=PLEIbY8S8u_DJYKayvumNh8tVj94PzKWWr&feature=shared" },
        { name: "Hypothesis Testing , Sampling Distribution - Gourav Manjrekar", url: "https://youtube.com/playlist?list=PLRNL7AjA6rjy_OuyGPC5rmqOUUgGfq_fw&feature=shared" }
      ]
    },
    {
      name: "Computer Organization and Architecture (COA)",
      channels: [
        { name: "Neso Academy - COA", url: "https://youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q" },
        { name: "Gate Smashers - COA", url: "https://youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX" },
        { name: "Knowledge Gate - COA", url: "https://youtube.com/playlist?list=PLmXKhU9FNesSFvj6gASuWmQd23Ul5omtD" },
        { name: "Bharat Acharya COA course - Paid (I purchased this)", url: "https://www.bharatacharyaeducation.com/s/store/package/64355222e4b0d7ed8dd676c8/courses/COA" }
      ]
    },
    {
      name: "Database Management System (DBMS)",
      channels: [
        { name: "Gate Smashers - DBMS", url: "https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
        { name: "Knowledge Gate - DBMS", url: "https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV" },
        { name: "Jenny's Lectures - DBMS", url: "https://youtube.com/playlist?list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc" },
        { name: "Neso academy - DBMS", url: "https://youtube.com/playlist?list=PLBlnK6fEyqRiyryTrbKHX1Sh9luYI0dhX&feature=shared" }
      ]
    },
    {
      name: "Data Structures and Competitive Programming (DS-CP)",
      channels: [
        { name: "Striver - A2Z DSA Course", url: "https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz" },
        { name: "CodeWithHarry - Data Structures", url: "https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi" },
        { name: "Abdul Bari - Data Structures", url: "https://youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" }
      ]
    },
    {
      name: "Discrete Structures and Graph Theory (DSGT)",
      channels: [
        { name: "Neso Academy - Discrete Mathematics", url: "https://youtube.com/playlist?list=PLBlnK6fEyqRhqJPDXcvYlLfXPh37L89g3" },
        { name: "Discrete Mathematics", url: "https://youtube.com/playlist?list=PLEjRWorvdxL48EwgXUAsBRnOr-auHXnA5&feature=shared" },
        { name: "Knowledge Gate - Graph Theory", url: "https://youtube.com/playlist?list=PLmXKhU9FNesTpQNP_OpXN7WaPwGx7NWsq&feature=shared" }
      ]
    }
  ],
  "Semester 4": [
    {
      name: "Linear Algebra (LA)",
      channels: [
        { name: "Dr. Gajendra Purohit", url: "https://youtube.com/playlist?list=PLU6SqdYcYsfI7Ebw_j-Vy8YKHdbHKP9am&feature=shared" },
        { name: "Khan Academy - Linear Algebra", url: "https://youtube.com/playlist?list=PLFD0EB975BA0CC1E0" },
        { name: "Linear Algebra - Gilbert Strang", url: "https://youtube.com/playlist?list=PL49CF3715CB9EF31D&feature=shared" }
      ]
    },
    {
      name: "Design And Analysis Of Algorithms (DAA)",
      channels: [
        { name: "Abdul Bari - Algorithms", url: "https://youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" },
        { name: "Gate Smashers - DAA", url: "https://youtube.com/playlist?list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa" },
        { name: "Jenny's Lectures - DAA", url: "https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&feature=shared" }
      ]
    },
    {
      name: "Computer Communication and Networks (CCN)",
      channels: [
        { name: "Gate Smashers - Computer Networks", url: "https://youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_" },
        { name: "Neso Academy - Computer Networks", url: "https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx" },
        { name: "Knowledge Gate - Networks", url: "https://youtube.com/playlist?list=PLmXKhU9FNesSjFbXSZGF8JF_4LVwwofCd" },
        { name: "Computer Networking: A Top-Down Approach", url: "https://youtube.com/playlist?list=PLByK_3hwzY3Tysh-SY9MKZhMm9wIfNOas&feature=shared" }
      ]
    },
    {
      name: "Operating Systems (OS)",
      channels: [
        { name: "Gate Smashers - Operating System", url: "https://youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p" },
        { name: "Neso Academy - Operating System", url: "https://youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O" },
        { name: "Jenny's Lectures - OS", url: "https://youtube.com/playlist?list=PLdo5W4Nhv31a5ucW_S1K3-x6ztBRD-PNa" }
      ]
    }
  ],
  "Semester 5": [
    {
      name: "Theory of Computation (TOC)",
      channels: [
        { name: "Neso Academy - Theory of Computation", url: "https://youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev" },
        { name: "Gate Smashers - TOC", url: "https://youtube.com/playlist?list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc" },
        { name: "Knowledge Gate - TOC", url: "https://youtube.com/playlist?list=PLmXKhU9FNesSdCsn6YQqu9DmXRMsYdZ2T&feature=shared" }
      ]
    },
    {
      name: "Software Engineering (SE)",
      channels: [
        { name: "Gate Smashers - Software Engineering", url: "https://youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&feature=shared" },
        { name: "Education 4u - Software Engineering", url: "https://youtube.com/playlist?list=PLrjkTql3jnm9b5nr-ggx7Pt1G4UAHeFlJ&feature=shared" },
        { name: "Knowledge Gate - Software Engineering", url: "https://youtube.com/playlist?list=PLmXKhU9FNesTrw7n8ouPsSLEcduRlENHr&feature=shared" },
        { name: "Geeks for Geeks ( I used this )", url: "https://www.geeksforgeeks.org/software-engineering/" }
      ]
    },
    {
      name: "Artificial Intelligence and Machine Learning (AIML)",
      channels: [
        { name: "Artificial Intelligence - Mahesh Huddar", url: "https://youtube.com/playlist?list=PL4gu8xQu0_5JrWjrWNMmXNx4zFwRrpqCR&feature=shared" },
        { name: "Machine Learning - Mahesh Huddar", url: "https://youtube.com/playlist?list=PL4gu8xQu0_5JBO1FKRO5p20wc8DprlOgn&feature=shared" },
        { name: "Artificial Intelligence (AI) - Education4u", url: "https://youtube.com/playlist?list=PLrjkTql3jnm_yol-ZK1QqPSn5YSg0NF9r&feature=shared" },
        { name: "Artificial Intelligence (AI) - Easy Engineering Classes", url: "https://youtube.com/playlist?list=PLV8vIYTIdSnYsdt0Dh9KkD9WFEi7nVgbe&feature=shared" }
      ]
    },
    {
      name: "Distributed Computing (DC)",
      channels: [
        { name: "MIT OpenCourseWare - Distributed Systems", url: "https://youtube.com/playlist?list=PLrAXXmMRWjdY22N1HaRblI8tQxZI1Vxd7" },
        { name: "Martin Kleppmann - Distributed Systems", url: "https://youtube.com/playlist?list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB" },
        { name: "Gaurav Sen - System Design", url: "https://youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX" }
      ]
    },
    {
      name: "Cloud and Information Technology (CITL)",
      channels: [
        { name: "AWS Training - Cloud Practitioner", url: "https://youtube.com/playlist?list=PLv2a_5pNAko0Mijc6mnv04xeOut443Wnk" },
        { name: "Edureka - Cloud Computing", url: "https://youtube.com/playlist?list=PL9ooVrP1hQOFtZ5oAAeOgi_nH-txMcDMu&feature=shared" },
        { name: "SimpliLearn - Cloud Computing", url: "https://youtube.com/playlist?list=PLEiEAq2VkUULlNtIFhEQHo8gacvme35rz" }
      ]
    }
  ],
  "Semester 6": [
    {
      name: "System Programming and Compiler Construction (SPCC)",
      channels: [
        { name: "Gatehub - Compiler Design", url: "https://youtube.com/playlist?list=PL1QH9gyQXfguPNDTsnG90W2kBDQpYLDQr&feature=shared" },
        { name: "Gate Smashers - Compiler Design", url: "https://youtube.com/playlist?list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc" },
        { name: "Neso Academy - Compiler Design", url: "https://youtube.com/playlist?list=PLBlnK6fEyqRjT3oJxFXRgjPNzeS-LFY-q&feature=shared" }
      ]
    },
    {
      "name": "Fundamentals of Signal and Image Processing (FOSIP)",
      "channels": [
        { "name": "Perfect Computer Engineer", "url": "https://www.youtube.com/playlist?list=PLPIwNooIb9vjfb5tG52zBmSFTHXQR81zr" },
        { "name": "EC Academy - DSP", "url": "https://www.youtube.com/watch?v=cIH5o7wYNzs&list=PLXOYj6DUOGrpVb7_cCB1pZuGH4BFlp61B&ab_channel=ECAcademy" },
        { "name": "Padmasri Naban", "url": "https://www.youtube.com/playlist?list=PLMpCSwrw7iRG_78dNkxO76zezlEF81qIx" },
        { "name": "Engineer's Choice Tutor", "url": "https://www.youtube.com/playlist?list=PLnPkMfyANm0yc6SZKH76QyucOZBPUUEYP" },
        { "name": "Grade Upgrade", "url": "https://www.youtube.com/playlist?list=PLS025GDZpC8wOWOx7YkIVQFl9l3VLpH3g" },
        { "name": "Varsha's Engineering Stuff - DSP", "url": "https://www.youtube.com/playlist?list=PLS5J_kYlArq4IyzaXT9Ko6bUvxfFfJkzT" },
        { "name": "College Friendly", "url": "https://www.youtube.com/playlist?list=PLbwfaPBgAKFEPBg-OFzmjFWmRKKrYigLi" },
        { "name": "EC Academy - Image Processing", "url": "https://www.youtube.com/playlist?list=PLXOYj6DUOGrrjyRKpD0U0bIKGOXCAOHkE" },
        { "name": "Dr. Sapna Katiyar", "url": "https://www.youtube.com/playlist?list=PL3rE2jS8zxAykFjinlf6EsucLv5EA03_m" },
        { "name": "Varsha's Engineering Stuff - Image Processing", "url": "https://www.youtube.com/playlist?list=PLS5J_kYlArq5oI4Dytcdhe0CsPuFyWzcH" }
      ]
    },
    {
      name: "Blockchain Technology (BCT)",
      channels: [
        { name: "Dapp University - Blockchain", url: "https://youtube.com/playlist?list=PLS5SEs8ZftgWFuKg2wbm_0GLV0Tiy1R-n" },
        { name: "Simply Explained - Blockchain", url: "https://youtube.com/playlist?list=PLzvRQMJ9HDiTqZmbtFisdXFxul5k0F-Q4" },
        { name: "Code Eater - Blockchain Tutorial", url: "https://youtube.com/playlist?list=PLgPmWS2dQHW-BRQCQCNYgmHUfCN115pn0" },
        { name: "Codies Alert - Blockchain Tutorial", url: "https://www.codiesalert.com/courses/best-blockchain-guide-for-beginners/?v=7516fd43adaa" }
      ]
    },
    {
      name: "Ethical Hacking (EH)",
      channels: [
        { name: "The Cyber Mentor - Ethical Hacking", url: "https://youtube.com/playlist?list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47" },
        { name: "WSCube - Ethical Hacking", url: "https://youtube.com/playlist?list=PLwO5-rumi8A4J7h4Fm92TEC00gfZUk7ls&feature=shared" },
        // { name: "EC-Council - Ethical Hacking", url: "https://youtube.com/playlist?list=PLNz2D8nt4YhDBPXAWOEUeKt1QJR46H0e-" }
      ]
    },
    {
      name: "Big Data Analytics (BDA)",
      channels: [
        { name: "Edureka - Big Data", url: "https://youtube.com/playlist?list=PL9ooVrP1hQOFrYxqxb0NJCdCABPZNo0pD" },
        { name: "SimpliLearn - Big Data Analytics", url: "https://youtube.com/playlist?list=PLEiEAq2VkUUJqp1k-g5W1mo37urJQOdCZ&feature=shared" },
        { name: "At a glance - Big data analytics( I used this )", url: "https://youtube.com/playlist?list=PL9jefoqM2f-MUTHq5_1jYm9XOMS3VHTvb&feature=shared" }
      ]
    }
  ],
  "Semester 7": [
    {
      name: "Cryptography and System Security (CSS)",
      channels: [
        { "name": "Neso Academy", "url": "https://youtube.com/playlist?list=PLBlnK6fEyqRgJU3EsOYDTW7m6SUmW6kII" },
        { "name": "Abhishek Sharma", "url": "https://youtube.com/playlist?list=PL9FuOtXibFjV77w2eyil4Xzp8eooqsPp8" },
        { "name": "Abhishek Sharma - English Playlist", "url": "https://youtube.com/playlist?list=PL9FuOtXibFjWY-zqhun5kRgXdR_W9cpSB" },
        { "name": "Lab Mug", "url": "https://youtube.com/playlist?list=PLJSrGkRNEDAhyT3wkCVz9Q7D9IqSRHHWn" },
        { "name": "Chirag Bhalodiya ( I used this )", "url": "https://youtube.com/playlist?list=PLzQqHxFtQGyfiYWaDnasLdy1JPK3JS06o" },
        { "name": "Trouble Free", "url": "https://youtube.com/playlist?list=PLmAmHQ-_5ySx_dXmOwSuGGGyE8XsbYT0n&feature=shared" },
        { "name": "Kalam Technical University", "url": "https://youtube.com/playlist?list=PL9WUFDdtaj67eHsIQbUcSxEHY6JYXUSgK&feature=shared" },
        { "name": "Unbeaten Learning", "url": "https://youtube.com/playlist?list=PLzs7q4LSx_lQ4qp1G00QZUjEcVopQ62JD&feature=shared" }
      ]
    },
    {
      name: "Artificial Intelligence for Healthcare Analytics (AIH)",
      channels: [
        { name: "Artificial Intelligence - Mahesh Huddar", url: "https://youtube.com/playlist?list=PL4gu8xQu0_5JrWjrWNMmXNx4zFwRrpqCR&feature=shared" },
        { name: "Machine Learning - Mahesh Huddar", url: "https://youtube.com/playlist?list=PL4gu8xQu0_5JBO1FKRO5p20wc8DprlOgn&feature=shared" },
        { name: "Artificial Intelligence (AI) - Education4u", url: "https://youtube.com/playlist?list=PLrjkTql3jnm_yol-ZK1QqPSn5YSg0NF9r&feature=shared" },
        { name: "Artificial Intelligence (AI) - Easy Engineering Classes", url: "https://youtube.com/playlist?list=PLV8vIYTIdSnYsdt0Dh9KkD9WFEi7nVgbe&feature=shared" }
      ]
    },
    {
      name: "Advanced Data Visualization (ADV)",
      channels: [
        { name: "Curran Kelleher - Data Visualization", url: "https://youtube.com/playlist?list=PL9yYRbwpkykuK6LSMLH3bAaPpXaDUXcLV" },
        { name: "D3.js Tutorial - Data Visualization", url: "https://youtube.com/playlist?list=PL9yYRbwpkykvjkfuRslECO9c1qTq3GgUb" },
      ]
    },
    {
      name: "Consumer Electronics (CE)",
      channels: [
        { name: "Consumer Electronics (By-Abhishek Sir)", url: "https://youtube.com/playlist?list=PLy_b3qPy4eBgY9Wgo76CtEJ1-vRcr3uOc&feature=shared" },
        { name: "EducationWorld", url: "https://youtube.com/playlist?list=PLUyMayDZBhixXJWYJ_01p_BNFP6ZqgQrC&feature=shared" },
      ]
    }
  ],
  // "Extras": [
  //   {
  //     name: "Design Thinking, Innovation and Creativity",
  //     channels: [
  //       { name: "IDEO - Design Thinking", url: "https://youtube.com/playlist?list=PLJjBJNbB8VoYJQNFyB_j8N3pVmjhf3_3B" },
  //       { name: "MIT OpenCourseWare - Innovation", url: "https://youtube.com/playlist?list=PLUl4u3cNGP63B2lDhyKOsImI7FjCysOUE" }
  //     ]
  //   }
  // ]
};

// const SpaceBackground = () => (
//   <Box
//     position="fixed"
//     top="0"
//     left="0"
//     right="0"
//     bottom="0"
//     zIndex="-1"
//     bg="white"
//   >
//     {/* Stars */}
//     {[...Array(50)].map((_, i) => (
//       <Box
//         key={i}
//         position="absolute"
//         w="2px"
//         h="2px"
//         bg="blue.300"
//         borderRadius="50%"
//         top={`${Math.random() * 100}%`}
//         left={`${Math.random() * 100}%`}
//         opacity={Math.random() * 0.8 + 0.2}
//         animation={`twinkle ${Math.random() * 3 + 2}s infinite`}
//       />
//     ))}

//     {/* Larger stars */}
//     {[...Array(20)].map((_, i) => (
//       <Icon
//         key={i}
//         as={StarIcon}
//         position="absolute"
//         w="3"
//         h="3"
//         color="purple.300"
//         top={`${Math.random() * 100}%`}
//         left={`${Math.random() * 100}%`}
//         opacity={Math.random() * 0.6 + 0.4}
//         animation={`pulse ${Math.random() * 4 + 3}s infinite`}
//       />
//     ))}

//     <style jsx>{`
//       @keyframes twinkle {
//         0%, 100% { opacity: 0.2; }
//         50% { opacity: 1; }
//       }
//       @keyframes pulse {
//         0%, 100% { transform: scale(1); opacity: 0.4; }
//         50% { transform: scale(1.2); opacity: 1; }
//       }
//     `}</style>
//   </Box>
// );

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

const SubjectAccordion = ({ subject }) => (
  <AccordionItem
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
        md: "0 8px 25px rgba(128, 90, 213, 0.2)"
      }
    }}
    transition="all 0.3s ease"
  >
    <AccordionButton
      p={{ base: 3, md: 4 }}
      _hover={{ bg: "blue.50" }}
      _expanded={{ bg: "purple.50", borderColor: "purple.300" }}
      transition="all 0.3s ease"
      minH={{ base: "56px", md: "auto" }} // Touch-friendly height
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
      <AccordionIcon
        color="purple.500"
        boxSize={{ base: "20px", md: "24px" }}
      />
    </AccordionButton>
    <AccordionPanel
      pb={{ base: 3, md: 4 }}
      px={{ base: 3, md: 4 }}
      bg="gray.50"
    >
      <VStack spacing={{ base: 2, md: 3 }} align="stretch">
        {subject.channels.map((channel, idx) => (
          <ChannelLink key={idx} channel={channel} />
        ))}
      </VStack>
    </AccordionPanel>
  </AccordionItem>
);

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

export default function YouTubeChannelsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter subjects based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return subjectsData;
    }

    const filtered = {};
    Object.entries(subjectsData).forEach(([semester, subjects]) => {
      const filteredSubjects = subjects.filter(subject =>
        subject.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredSubjects.length > 0) {
        filtered[semester] = filteredSubjects;
      }
    });
    return filtered;
  }, [searchTerm]);

  return (
    <Box bg="white" minH="100vh">
      {/* <SpaceBackground /> */}
      <SidebarAdLeft
        position="left"
      />
      <Container
        maxW={{ base: "full", sm: "container.sm", md: "container.md", lg: "6xl" }}
        py={{ base: 4, sm: 6, md: 8, lg: 12 }}
        px={{ base: 3, sm: 4, md: 12, lg: 12 }}
        position="relative"
        zIndex="1"
      >
        <VStack spacing={{ base: 6, md: 8 }} align="stretch">
          {/* Header */}
          <Box textAlign="center" mb={{ base: 4, md: 8 }} >
            <Heading
              size={{ base: "lg", sm: "xl", md: "xl", lg: "2xl", xl: "2xl" }}
              bgGradient="linear(to-r, blue.600, purple.600)"
              bgClip="text"
              fontWeight="extrabold"
              mt={{ base: 7, md: 7 }}
              py={{ base: 5, md: 7 }}
              mb={{ base: 3, md: 4 }}
              px={{ base: 2, sm: 4, md: 6, lg: 12 }}
              textShadow="0 4px 8px rgba(0,0,0,0.1)"
              lineHeight={{ base: "shorter", md: "short" }}
            >
              🚀 Best Youtube Playlists
            </Heading>

            {/* Search Bar */}
            <Box
              maxW={{ base: "full", md: "full", lg: "full" }}
              px={{ base: 2, sm: 4, md: 10, lg: 12 }}
              mx={{ base: 2, sm: 4, md: 10, lg: 12 }}
            >
              <InputGroup
                px={{ base: 2, sm: 4, md: 4, lg: 6 }}
                size={{ base: "md", md: "lg" }} >
                <InputLeftElement 
                pointerEvents="none" 
                pl={{ sm: 6, md: 5 , lg: 9}}
                h={{ base: "40px", md: "48px" }}>
                  <SearchIcon
                    color="gray.400"
                    boxSize={{ base: "16px", md: "20px" }}
                  />
                </InputLeftElement>
                <Input
                  placeholder="Search for subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  bg="whiteAlpha.900"
                  backdropFilter="blur(10px)"
                  border="2px solid"
                  borderColor="blue.300"
                  borderRadius={{ base: "full", md: "full" }}
                  fontSize={{ base: "sm", sm: "md", md: "lg" }}
                  h={{ base: "40px", md: "48px" }}
                  // pl={{ base: "40px", md: "48px" }}
                  _hover={{
                    borderColor: "purple.400"
                  }}
                  _focus={{
                    borderColor: "purple.500",
                    boxShadow: {
                      base: "0 0 0 2px rgba(128, 90, 213, 0.1)",
                      md: "0 0 0 3px rgba(128, 90, 213, 0.1)"
                    }
                  }}
                  _placeholder={{
                    fontSize: { base: "sm", md: "md" },
                    color: "gray.500"
                  }}
                />
              </InputGroup>
            </Box>
          </Box>

          {/* Content */}
          {Object.keys(filteredData).length === 0 ? (
            <Box
              textAlign="center"
              p={{ base: 6, sm: 8, md: 12 }}
              bg="whiteAlpha.800"
              backdropFilter="blur(10px)"
              borderRadius={{ base: "lg", md: "xl" }}
              border="1px solid"
              borderColor="blue.200"
              mx={{ base: 2, sm: 0 }}
            >
              <Text
                fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                color="gray.600"
                fontWeight="medium"
                mb={{ base: 2, md: 3 }}
              >
                No subjects found matching "{searchTerm}"
              </Text>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.500"
                maxW={{ base: "full", md: "md" }}
                mx="auto"
              >
                Try searching with different keywords
              </Text>
            </Box>
          ) : (
            <Box px={{ base: 4, md: 10, lg: 12 }}>
              {Object.entries(filteredData).map(([semester, subjects]) => (
                <SemesterSection
                  key={semester}
                  semester={semester}
                  subjects={subjects}
                />
              ))}
            </Box>
          )}
        </VStack>
      </Container>
      <SidebarAdRight
        position="right"
      />
    </Box>
  );
}