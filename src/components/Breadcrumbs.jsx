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
      spacing="8px"
      separator={<Icon as={ChevronRightIcon} color="gray.500" />}
      fontSize="lg"
      pl={4} // Adding padding
      ml={6}
      bg="gray.50" // Background color for better visibility
      borderRadius="md" // Rounded corners
      boxShadow="sm" // Subtle shadow for depth
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
              color={isLast ? 'blue.600' : 'gray.700'} // Different color for active directory
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
