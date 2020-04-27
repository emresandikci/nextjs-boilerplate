import React from 'react';
import { Navbar, Box, Button, Text } from 'esducad-ui';
import Link from 'next/link';

function MainLayout({ children }) {
  return (
    <Box>
      <Navbar justifyContent="space-between">
        <Box>
          <Text fontWeight="800">Logo</Text>
        </Box>
        <Box>
          <Link href="/">
            <a>
              <Button variant="text">Home</Button>
            </a>
          </Link>
          <Link href="about">
            <a>
              <Button variant="text">About</Button>
            </a>
          </Link>
          <Button variant="text">Contact</Button>
          <Button variant="text">Register</Button>
        </Box>
      </Navbar>
      {children}
    </Box>
  );
}

export default MainLayout;
