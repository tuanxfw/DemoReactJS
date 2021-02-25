import React, { Component } from "react";
import {
  Col,
  Row,
  Input,
  InputGroup,
  Button,
  InputGroupAddon,
} from "reactstrap";
import moment from 'moment';

class Moment extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.refFormatInput = React.createRef();
    this.refFormatOutput = React.createRef();


  }

  onFormatDateToString = () => {
    try {
        let date = new Date();
        let formatInput = document.getElementById('inputDateString').value;

        document.getElementById('outputDateString').value = moment(date).format(formatInput);

    } catch (error) {
        console.log(error);
    }
  };

  onFormatStringToDate = () => {
    try {

        let valueInput = document.getElementById('inputStringDate').value;
        let formatInput = document.getElementById('formatStringDate').value;
        let date = moment(valueInput, formatInput)

        document.getElementById('outputStringDate').value = date.format('DD-MM-YYYY');

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
            <a href={this.props.url} target={"_blank"}>
              {this.props.title}
            </a>
          </h4>
          <Row>
            <Col md={12} style={{ textAlign: "left" }}>
              <p>-Thư viện hỗ trợ format date.</p>
            </Col>

            <Col md={6} style={ColStyle}>
              <p>Date to string</p>
              <InputGroup>
                <Input placeholder={"Format date input"} id={'inputDateString'}/>
                <Input placeholder={"Format date output"} id={'outputDateString'}/>
                <InputGroupAddon addonType='append'>
                  <Button onClick={this.onFormatDateToString}>Execute</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>

            <Col md={6} style={ColStyle}>
              <p>String to date</p>
              <InputGroup>
                <Input placeholder={"Date string value"} id={'inputStringDate'}/>
                <Input placeholder={"Format date input"} id={'formatStringDate'}/>
                <Input placeholder={"Format date output"} id={'outputStringDate'}/>
                <InputGroupAddon addonType='append'>
                  <Button onClick={this.onFormatStringToDate}>Execute</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>

          </Row>
        </Col>
      </Row>
    );
  }
}

export default Moment;
