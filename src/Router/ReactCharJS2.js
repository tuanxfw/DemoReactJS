import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Bar } from "react-chartjs-2";
class ReactCharJS2 extends Component {
    adUser = {};

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <Row>
                <Col md='12' style={{padding: '20px 20px 20px 20px'}}>
                    <h4 style={{textAlign: 'center'}}>
                        <a href={this.props.url} target={'_blank'}>{this.props.title}</a>
                    </h4>
                    <Bar
                        //width={10}
                        height={70}
                        data={{

                            labels: [
                                "Thứ 2",
                                "Thứ 3",
                                "Thứ 4",
                                "Thứ 5",
                                "Thứ 6",
                                "Thứ 7",
                                "Chủ nhật",
                            ],

                            datasets: [
                                {
                                    label: "Khách vào", //tool tip của cột
                                    backgroundColor: [ //màu sắc cho cột
                                        "#1968a8",
                                        "#1968a8",
                                        "#1968a8",
                                        "#1968a8",
                                        "#1968a8",
                                        "#1968a8",
                                        "#1968a8"
                                    ],
                                    //giá trị cho từng cột, giá trị lớn nhất sẽ được lấy làm đỉnh, giá trị nhỏ nhất lấy làm gốc tọa độ
                                    data: [200, 250, 300, 450, 100, 100, 100, 0]
                                },

                                {
                                    label: "Khách ra",
                                    backgroundColor: [
                                        "#f37224",
                                        "#f37224",
                                        "#f37224",
                                        "#f37224",
                                        "#f37224",
                                        "#f37224",
                                        "#f37224",
                                        "#f37224",
                                    ],
                                    data: [100, 50, 170, 100, 100, 100, 100, 0]
                                }
                            ]
                        }}
                        options={{
                            legend: { display: true },
                            title: {
                                display: true,
                                text: "Predicted world population (millions) in 2050"

                            },
                            redraw: true
                        }}
                    />
                </Col>

                <Col md='1'></Col>
                {/* <Col md='10'>
                        <Chart
                            //width={'500px'}
                            height={'300px'}
                            chartType="Bar"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Ngày trong tuần', 'Khách vào', 'Khách ra'],
                                ['Thứ 2', 1000, 400],
                                ['Thứ 3', 1170, 460],
                                ['Thứ 4', 660, 1120],
                                ['Thứ 5', 1030, 540],
                                ['Thứ 6', 1030, 540],
                                ['Thứ 7', 1030, 540],
                                ['Chủ nhật', 2000, 540],
                            ]}
                            options={{
                                series: {
                                    0: { targetAxisIndex: 0 },
                                    1: { targetAxisIndex: 1 }
                                },
                                chart: {
                                    title: 'Biểu đồ khách thăm',
                                    subtitle: 'Tạm thời chưa có',

                                },

                                colors: ['#1968a8', "#f37224"], //màu sắc từng cột
                                //bars: 'horizontal'
                            }}
                            // For tests
                            rootProps={{ '-testid': '2' }}
                        />
                    </Col>

                    <Col md='1'></Col> */}
            </Row>
        );
    }
}

export default ReactCharJS2;