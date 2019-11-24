import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AOS from "aos";
import { Header, Footer } from "@containers";
import routes from "@states/routes";


class Layout extends Component {
  componentDidMount() {
    AOS.init({
      duration: 500,
      offset: 0,
      delay: 0,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    if ($(this).scrollTop() >= 42) {
      $(".header-nav").addClass("scrolled");
    } else {
      $(".header-nav").removeClass("scrolled");
    }
    $(window).on("load", function () {
      if ($(this).scrollTop() >= 42) {
        $(".header-nav").addClass("scrolled");
      } else {
        $(".header-nav").removeClass("scrolled");
      }
    });
    $(document).scroll(function () {
      if ($(this).scrollTop() >= $("#main").offset().top) {
        $(".back-top").addClass("active");
      } else {
        $(".back-top").removeClass("active");
      }
      if ($(this).scrollTop() > 42) {
        $("#header").addClass("scrolled");
      } else {
        $("#header").removeClass("scrolled");
      }
    });
    $(".back-top").on("click", function () {
      $(".back-top").removeClass("active");
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
    });
  }
  showRoutes = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return( !route.childs  ? (
          <Route
            path={route.path}
            component={route.main}
            key={index}
            exact={route.exact}
          />
        ) : (
          route.childs.map((routeChildren, index) => {
            return (
              <Route
                path={`${route.path}/${routeChildren.path}`}
                component={routeChildren.main}
                key={index}
                exact={routeChildren.exact}
              />
            )
          })
        )
      )
      })
    }
    return result;
  }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          {this.showRoutes(routes)}
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Layout;
