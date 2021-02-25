import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

//css module: phải đặt tên file theo format [tên file].module.css
import LightMode from "./CustomCss/LightMode.module.css";
import DarkMode from "./CustomCss/DarkMode.module.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Col, Row, Navbar, NavbarBrand, Collapse } from "reactstrap";

const DemoUI = React.lazy(() => import("./Router/DemoUI"));
const ReactCharJS2 = React.lazy(() => import("./Router/ReactCharJS2"));
const InputReactrap = React.lazy(() => import("./Router/InputReactrap"));
const FormReactrap = React.lazy(() => import("./Router/FormReactrap"));
const ReactNumberFormat = React.lazy(() =>import("./Router/ReactNumberFormat"));
const ExportExcel = React.lazy(() => import("./Router/ExportExcel"));
const ImportExcel = React.lazy(() => import("./Router/ImportExcel"));
const FontAwesomeIcon = React.lazy(() => import("./Router/FontAwesomeIcon"));
const ReactPrint = React.lazy(() => import("./Router/ReactPrint"));
const ReactCamera = React.lazy(() => import("./Router/ReactCamera"));
const Moment = React.lazy(() => import("./Router/Moment"));
const ReactZoom = React.lazy(() => import("./Router/ReactZoom"));
const PublicIP = React.lazy(() => import("./Router/PublicIP"));

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch({ type: "getData" }),
  };
};

const mapStateToProps = (state) => {
  return {
    initialState: state.name,
  };
};

class App extends Component {
  lightMode = {
    scrollPanel: LightMode.ScrollPanel,
    sideMenu: LightMode.sidebarMenu,
    navbar: LightMode.navbar,
    background: LightMode.background,
  };

  darkMode = {
    scrollPanel: DarkMode.ScrollPanel,
    sideMenu: DarkMode.sidebarMenu,
    navbar: DarkMode.navbar,
    background: DarkMode.background,
  };

  constructor(props) {
    super(props);
    this.state = {
      mode: this.lightMode,
    };
  }

  componentDidMount() {
    console.log(this.props.initialState);
  }

  onChangeMode = () => {
    if (this.state.mode === this.lightMode) {
      this.setState({
        mode: this.darkMode,
      });
    } else {
      this.setState({
        mode: this.lightMode,
      });
    }
  };

  render() {
    let styleDiv = { width: "100%", margin: "0px", padding: "0px" };

    return (
      <Row className={this.state.mode.background} style={styleDiv}>
        <Col
          md={2}
          style={{
            borderRight: "3px solid #1969a8",
            width: "100%",
            margin: "0px",
            paddingRight: '0px'
          }}
        >
          <div
            className={this.state.mode.scrollPanel}
            style={{ margin: "0px", overflowX: "hidden" }}
          >
            <div className={this.state.mode.sideMenu}>
              <a href="#/DemoUI">
                <i className="fab fa-uikit" />
                <span>Demo UI</span>
              </a>
              <a href="#/ReactCharJS2">
                <i className="fas fa-chart-bar" />
                <span>React CharJS 2</span>
              </a>
              <a href="#/InputReactrap">
                <i className="fas fa-italic" />
                <span>Input Reacstrap</span>
              </a>
              <a href="#/FormReactrap">
                <i className="far fa-object-group" />
                <span>Form Reactrap</span>
              </a>
              <a href="#/ReactNumberFormat">
                <i className="fas fa-dollar-sign" />
                <span>Number Format</span>
              </a>
              <a href="#/ExportExcel">
                <i className="fas fa-table" />
                <span>Export Excel</span>
              </a>
              <a href="#/ImportExcel">
                <i className="fas fa-file-import" />
                <span>Read excel</span>
              </a>
              <a href="#/ReactPrint">
                <i className="fas fa-print" />
                <span>React print</span>
              </a>
              <a href="#/FontAwesomeIcon">
                <i className="fab fa-accessible-icon" />
                <span>Font Awesome Icon</span>
              </a>
              <a href="#/ReactCamera">
                <i className="fas fa-camera" />
                <span>React Camera</span>
              </a>
              <a href="#/Moment">
                <i class="far fa-calendar-alt" />
                <span>Moment</span>
              </a>
              <a href="#/ReactZoom">
                <i class="fas fa-search" />
                <span>React Zoom</span>
              </a>
              <a href="#/PublicIP">
                <i class="fas fa-wifi" />
                <span>Public Ip</span>
              </a>
            </div>
          </div>
        </Col>

        <Col md={10} style={styleDiv}>
          <Row style={styleDiv}>
            <Col md={12} style={styleDiv}>
              <Navbar className={this.state.mode.navbar} light expand="md">
                <NavbarBrand href="/">
                  <h5 style={{ color: "white" }}>Project Demo (click vào title để mở doc tương ứng)</h5>
                </NavbarBrand>
                <Collapse navbar />
                <NavbarBrand style={{ color: "white" }}>
                  <label className="switch" style={{ zoom: "70%" }}>
                    <input id={'btnChangeMode'} type="checkbox" onClick={this.onChangeMode} />
                    <span className="slider round" />
                  </label>
                </NavbarBrand>
              </Navbar>
            </Col>
            <Col md={12} style={styleDiv}>

              {/* Route trong React */}           
              <HashRouter>
                <React.Suspense fallback={<div>Loading...</div>}>
                  <div
                    className="ScrollPanel"
                    style={{ overflowX: "hidden", height: "90vh" }}
                  >
                    <Switch>
                      {/* default route */}
                      <Route exact path="/">
                        <Redirect to="/DemoUI" />
                      </Route>

                      <Route
                        exact
                        path="/DemoUI"
                        name=""
                        render={(props) => (
                          <DemoUI
                            {...props}
                            title={"Demo UI"} //Truyền dữ liệu sang 1 componet khác, 
                            url={"https://codingui.dev/"}
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/ReactCharJS2"
                        name=""
                        render={(props) => (
                          <ReactCharJS2
                            {...props}
                            title={"React CharJS2"}
                            url={"https://www.chartjs.org/"}
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/InputReactrap"
                        name=""
                        render={(props) => (
                          <InputReactrap
                            {...props}
                            title={"Input Reacstrap"}
                            url={
                              "https://reactstrap.github.io/components/form/#Input-Types"
                            }
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/FormReactrap"
                        name=""
                        render={(props) => (
                          <FormReactrap
                            {...props}
                            title={"Form Reactrap"}
                            url={
                              "https://reactstrap.github.io/components/form/"
                            }
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/ReactNumberFormat"
                        name=""
                        render={(props) => (
                          <ReactNumberFormat
                            {...props}
                            title={"React Number Format"}
                            url={
                              "https://www.npmjs.com/package/react-number-format"
                            }
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/ExportExcel"
                        name=""
                        render={(props) => (
                          <ExportExcel
                            {...props}
                            title={"Export Excel"}
                            url={"https://www.npmjs.com/package/tableexport"}
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/ImportExcel"
                        name=""
                        render={(props) => (
                          <ImportExcel
                            {...props}
                            title={"Read Excel"}
                            url={
                              "https://www.npmjs.com/package/read-excel-file"
                            }
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/ReactPrint"
                        name=""
                        render={(props) => (
                          <ReactPrint
                            {...props}
                            title={"React Print"}
                            url={"https://www.npmjs.com/package/react-to-print"}
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/FontAwesomeIcon"
                        name=""
                        render={(props) => (
                          <FontAwesomeIcon
                            {...props}
                            title={"Font Awesome Icon"}
                            url={
                              "https://fontawesome.com/how-to-use/on-the-web/using-with/react"
                            }
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/ReactCamera"
                        name=""
                        render={(props) => (
                          <ReactCamera
                            {...props}
                            title={"React camera"}
                            url={"https://www.npmjs.com/package/react-webcam"}
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/Moment"
                        name=""
                        render={(props) => (
                          <Moment
                            {...props}
                            title={"Moment"}
                            url={"https://momentjs.com/"}
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/ReactZoom"
                        name=""
                        render={(props) => (
                          <ReactZoom
                            {...props}
                            title={"React Zoom"}
                            url={
                              "https://www.npmjs.com/package/react-zoom-pan-pinch"
                            }
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/PublicIP"
                        name=""
                        render={(props) => (
                          <PublicIP
                            {...props}
                            title={"Public Ip"}
                            url={
                              "https://www.npmjs.com/package/public-ip"
                            }
                          />
                        )}
                      />
                    </Switch>
                  </div>
                </React.Suspense>
              </HashRouter>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
