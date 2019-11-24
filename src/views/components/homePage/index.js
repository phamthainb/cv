import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { SectionBanner } from "@containers";


export class HomePage extends Component {

  render() {
    return (
      <main id="main">
        <Helmet>
          <title>Trang chủ</title>
        </Helmet>
        <SectionBanner />
      </main>
    );
  }
}

export default HomePage;
