import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ activeClassName, href, children, className }) => {
  const router = useRouter();

  // Combine provided className with activeClassName if the current route matches
  let finalClassName = className || "";
  if (router.asPath === href && activeClassName) {
    finalClassName += ` ${activeClassName}`;
  }

  // Note: No need to use React.Children.only here as we're not expecting component children
  return (
    <Link href={href} passHref className={finalClassName}>
      {children}
    </Link>
  );
};

export default ActiveLink;
