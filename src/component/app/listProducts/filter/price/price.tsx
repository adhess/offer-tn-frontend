import React from 'react';
import Slider from '@material-ui/core/Slider';
import withStyles from "@material-ui/core/styles/withStyles";
import css from "./price.module.scss";

const PriceSlider = withStyles({
    root: {
        color: '#f50057',
        height: 3,
        padding: '13px 0',
    },
    active: {},
    track: {
        height: 3,
    },
})(Slider);

export default function Price(props: any) {
    return (
        <div className={css.container}>
            <h4>
                Price Range:
            </h4>
            <PriceSlider
                key={`price-slider`}
                onChangeCommitted={(e: any, newValue: number | number[]) => { props.onUpdatePriceRange(newValue as number[]); }}
                valueLabelDisplay="auto"
                min={props?.price_range[0]}
                max={props?.price_range[1]}

                defaultValue={props?.selected_price_range}
            />
            <div className={css.price_range}>
                <p>{props?.selected_price_range[0]}</p>
                <p>TND</p>
                <p>{props?.selected_price_range[1]}</p>
            </div>
        </div>
    );
}
