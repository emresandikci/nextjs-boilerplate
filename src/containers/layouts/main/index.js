import React from 'react';
import { Navbar, Box, Button, Text } from 'esducad-ui';
import { Link, Routes } from 'server/routes';

function MainLayout({ children }) {
  return (
    <Box>
      <Navbar justifyContent="space-between">
        <Box>
          <Text fontWeight="800">Logo</Text>
        </Box>
        <Box>
          <Link route={Routes.home.name}>
            {/* <a> */}
            <Button variant="text">Home</Button>
            {/* </a> */}
          </Link>
          <Link route={Routes.about.name}>
            {/* <a> */}
            <Button variant="text">About</Button>
            {/* </a> */}
          </Link>
        </Box>
      </Navbar>
      {children}
    </Box>
  );
}

export default MainLayout;
