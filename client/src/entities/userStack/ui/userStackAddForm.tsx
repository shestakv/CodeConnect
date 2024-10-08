import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import styles from "./StackCard.module.css";
import { Button } from "antd";
import { createUserStack } from "../model/userStackThunks";

export const UserStackAddForm: React.FC = () => {
  const { stacks } = useAppSelector((state) => state.stack);
  const [selectedStack, setSelectedStack] = useState(null);
  const dispatch = useAppDispatch();

  const handleAddSkill = () => {
    if (selectedStack) {
      dispatch(createUserStack({ stackId: selectedStack.id }));
      console.log(selectedStack.id);
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const stack = stacks.find((stack) => stack.title === selectedValue);
    setSelectedStack(stack);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Выберите программу:</h3>
      {stacks ? (
        <>
          <select onChange={handleSelectChange}>
            <option value="" disabled>
              Выберите программу
            </option>
            {stacks.map((stack) => (
              <option key={stack.id} value={stack.title}>
                {stack.title}
              </option>
            ))}
          </select>
          <Button onClick={handleAddSkill} disabled={!selectedStack}>
            Добавить
          </Button>
        </>
      ) : (
        <p>Загрузка программ...</p>
      )}
    </div>
  );
};
