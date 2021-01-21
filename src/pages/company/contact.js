import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";
import ContactPage from "../../sections/Company/Contact";

class Contact extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle />
          <SEO title="Contact" />
          <Navigation />
          <ContactPage />
          <Footer />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default Contact;
