import React, { Component } from "react";
import { Col, Row, Button } from "reactstrap";
import Webcam from "react-webcam";

class ReactCamera extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataImage: "",
    };

    this.refCamera = React.createRef();
  }

  onTakePicture = () => {
    try {
      let imageSoure = this.refCamera.current.getScreenshot({
        width: 1200,
        height: 900,
      });

      this.setState({
        dataImage: imageSoure,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let ColStyle = { textAlign: "left", padding: "10px 25px 0px 25px" };
    return (
      <Row>
        <Col md={12}>
          <h4 style={{ textAlign: "center" }}>
            <a href={this.props.url} target={"_blank"} rel="noopener noreferrer">
              {this.props.title}
            </a>
          </h4>
          <Row>
            <Col md={12} style={{ textAlign: "left" }}>
              <p>
                -Truy cập vào camera, lấy ảnh về dưới dạng base64
                <br />
              </p>
            </Col>

            <Col md={6} style={ColStyle}>
              <p>Camera</p>
              <Button style={{ width: "100%" }} onClick={this.onTakePicture}>
                <Webcam
                  ref={this.refCamera}
                  width={"100%"}
                  height={"500px"} //kích thước
                  mirrored={false} //xoay ảnh
                  audio={false}
                  screenshotQuality={0.92}
                  screenshotFormat="image/jpeg" //định dạng trả về
                />
              </Button>
            </Col>

            <Col md={6} style={ColStyle}>
              <p>Result</p>
              <img
                style={{ width: "100%" }}
                alt=""
                src={this.state.dataImage}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ReactCamera;
