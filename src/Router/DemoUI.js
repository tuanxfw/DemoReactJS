import React, { Component } from "react";
import {
  Alert,
  Button,
  Col,
  Form,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Toast,
  ToastBody,
  ToastHeader,
} from "reactstrap";
import Slides from "../Components/Slides";

class DemoUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alertDismiss: true,
      toastDismiss: true,
      activeTab: "1",

      time: {},
      interval: null,
    };

    this.refGetValue = React.createRef();
  }

  // Life cycle

  //Diễn ra sau khi chạy hàm render
  componentDidMount() {
    try {
      let interval = setInterval(() => {
        let d = new Date();

        let time = {};
        time.date = d.getDate();
        time.hour = d.getHours();
        time.minute = d.getMinutes();
        time.second = d.getSeconds();
        time.miliSecond = d.getMilliseconds();

        this.setState({ time: time });
      }, 1000);

      this.setState({ interval: interval });
    } catch (error) {
      console.log(error);
    }
  }

  //Diễn ra trước khi close
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  //Diễn ra sau constructor
  render() {
    let ColStyle = { textAlign: "left", padding: "10px 25px 0px 25px" };
    let items = [
      {
        src:
          "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
        altText: "Slide 1",
        caption: "Slide 1",
      },
      {
        src:
          "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
        altText: "Slide 2",
        caption: "Slide 2",
      },
      {
        src:
          "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
        altText: "Slide 3",
        caption: "Slide 3",
      },
    ];

    let cssSlide = `
            .divCarousel .custom-tag{
                background: black; 
                height: 250px;
            } 
            .divCarousel img{
                width: 100%;
            } 
            .divCarousel .carousel-caption h3{
                -webkit-text-stroke: 1px #202020;
            }
            .divCarousel .carousel-caption p{
                -webkit-text-stroke: 0.2px #202020;
            }
        `;

    return (
      <Row>
        <Col md={12}>
          <h4 style={{ textAlign: "center" }}>
            <a
              href={this.props.url}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              {this.props.title}
            </a>
          </h4>
          <Row>
            <Col md={12} style={{ textAlign: "left" }}>
              <p>
                <br />
              </p>
            </Col>

            <Col md={6} style={ColStyle}>
              <p>Row Col</p>
              <Row md={4} style={{ textAlign: "Center" }}>
                <Col>1</Col>
                <Col>2</Col>
                <Col>3</Col>
                <Col>4</Col>
                <Col>5</Col>
                <Col>6</Col>
                <Col>7</Col>
                <Col>8</Col>
                <Col>9</Col>
                <Col>10</Col>
                <Col>11</Col>
                <Col>12</Col>
                <Col>13</Col>
                <Col>14</Col>
                <Col>15</Col>
              </Row>
            </Col>

            <Col md={6} style={ColStyle}>
              <p>Slide with css string param</p>
              <Slides items={items} css={cssSlide} />
            </Col>

            <Col md={6} style={ColStyle}>
              <p>Alert, Toast</p>
              <Alert
                color="primary"
                fade={true}
                isOpen={this.state.alertDismiss}
                toggle={() => {
                  this.setState({ alertDismiss: false });
                }}
              >
                I am a primary alert and I can be dismissed without animating!
              </Alert>
              <Toast fade={true} isOpen={this.state.toastDismiss}>
                <ToastHeader
                  toggle={() => {
                    this.setState({ toastDismiss: false });
                  }}
                  icon="primary"
                >
                  Reactstrap
                </ToastHeader>
                <ToastBody>
                  This is a toast on a white background — check it out!
                </ToastBody>
              </Toast>
            </Col>

            <Col md={6} style={ColStyle}>
              <p>Tab</p>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={
                      this.state.activeTab === "1" ? "active" : "activeTab "
                    }
                    onClick={() => {
                      this.setState({ activeTab: "1" });
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Tab 1
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={
                      this.state.activeTab === "2" ? "active" : "activeTab "
                    }
                    onClick={() => {
                      this.setState({ activeTab: "2" });
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Tab 2
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <h4>Tab 1 Contents</h4>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      <h4>Tab 2 Contents</h4>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>

            <Col md={6} style={ColStyle}>
              <style>
                {`
                  .fieldset-style {
                    padding: 10px 10px 10px 10px;
                    border: 2px solid black;
                    border-radius: 5px;
                  }

                  .fieldset-style legend {
                    font-size: 23px;
                    width: auto;
                    padding: 0px 10px 5px 10px;
                  }
                `}
              </style>
              <p>Fieldset</p>
              <fieldset className="fieldset-style">
                <legend>Button</legend>
                text
              </fieldset>
            </Col>

            <Col md={6}>
              <style>
                {`
                  .countdown {
                    display: flex;
                    justify-content: center;
                    padding: 2rem 0;
                    border-radius: 4px;
                    background-color: #1a1c28;
                    color: white;
                    font-size: 2rem;
                 }
                 
                 .countdown-item {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    padding: 0px 2rem;
                    width: 25%;
                 }
                 
                 .countdown-number {
                    font-weight: 600;
                    font-size: 5rem;
                    margin-bottom: 5px;
                 }
                 
                 .countdown-text {
                    font-weight: 300;
                    font-size: 1.2rem;
                 }
                 
                 @media screen and (max-width: 767px) {
                    .countdown-number {
                       font-size: 3.5rem;
                    }
                 }
                `}
              </style>
              <p>Countdown Time</p>
              <div>
                <ul className="countdown">
                  {/* <li className="countdown-item">
                    <span className="countdown-number days">{this.state.time.date}</span>
                    <span className="countdown-text">days</span>
                  </li> */}
                  <li className="countdown-item">
                    <span className="countdown-number hours">
                      {this.state.time.hour}
                    </span>
                    <span className="countdown-text">hours</span>
                  </li>
                  <li className="countdown-item">
                    <span className="countdown-number minutes">
                      {this.state.time.minute}
                    </span>
                    <span className="countdown-text">minutes</span>
                  </li>
                  <li className="countdown-item">
                    <span className="countdown-number seconds">
                      {this.state.time.second}
                    </span>
                    <span className="countdown-text">seconds</span>
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={12} style={ColStyle}>
              <p>Embed</p>
              <embed
                width="100%"
                src="http://webcoban.vn/file/ban-khai-nhan-khau.pdf"
              />
            </Col>     
          </Row>
        </Col>
      </Row>
    );
  }
}

export default DemoUI;
