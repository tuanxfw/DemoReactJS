import React, { Component } from "react";
import {
  Col,
  Row,
  Input,
  InputGroup,
  Button,
  InputGroupAddon,
} from "reactstrap";

const publicIp = require("public-ip");

class PublicIP extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    console.log(await publicIp.v4());
  };

  getIp = async (type) => {

    try {
        if (type === 'ipV4') {
            document.getElementById('ipV4').value = await publicIp.v4();
        }
        else{
            document.getElementById('ipV6').value = await publicIp.v6();
        }
    } catch (error) {
        alert(error);
    }

  };

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
            <Col md={12} style={{ textAlign: "left" }}>
              <p>-Get ip public client</p>
            </Col>

            <Col md={6} style={ColStyle}>
              <p>Ip v4</p>
              <InputGroup>
                <Input
                  placeholder={"ip V4"}
                  id={"ipV4"}
                />
                <InputGroupAddon addonType="append">
                  <Button onClick={()=> {this.getIp('ipV4')}}>Execute</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>

            <Col md={6} style={ColStyle}>
              <p>Ip v6</p>
              <InputGroup>
                <Input
                  placeholder={"ip V6"}
                  id={"ipV6"}
                />
                <InputGroupAddon addonType="append">
                  <Button onClick={()=> {this.getIp('ipV6')}}>Execute</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default PublicIP;
