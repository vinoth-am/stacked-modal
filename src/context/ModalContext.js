import React, { createContext, Fragment, useRef, useState } from "react";
import { StackedModal } from "../app/components/Modal/StackedModal";
import { CHECKBOX_LABEL } from "../constants";
import "./modalcontext.css";

const AppContext = createContext();

const ModalContex = ({ children }) => {
  const handleModal = useRef();
  const [isChecked, setChecked] = useState(true);

  return (
    <Fragment>
      <AppContext.Provider value={{ handleModal }} data-testid="context">
        {children}
      </AppContext.Provider>

      <div className="checkbox-container">
        <input
          data-testid="checkbox"
          className="checkbox"
          type="checkbox"
          id="lifo"
          checked={isChecked}
          onChange={() => setChecked((prevState) => !prevState)}
        />
        <label htmlFor="lifo">{CHECKBOX_LABEL}</label>
      </div>
      <StackedModal
        width={400}
        height={300}
        header={"Modal"}
        content={"Content"}
        ref={handleModal}
        stackFomat={isChecked}
      />
    </Fragment>
  );
};

export { AppContext, ModalContex };
