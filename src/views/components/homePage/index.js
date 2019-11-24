import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { SectionBanner } from "@containers";
import { Modal, Slide, Tab, Collapse, Form, BsImage } from "@styles/demoComponent";


export class HomePage extends Component {
  //scroll khi dự án one page
  // returnPosition = (location) => {
  //     var search = location.search.slice(1);
  //     var position = "";
  //     switch (search) {
  //         case 'trang-chu':
  //             position = 'body';
  //             break;
  //         case 'bang-xep-hang':
  //             position = '.section-result';
  //             break;
  //         case 'danh-sach-bai-thi':
  //             position = '.list-index';
  //             break;
  //         case 'thu-vien-tem-xe':
  //             position = '.section-stamp';
  //             break;
  //         case 'tin-tuc':
  //             position = '.section-news';
  //             break;
  //         default:
  //             position = "body";
  //             break
  //     }
  //     if (position) {
  //         var top = 0;
  //         if (position !== '.section-result') {
  //             top = -150;
  //         }
  //         if (position === '.section-stamp') {
  //             top = 50;
  //         }
  //         $("html, body").animate({
  //             scrollTop: $(position).offset().top + top
  //         }, 1000);
  //     }
  // }
  // componentDidMount() {
  //     this.props.actGetSetting();

  //     this.unlisten = this.props.history.listen((location, action) => {
  //         this.returnPosition(location);
  //     });
  //     this.returnPosition(this.props.history.location);

  // }
  // componentWillUnmount() {
  //     this.unlisten();
  // }

  render() {
    return (
      <main id="main">
        <Helmet>
          <title>Trang chủ</title>
        </Helmet>
        <SectionBanner />
        <h1>Modal</h1>
        <Modal/>
        <h1>Slide</h1>
        <Slide/>
        <h1>Tab</h1>
        <Tab/>
        <h1>Collapse</h1>
        <Collapse/>
        <h1>Form</h1>
        <Form/>
        <h1>Lazyload images</h1>
        <BsImage/>
      </main>
    );
  }
}

export default HomePage;
