import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import routes from "@states/routes";


// header-top demo data

const topLeft = [
  {
    to: "#",
    icon: "fab fa-facebook-f"
  },
  {
    to: "#",
    icon: "fab fa-twitter"
  },
  {
    to: "#",
    icon: "fab fa-vimeo-v"
  },
  {
    to: "#",
    icon: "fab fa-instagram"
  }
];
const topRight = [
  {
    to: "",
    name: "chi sẻ design"
  },
  {
    to: "",
    name: "chi sẻ code"
  },
  {
    to: "",
    name: "blockchain"
  },
  {
    to: "",
    name: "Vệ tinh"
  }
];

const MenuLink = ({
  label,
  to,
  activeOnlyWhenExact,
  icon,
  scrollTo,
  childs
}) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match, history }) => {
        var active = match ? "active" : "";
        if (icon) {
          return (
            <li className="menu-list__item" data-aos="fade-down">
              <Link to={to} className={`menu-list__link ${active}`}>
                <span className="nav__icon">
                  <i className={icon} />
                </span>
                {label}
              </Link>
            </li>
          );
        } else if (scrollTo) {
          var checkActive = history.location.search.slice(1);
          var active = checkActive === scrollTo ? "active" : "";
          return (
            <li className="menu-list__item" data-aos="fade-down">
              <Link
                to={{
                  pathname: to,
                  search: scrollTo
                }}
                className={`menu-list__link ${active}`}
                scroll-to={scrollTo}
              >
                {label}
              </Link>
            </li>
          );
        } else {
          return (
            <li className="menu-list__item" data-aos="fade-down">
              <Link to={to} className={`menu-list__link ${active}`}>
                {label}
              </Link>
              {childs ? (
                <ul className="dropdown-list">
                  {
                    childs.map((item, index) => {
                      return <Route
                      key={index}
                      path={to}
                      exact={activeOnlyWhenExact}
                      children={({history }) => {
                        var activeDropdown = `${to}/${item.path}` ===  history.location.pathname ? "active" : "";
                        return (
                          <li className="dropdown-list__item" key={index}>
                            <Link
                              to={`${to}/${item.path}`}
                              className={`dropdown-list__link ${activeDropdown}`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        );
                      }}/>
                    })
                  }
                </ul>
              ) : (
                ""
              )}
            </li>
          );
        }
      }}
    />
  );
};
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false,
      toggleMenuTop: false,
    };
  }
  showMenu = menus => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.path}
            activeOnlyWhenExact={menu.exact}
            scrollTo={menu.scrollTo}
            childs={menu.childs}
          />
        );
      });
    }
    return result;
  };
  toggleMenu = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  };
  toggleMenuTop = () => {
    this.setState({
      toggleMenuTop: !this.state.toggleMenuTop
    });
  };
  render() {
    const { toggleMenu } = this.state;
    return (
      <div id="header">
        <div className="header-top">
          <div className="bs-container">
            <div className="top-content clearfix">
              <div className="header-social">
                <div className="social-item item-language">
                  <p className="title">
                    ENG <i className="fas fa-chevron-down"></i>
                  </p>
                  <ul className="social-list">
                    <li className="social-list__item">
                      <a href="#" className="social-item__link">
                        ENG
                      </a>
                    </li>
                    <li className="social-list__item">
                      <a href="#" className="social-item__link">
                        VN
                      </a>
                    </li>
                  </ul>
                </div>
                {topLeft.map((item, index) => {
                  return (
                    <div className="social-item" key={index}>
                      <Link to={item.to} className="link">
                        <i className={item.icon}></i>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="header-conect">
                <span className="show__top" title="menu top" onClick={this.toggleMenuTop}>
                  <i className="far fa-caret-square-down"></i>
                </span>
                <div className={`menu-top ${this.state.toggleMenuTop ? "active" : ""}`}>
                  <span className="close__top" title="close" onClick={this.toggleMenuTop}>
                    <i className="far fa-caret-square-left"></i>
                  </span>
                  <ul className="conect-list clearfix">
                    {
                        topRight.map((item, index)=>{
                          return(
                            <li className="conect-list__item" key={index}>
                              <Link to={item.to}  className="conect-list__link">
                                  { item.name }
                              </Link>
                            </li>
                          )
                        })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav">
          <div className="bs-container">
            <div className="nav-content clearfix">
              <div className="logo" data-aos="fade-down">
                <Link to="/">
                  <img src="static/images/logo.gif" alt="" />
                </Link>
              </div>
              <div className="nav">
                <span className="show__menu" onClick={this.toggleMenu}>
                  <i className="fas fa-bars" />
                </span>
                <div className={`menu ${toggleMenu ? "active" : ""}`}>
                  <span className="close__menu">
                    <i
                      className="far fa-window-close"
                      onClick={this.toggleMenu}
                    />
                  </span>
                  <ul className="menu-list clearfix">
                    {this.showMenu(routes)}
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
