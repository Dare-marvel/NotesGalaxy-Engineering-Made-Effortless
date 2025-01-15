// components/Breadcrumbs.jsx
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
    >
      <BreadcrumbItem>
        <BreadcrumbLink as={RouterLink} to="/">
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
          >
            <BreadcrumbLink
              as={RouterLink}
              to={path}
              isCurrentPage={isLast}
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