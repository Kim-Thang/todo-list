import React from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const inputStyles = makeStyles({
    input: {
        width: "70%",
        marginBottom: 30,
    },
});

const InputField: React.FunctionComponent<{
    inputValue: string;
    onChange: (event: any) => void;
}> = ({ inputValue, onChange }) => {
    const classes = inputStyles();

    return (
        <TextField
            variant="outlined"
            onChange={onChange}
            label="type your task"
            value={inputValue}
            className={classes.input}
        />
    );
};

export default InputField;
