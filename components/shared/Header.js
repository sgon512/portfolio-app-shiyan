import React, { useState } from "react";
import Link from "next/link";
import { isAuthorized } from "@/utils/auth0";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useGetData } from "@/actions/index";
import ActiveLink from "components/shared/ActiveLink";

const BsNavLink = (props) => {
  const { href, title, className = "" } = props;

  return (
    <ActiveLink
      activeClassName="active"
      href={href}
      className={`nav-link port-navbar-link ${className}`}
    >
      {title}
    </ActiveLink>
  );
};
const LoginLink = () => <BsNavLink href="/api/v1/login" title="Login" />;

const LogoutLink = () => <BsNavLink href="/api/v1/logout" title="Logout" />;

const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu"
      nav
      isOpen={isOpen}
      toggle={() => setIsOpen(!isOpen)}
    >
      <DropdownToggle className="port-dropdown-toggle" nav caret>
        Admin
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/portfolios/new"
            title="Create Portfolio"
          />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const Header = (className) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { data, loading, error } = useGetData("/api/v1/me");

  return (
    <div>
      <Navbar
        className={`port-navbar port-default absolute ${className}`}
        dark
        expand="md"
        style={{ backgroundColor: "#2c3e50" }}
      >
        <div className="navbar-brand">
          <Link href="/" className="port-navbar-brand">
            Shiyan Gong
          </Link>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolios" />
            </NavItem>
            {/* <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs" />
            </NavItem> */}
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="secret" />
            </NavItem>
          </Nav>
          <Nav navbar>
            {!loading && (
              <>
                {data && (
                  <>
                    {isAuthorized(data) && <AdminMenu />}
                    <NavItem className="port-navbar-item">
                      <LogoutLink />
                    </NavItem>
                  </>
                )}
                {!data && (
                  <NavItem className="port-navbar-item">
                    <LoginLink />
                  </NavItem>
                )}
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
