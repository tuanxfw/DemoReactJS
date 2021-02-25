import React, { Component } from 'react';
import { Col, Row, Input } from 'reactstrap';
import NumberFormat from 'react-number-format';

class ReactNumberFormat extends Component {
    adUser = {};

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let ColStyle = { textAlign: 'left', padding: '10px 25px 0px 25px' };

        return (
            <Row>
                <Col md='12' style={{ padding: '20px 20px 20px 20px' }}>
                    <h4 style={{ textAlign: 'center' }}>
                        <a href={this.props.url} target={'_blank'} rel="noopener noreferrer">{this.props.title}</a>
                    </h4>

                    <Row>
                        <Col md={12} style={{ textAlign: 'left' }}>
                            <p>
                                - Dùng để format định dạng cho số.
                                <br />
                                - Dễ dàng chỉnh sửa kí tự ngăn cách các hàng.
                                <br />
                                - Không nhận các giá trị khác số.
                                <br />
                                {'=>'} Thích hợp để tạo các input chỉ nhận số và các input chỉ nhận số theo 1 format.
                            </p>
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Xuất ra giá trị dạng text<br />(mặc định nằm trong thẻ span)</p>
                            <NumberFormat
                                value={100000.789}
                                displayType={'text'} //trả về giá trị dưới dạng text
                                decimalSeparator={','} //Kí tự chia theo hàng nghìn
                                thousandSeparator={'.'} //Kí tự chia phần thập phân
                            />
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Render giá trị vào 1 element nào đó</p>
                            <NumberFormat
                                value={100000.789}
                                displayType={'text'} //trả về giá trị dưới dạng text
                                decimalSeparator={','} //Kí tự chia theo hàng nghìn
                                thousandSeparator={'.'} //Kí tự chia phần thập phân
                                renderText={value => <p>{value}</p>} //render giá trị vào 1 thẻ p
                            />
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Render giá trị vào Input readOnly</p>
                            <NumberFormat
                                value={100000.789}
                                displayType={'text'}
                                decimalSeparator={','} //Kí tự chia theo hàng nghìn
                                thousandSeparator={'.'} //Kí tự chia phần thập phân
                                renderText={value => <Input readOnly={true} defaultValue={value} />}
                            />
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Nhúng vào thẻ Input và lấy giá trị qua event onChange</p>
                            <NumberFormat
                                value={100000.789}
                                customInput={Input} //Name tag input
                                decimalSeparator={','} //Kí tự chia theo hàng nghìn
                                thousandSeparator={'.'} //Kí tự chia phần thập phân
                                onValueChange={(values) => { console.log(values); }}
                            />
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Định nghĩa format nhập vào ###.###.###.###</p>
                            <NumberFormat
                                value={225225225190}
                                customInput={Input}
                                format='###.###.###.###'
                            />
                        </Col>

                        <Col md={6} style={ColStyle}>
                            <p>Định nghĩa format nhập vào # ### ### và sử dụng Mask=_</p>
                            <NumberFormat
                                value={1}
                                customInput={Input}
                                mask='_'
                                format='# ### ###'
                            />
                        </Col>


                        <Col md={6} style={ColStyle}>
                            <p>Thêm kí tự vào đầu/cuối</p>
                            <NumberFormat
                                value={1}
                                prefix={'$ '}
                                suffix={' (USD)'}
                                customInput={Input}
                            />
                        </Col>

                    </Row>
                </Col>

            </Row>
        );
    }
}

export default ReactNumberFormat;