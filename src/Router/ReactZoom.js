import React, { Component } from "react";
import { Button, Col, Row, Table } from "reactstrap";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

class ReactZoom extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    let ColStyle = { textAlign: "left", padding: "10px 25px 0px 25px" };

    return (
      <Row>
        <Col md={12}>
          <h4 style={{ textAlign: "center" }}>
            <a href={this.props.url} target={"_blank"}>
              {this.props.title}
            </a>
          </h4>
          <Row>
              <style>
                  {`
                  .react-transform-component{
                    width: 100% !important;
                  }
                  .react-transform-element{
                    width: 100% !important;
                  }
                  `}
              </style>
            <Col md={12} style={{ textAlign: "left" }}>
              <p>-Zoom 1 Component nào đó</p>
            </Col>

            <Col md={12} style={ColStyle}>
              <p>Demo</p>
              <TransformWrapper
                defaultScale={1}
                defaultPositionX={200}
                defaultPositionY={100}
              >
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                  <React.Fragment>
                    <div className="tools">
                      <Button onClick={zoomIn}>+</Button>
                      <Button onClick={zoomOut}>-</Button>
                      <Button onClick={resetTransform}>x</Button>
                    </div>
                    <TransformComponent>
                      <img style={{width: '100%'}} src="https://i.imgur.com/uaKCGCx.jpeg" alt="test" />
                    </TransformComponent>
                  </React.Fragment>
                )}
              </TransformWrapper>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ReactZoom;
