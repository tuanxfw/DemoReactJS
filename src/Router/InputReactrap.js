import React, { Component } from 'react';
import { Col, Row, Input } from 'reactstrap';

class InputReactrap extends Component {
    adUser = {};

    constructor(props) {
        super(props);

        this.state = {
            type: 'text',
        };

        this.refType = React.createRef();
        this.refGetValue = React.createRef();
    }

    onKeypressInputCardCode = (e) => {
        console.log(String(e.key));
        // if (String(e.key) === 'Enter') {
        //     document.getElementById('btnAddCard').click();
        // }
    }

    render() {
        let ColStyle = { textAlign: 'left', padding: '10px 25px 0px 25px' };
        return (
            <Row>
                <Col md={12}>
                    <h4 style={{ textAlign: 'center' }}>
                        <a href={this.props.url} target={'_blank'} rel="noopener noreferrer">{this.props.title}</a>
                    </h4>
                    <Row>
                        <Col md={12} style={{ textAlign: 'left' }}>
                            <p>
                                - Lấy giá trị input thông qua innerRef (Demo ở Type text), giá trị nhận về luôn ở dạng string.
                                <br />
                                - Mỗi ref chỉ được dùng cho 1 element duy nhất.
                                <br />
                                - Mỗi type sẽ chỉ nhận kiểu liệu tương ứng của type đó, kiểu dữ liệu không khớp mặc định thành rỗng.
                                <br />
                            </p>
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Test type (input)</p>
                            <Input type='select'
                                innerRef={this.refType}
                                onChange={() => {
                                    this.setState({ type: this.refType.current.value });
                                }}
                            >
                                <option><button>text</button></option>
                                <option>textarea</option>
                                <option>select</option>
                                <option>button</option>
                                <option>checkbox</option>
                                <option>color</option>
                                <option>date</option>
                                <option>datetime-local</option>
                                <option>time</option>
                                <option>email</option>
                                <option>file</option>
                                <option>hidden</option>
                                <option>image</option>
                                <option>month</option>
                                <option>number</option>
                                <option>password</option>
                                <option>radio</option>
                                <option>range</option>
                                <option>reset</option>
                                <option>search</option>
                                <option>submit</option>
                                <option>tel</option>                              
                                <option>url</option>
                                <option>week</option>
                            </Input>
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Test type (out put)</p>
                            <Input type={this.state.type}/>
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Input valid</p>
                            <Input valid/>
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Input invalid</p>
                            <Input invalid/>
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Type text (default)</p>
                            <Input innerRef={this.refGetValue}
                                onChange={() => {
                                    console.log(this.refGetValue.current.value)
                                }}
                                //onKeyPress={this.onKeypressInputCardCode}
                                //maxLength={2}
                                title={'thuộc tính maxLenght được khai báo dưới dạng maxLength={2}'}
                            />
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Type number</p>
                            <Input type={'number'}
                            //min="1" max="5"
                            />
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Type date</p>
                            <Input type={'date'}
                                //min={'2020-10-25'}
                                //max={'2020-10-30'}
                                title={'Thuộc tính min max được khai báo dưới dạng min={\'2020-10-25\'} max={\'2020-10-30\'}'}
                            />
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Type select</p>
                            <Input type={'select'}
                                //multiple
                                title={'Nếu muốn multiple select thì thêm thuộc tính multiple'}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Type file</p>
                            <Input type={'file'}
                                //multiple
                                title={'Nếu muốn multiple select thì thêm thuộc tính multiple'}
                            />
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Type checkbox</p>
                            <Input style={{ marginLeft: '30px' }}
                                type={'checkbox'}
                                //defaultChecked={true}
                                title={'Muốn set checked mặc định thì defaultChecked={boolean}, get giá trị ref.current.checked'}
                            />
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Type radio</p>
                            <Input style={{ marginLeft: '60px' }}
                                type={'radio'}
                                defaultChecked={true}
                                title={'Muốn set checked mặc định thì defaultChecked={boolean}, get giá trị ref.current.checked'}
                            /> Radio
                        </Col>

                    </Row>
                </Col>
            </Row>
        );
    }
}

export default InputReactrap;