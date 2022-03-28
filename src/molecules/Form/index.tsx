import React from "react";
import { getConfigFileParsingDiagnostics } from "typescript";
import Button from "../../atoms/Button";
import { PropTypes } from "./types";

const Form: React.FC<PropTypes> = ({onChangeText, onSubmit, fields}) => {
    return (
        <div>
           {fields.map((el: Field, idx: number) => {
               return (
                   <>
                        <p>{el.label}</p>
                        <input
                          type={"text"}
                          placeholder={(e) => onChangeText(e.target.value, el.label)}
                        />{" "}
                    </>
               );
           })}
           <Button buttonText="Submit Form" onPress={onSubmit} />
        </div>
    );
    }
    