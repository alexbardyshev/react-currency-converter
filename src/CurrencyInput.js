import React from 'react';
import {array, number, string} from "prop-types";
import PropTypes from "prop-types";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export const CurrencyInput = (props) => {
    return (
        <div className="currency-input">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                <TextField id="standard-basic" label={props.label} variant="standard"
                    value={props.amount}
                    onChange={(event) => props.onAmountChange(event.target.value)}
                />
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={props.currency}
                    onChange={(event) => props.onCurrencyChange(event.target.value)}
                    label="Age"
                >
                    {props.currencies.map((currency => (
                        <MenuItem value={currency}>{currency}</MenuItem>
                    )))}
                </Select>
            </FormControl>
        </div>
    )
}

CurrencyInput.propTypes = {
    amount: number | string,
    currency: string,
    currencies: array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
}
