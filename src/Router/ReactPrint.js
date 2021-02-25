import React, {Component} from 'react';
import {Button, Col, Row, Table} from 'reactstrap';
import ReactToPrint from "react-to-print";

class FontAwesome extends Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.refGetValue = React.createRef();
    }

    export = () => {
        this._exporter.save();
    };

    render() {
        let ColStyle = {textAlign: 'left', padding: '10px 25px 0px 25px'};

        //thẻ thead và tfoot sẽ lặp lại mỗi khi sang trang
        let table = <Table bordered>
            <thead>
                <tr>
                    <th>Cột 1</th>
                    <th>Cột 2</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1a</td>
                    <td>1b</td>
                </tr>
                <tr>
                    <td>2a</td>
                    <td>2b</td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <td>Foot 1</td>
                    <td>Foot 2</td>
                </tr>
            </tfoot>
        </Table>

        return (
            <Row>
                <Col md={12}>
                    <h4 style={{textAlign: 'center'}}>
                        <a href={this.props.url} target={'_blank'}>{this.props.title}</a>
                    </h4>
                    <Row>
                        <Col md={12} style={{textAlign: 'left'}}>
                            <p>
                                -In 1 Component nào đó 
                            </p>
                        </Col>


                        <Col md={12} style={ColStyle}>
                            <p>Demo</p>
                            <ReactToPrint
                                trigger={() => <button id='btnPrint' hidden={false}>Print</button>}
                                content={() => this.componentRef}
                                copyStyles={true} //copy css hiện tại
                                //sang trang mới khi gặp thẻ article
                                pageStyle={`
                                    @page { size: auto !important; }
                                    article { page : rotated !important; }
                                `}
                            />
                            <Print ContenPrint={table} ref={el => (this.componentRef = el)}/>
                        </Col>

                    </Row>
                </Col>
            </Row>
        );
    }
}

class Print extends Component {
    render() {
        return (
            <div>
                {this.props.ContenPrint}
            </div>
        );
    }
}

export default FontAwesome;