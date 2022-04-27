import React from "react";
import { useEffect } from "react";
import { StyledError } from "./styles/Error.styled";
import { motion, useAnimation } from "framer-motion";

interface props {
  inputColor: string;
  inputName: string;
}

//Customizable error message
export const ErrorMessage = ({ inputColor, inputName }: props) => {
  const changeMessage = useAnimation();
  useEffect(() => {
    changeMessage.start({
      scale: [0, 1],
      opacity: [0, 1],
      transition: { duration: 0.2 },
    });
  }, [changeMessage, inputColor, inputName]);

  const style = {
    color: inputColor,
  };
  if (inputName !== "")
    return (
      <StyledError
        as={motion.div}
        exit={{ opacity: 0 }}
        animate={changeMessage}
      >
        <div data-testid="error" className="error" style={style}>
          {inputName}
        </div>
      </StyledError>
    );
  else return <></>;
};
