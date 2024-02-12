import React from "react";
import { Container } from "reactstrap";
import Head from "next/head";
import { useRouter } from "next/router";

const PageHeader = ({ header }) => (
  <div className="page-header">
    <h1 className="page-header-title">{header}</h1>
  </div>
);

const BasePage = (props) => {
  const {
    noWrapper,
    indexPage,
    className = "",
    header,
    title = "Portfolio - Shiyan Gong", //default content
    metaDescription = "My name is Shiyan Gong and I am a full stack web developer.",
    children,
    canonicalPath,
  } = props;

  const pageType = indexPage ? "index-page" : "base-page";
  const router = useRouter();
  const Wrapper = noWrapper ? React.Fragment : Container;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" key="description" content={metaDescription} />
        <meta name="title" key="title" content={title} />
        <meta property="og:title" key="og:title" content={title} />
        <meta property="og:locale" key="og:locale" content="en_NZ" />
        <meta
          property="og:url"
          key="og:url"
          content={`${process.env.BASE_URL}${router.asPath}`}
        />
        <meta property="og:type" key="og:type" content="website" />
        <meta
          property="og:description"
          key="og:description"
          content={metaDescription}
        />
        <meta
          property="og:image"
          key="og:image"
          content={`${process.env.BASE_URL}/images/section-1.jpg`}
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link
          rel="canonical"
          href={`${process.env.BASE_URL}${
            canonicalPath ? canonicalPath : router.asPath
          }`}
        />
      </Head>
      <div className={`${pageType} ${className}`}>
        <Wrapper>
          {header && <PageHeader header={header} />}
          {children}
        </Wrapper>
      </div>
    </>
  );
};

export default BasePage;
