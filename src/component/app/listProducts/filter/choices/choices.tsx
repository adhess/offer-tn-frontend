import React from "react";
import {Checkbox} from "@material-ui/core";
import css from './choices.module.scss';

export default function Choices(props: any) {
    return (
        <div className={css.container}>
            <h4>{props.data.name}</h4>
            <div className={css.checkboxContainer}>
                {
                    props.data.values
                        .sort((a: { name: string, count: number },
                               b: { name: string, count: number }) => a.name.length === b.name.length ?
                            a.name.localeCompare(b.name) : a.name.length - b.name.length)
                        .map((v: { name: string, count: number }) => <div key={v.name}>
                            <Checkbox size='small'
                                      checked={props.checkedValues?.includes(v.name)}
                                      onChange={(event) => props.onSpecSelected(props.data.name, v.name)}/>
                            <h5>{v.name} ({v.count})</h5>
                        </div>)
                }
            </div>
        </div>
    );
}
