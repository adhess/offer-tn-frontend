import React from "react";
import Chart from "react-apexcharts";
import styles from "./RecordedPricesChart.module.scss";

export default class RecordedPricesChart extends React.Component<any, any> {
    state = {
        options: {
            chart: {
                zoom: {
                    enabled: false,
                },
            },
            stroke: {
                width: [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,],
                curve: 'straight',
            }
        }
    };

    render() {
        return (
            <div className={['shadow', styles.border].join(' ')}>
                <Chart
                    options={this.state.options}
                    series={this.props.series}
                    type="line"
                    width="100%"
                    height="200px"
                /></div>
        );
    }
}

