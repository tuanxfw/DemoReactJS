import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class FontAwesome extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    export = () => {
        this._exporter.save();
    };

    render() {
        let ColStyle = { textAlign: 'left', padding: '10px 25px 0px 25px' };
        return (
            <Row>
                <Col md={12}>
                    <h4 style={{ textAlign: 'center' }}>
                        <a href={this.props.url} target={'_blank'}>{this.props.title}</a>
                    </h4>
                    <Row>
                        <Col md={12} style={{ textAlign: 'left' }}>
                            <p>
                                -<a target='_blank' rel="noopener noreferrer" href='https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself'>Download</a>
                                <br />
                                -<a target='_blank' rel="noopener noreferrer" href='https://fontawesome.com/icons?d=gallery&m=free'>Tra cứu icon</a>
                                <br />
                                -Sử dụng bằng cách chèn thẻ link vào file index.html
                            </p>
                        </Col>

                        <Col md={3} style={ColStyle}>
                            <p>Default</p>
                            {/*<FontAwesomeIcon style={{color: 'red', fontSize: '30px'}} icon={faMugHot}/>*/}
                            <i className="fas fa-ad" />
                        </Col>

                        <Col md={3} style={ColStyle}>
                            <p>Style</p>
                            <i style={{ color: 'red', fontSize: '50px' }} className="fab fa-accessible-icon" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default FontAwesome;