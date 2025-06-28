import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();

  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment)
    .map(segment => decodeURIComponent(segment));

  const formatDisplayName = (name) => {
    return name.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  return (
    <Breadcrumb
      spacing={{ base: "4px", sm: "6px", md: "8px", lg: "10px", xl: "12px" }}
      separator={<Icon as={ChevronRightIcon} color="gray.500" />}
      fontSize={{ base: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl" }}
      // left={{ base: 1, sm: 2, md: 15, lg: 12 }}
      // right={{ base: 1, sm: 2, md: 5, lg: 12 }}
      pl={{ base: 1, sm: 2, md: 12, lg: 12 }}
      ml={{ base: 1, sm: 2, md: 5, lg: 10 }}
      mb={{ base: 2, sm: 3, md: 4, lg: 5 }}
      pb={{ base: 1, sm: 2, md: 3 }}
      pt={{ base: 7, sm: 7, md: 7, lg: 8 }}
      mt={{ base: 7, sm: 7, md: 7, lg: 9 }}
      bg="gray.50" // Background color for better visibility
      borderRadius="md" // Rounded corners
      boxShadow="sm" // Subtle shadow for depth
      display={{ base: "flex" }}
    >
      <BreadcrumbItem>
        <BreadcrumbLink 
          as={RouterLink} 
          to="/"
          _hover={{ textDecoration: 'underline', color: 'blue.500' }} // Hover effects
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      {pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const displayName = formatDisplayName(segment);
        const isLast = index === pathSegments.length - 1;

        return (
          <BreadcrumbItem
            key={path}
            isCurrentPage={isLast}
            fontWeight={isLast ? 'bold' : 'normal'} // Embolden active directory
          >
            <BreadcrumbLink
              as={RouterLink}
              to={path}
              _hover={{ textDecoration: 'underline', color: 'blue.500' }} // Hover effects
              color={isLast ? 'blue.600' : 'linear(to-r, cyan.400, blue.500, purple.600)'} 
            >
              {displayName}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
