import { Modal } from "antd";
import React, { Dispatch, SetStateAction } from "react";

type ModalWindowProps = {
    children: React.ReactNode;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    isModalOpen: boolean
};

export const ModalWindow: React.FC<ModalWindowProps> = ({children, isModalOpen, setIsModalOpen}) => {


  const handleCancel = () => {
    setIsModalOpen(false);
  };

  
  return (
    <>
      <Modal
        title='Вопрос'
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalWindow;
