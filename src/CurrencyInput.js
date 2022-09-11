import React from 'react';
import {array, number, string} from "prop-types";

export const CurrencyInput = (props) => {
    return (
        <div className="currency-input">
            <input type="text" value={props.amount} />
            <select value={props.currency}>
                {props.currencies.map((currency => (
                    <option value={currency}>{currency}</option>
                )))}
            </select>
        </div>
    )
}

CurrencyInput.propTypes = {
    amount: number,
    currency: string,
    currencies: array,
}
