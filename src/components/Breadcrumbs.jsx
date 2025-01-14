// components/Breadcrumbs.jsx
import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  // Filter out empty segments and decode URI components
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment)
    .map(segment => decodeURIComponent(segment));

  // Helper function to create pretty display names
  const formatDisplayName = (name) => {
    return name.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  return (
    <Breadcrumb size="large">
      <Breadcrumb.Section as={Link} to="/">
        Home
      </Breadcrumb.Section>
      {pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const displayName = formatDisplayName(segment);
        
        return (
          <React.Fragment key={path}>
            <Breadcrumb.Divider icon="right angle" />
            <Breadcrumb.Section
              as={Link}
              to={path}
              active={index === pathSegments.length - 1}
            >
              {displayName}
            </Breadcrumb.Section>
          </React.Fragment>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;