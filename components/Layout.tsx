import React, { ReactElement, useState } from 'react';
import { MobileNav } from "./MobileNav"
import { Header } from "./Header"
import { Head } from "./Head"
import { Footer } from "./Footer"
import { headerLinks } from "../utils/headerLinks"
export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {

  const [hidden, setHidden] = useState(false);

  return (
    <div>
      {/* Meta */}
      <Head />
      {/* End Google Tag Manager (noscript) */}
      {/* Top header */}
      <Header links={headerLinks} hidden={hidden} onClick={() => setHidden(hidden => !hidden)} />

      {/* Mobile Nav */}
      <MobileNav links={headerLinks} hidden={hidden} onClick={() => setHidden(hidden => !hidden)} />

      {/* Page content */}
      <div>{children}</div>

      {/* Bottom footer */}
      <Footer />
    </div>
  );
}

