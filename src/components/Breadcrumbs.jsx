// components/Breadcrumbs.jsx
import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  return (
    <Breadcrumb size="large">
      <Breadcrumb.Section as={Link} to="/">
        Home
      </Breadcrumb.Section>
      {pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        return (
          <React.Fragment key={path}>
            <Breadcrumb.Divider icon="right angle" />
            <Breadcrumb.Section
              as={Link}
              to={path}
              active={index === pathSegments.length - 1}
            >
              {decodeURIComponent(segment)}
            </Breadcrumb.Section>
          </React.Fragment>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;