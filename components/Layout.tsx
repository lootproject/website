import React, { ReactElement, useState } from 'react';
import { MobileNav } from "./MobileNav"
import { Header } from "./Header"
import { Head } from "./Head"
import { Footer } from "./Footer"
import { headerLinks } from "../utils/headerLinks"
import TagManager from 'react-gtm-module'
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
      {/* Google Tag Manager (noscript) */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-2NMMWQ34GS" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
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

