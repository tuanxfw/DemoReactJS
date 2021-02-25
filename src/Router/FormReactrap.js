import React, { Component } from "react";
import {
  Col,
  Form,
  Row,
  Input,
  Button,
  FormGroup,
  Label,
  FormText,
  FormFeedback,
} from "reactstrap";

class FormReactrap extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.refForm = React.createRef();
  }

  componentDidMount() {
    //truy cập vào phần tử trong form thông qua inner ref:
    //this.ref.current.[index hoặc id của element].[atribute cần lấy giá trị]
    console.log("refForm", this.refForm.current.txt1.value);
  }

  onSubmit = (event) => {
    //truy cập vào phần tử trong form thông qua event:
    //event.target.[index hoặc id của element].[atribute cần lấy giá trị]
    console.log("txt1", event.target.txt1.value);
    console.log("txt2", event.target.txt2.value);
    event.preventDefault(); // chặn sự kiện mặc định của form
  };

  onChange = (event) => {
    //cách lấy giá trị từ phần tử bị thay đổi giá trị trong form
    console.log("refForm", this.refForm.current[event.target.id].value);
  };

  render() {
    let ColStyle = { textAlign: "left", padding: "10px 25px 0px 25px" };
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
                ={">"}Ưu điểm:
                <br />
                -Dễ dàng truy cập thông qua id hoặc index bằng sự kiện submit
                form, innerRef.
                <br />
                -Dễ dàng reset giá trị các input về defaultValue.
                <br />
                -Một số type hỗ trợ validate format khi sub mit, ví dụ như type
                email.
              </p>
            </Col>
            <Col md={12} style={ColStyle}>
              <Form
                innerRef={this.refForm}
                onSubmit={this.onSubmit}
                autoComplete="off" //hiện gợi ý
                //novalidate='novalidate' //validate giá trị theo type
                onChange={this.onChange}
              >
                <FormGroup>
                  <Label>Invalid input</Label>
                  <Input
                    invalid={true}
                    type="url"
                    id="txt1"
                    defaultValue={"e"}
                  />
                  <FormFeedback invalid>
                    You will not be able to see this
                  </FormFeedback>
                  <FormText>Example help text that remains unchanged.</FormText>
                </FormGroup>
                <FormGroup>
                  <Label>Valid input</Label>
                  <Input type="text" id="txt2" defaultValue={"2"} valid />
                  <FormFeedback valid>
                    Sweet! that name is available
                  </FormFeedback>
                  <FormText>Example help text that remains unchanged.</FormText>
                </FormGroup>
               
                <Button type="submit">Submit</Button>
                <Button type="reset">Reset</Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default FormReactrap;
