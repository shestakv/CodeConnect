import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import styles from "./StackCard.module.css";
import { Button } from "antd";
import { createUserStack } from "../model/userStackThunks";
import { getAllStacks, Stack } from "@/entities/stack";

interface UserStackAddFormProps {
  onClose: () => void; // Функция для закрытия модального окна
}

export const UserStackAddForm: React.FC<UserStackAddFormProps> = ({
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const { stacks } = useAppSelector((state) => state.stack);
  const { userStacks } = useAppSelector((state) => state.userStacks);
  const [selectedStack, setSelectedStack] = useState<Stack | null>(null);

  useEffect(() => {
    // Обновляем выбранный стек, если он больше не доступен
    const existingStackTitles = userStacks.map(
      (userStack) => userStack.Stack.title
    );
    if (selectedStack && existingStackTitles.includes(selectedStack.title)) {
      setSelectedStack(null);
    }
  }, [userStacks, selectedStack]);

  const handleAddSkill = async () => {
    if (selectedStack) {
      await dispatch(createUserStack({ stackId: selectedStack.id }));
      await dispatch(getAllStacks());
      onClose();
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = Number(event.target.value);
    const stack = stacks.find((stack) => stack.id === selectedId);
    setSelectedStack(stack || null);
  };

  const existingStackTitles = userStacks.map(
    (userStack) => userStack.Stack.title
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Выберите программу:</h3>
      {stacks ? (
        <>
          <select onChange={handleSelectChange} value={selectedStack?.id || ""}>
            <option value="" disabled>
              Выберите программу
            </option>
            {stacks
              .filter((stack) => !existingStackTitles.includes(stack.title))
              .map((stack) => (
                <option key={stack.id} value={stack.id}>
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
