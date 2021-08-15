import React, { useState, forwardRef, useImperativeHandle } from "react";
import { HEIGHT, WIDTH } from "../../../constants";
import { validateDimension } from "../../../utils";
import { CloseButton } from "../CloseButton/CloseButton";
import "./modalstyles.css";

export const StackedModal = forwardRef((props, ref) => {
  const [getmodalList, setModalList] = useState([]);

  const { width, height, stackFomat } = props;

  const finalWidth = validateDimension(WIDTH, width);
  const finalHeight = validateDimension(HEIGHT, height);

  useImperativeHandle(ref, () => ({
    onOpen(data) {
      addModal(data);
    },
    onClose() {
      closeModal();
    },
  }));

  const modalID = getmodalList.length >= 0 && getmodalList.length - 1;

  const closeModal = (id = modalID) => {
    const originalArray = [...getmodalList];
    const lastObject = originalArray[originalArray.length - 1];
    if (lastObject && lastObject.id === id) {
      originalArray.pop();
      setModalList([...originalArray]);
    }
  };

  const formatObject = (data) => {
    const { header: modalHeader, content: modalContent } = props;
    const {
      width = finalWidth,
      height = finalHeight,
      header = modalHeader,
      content = modalContent,
    } = data;
    return { width, height, header, content };
  };

  const addModal = (data = {}) => {
    const { width, height, header, content } = formatObject(data);
    const addObject = {
      id: getmodalList.length,
      width,
      height,
      header,
      content,
    };
    setModalList((prevState) => [...prevState, { ...addObject }]);
  };

  const onClose = (id) => {
    closeModal(id);
  };

  return (
    <div data-testid="stackedModal">
      {getmodalList.map((value) => (
        <div
          key={value.id}
          style={stackFomat ? { margin: value.id * 50 } : {}}
          className={"modal-position"}
        >
          <div
            className={
              stackFomat || value.id === 0 ? "modal modal-shadow" : "modal"
            }
            style={{ width: value.width, height: value.height }}
          >
            <div className="modal-header" data-testid="modalHeader">
              <h2>
                {value.header}-{value.id + 1}
              </h2>
              <CloseButton onClick={() => onClose(value.id)}>
                &times;
              </CloseButton>
            </div>
            <div className="modal-content" data-testid="modalContent">
              {value.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});
