import React, { useContext } from "react";
import {
  BUTTON_CLOSE,
  BUTTON_OPEN,
  SUB_HEADING,
  WELCOME,
} from "../../../../constants";
import { AppContext } from "../../../../context/ModalContext";
import { Button } from "../../../components/Button/Button";
import "./headerstyles.css";

export const Header = () => {
  const { handleModal } = useContext(AppContext);

  const onOpen = () => {
    handleModal?.current?.onOpen({
      height: 200,
      width: 400,
      content:
        "The Modal is a basic way to present content above an enclosing view.",
    });
  };

  const onClose = () => {
    handleModal?.current?.onClose();
  };

  return (
    <div className="container" data-testid="header">
      <div className="header-left">
        <h1>{WELCOME}</h1>
        <h3>{SUB_HEADING}</h3>
      </div>
      <div className="header-right">
        <Button onClick={onOpen} color="primary" style={{ margin: 20 }}>
          {BUTTON_OPEN}
        </Button>
        <Button onClick={onClose} color="secondary" style={{ margin: 20 }}>
          {BUTTON_CLOSE}
        </Button>
      </div>
    </div>
  );
};
