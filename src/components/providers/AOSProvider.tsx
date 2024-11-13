'use client';
import AOS from 'aos';

import 'aos/dist/aos.css';
import { Fragment, useEffect } from 'react';

const AOSProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    AOS.init({
      offset: 0, // offset (in px) from the original trigger point
      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 1000,
      once: false,
      mirror: false,
    });
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default AOSProvider;