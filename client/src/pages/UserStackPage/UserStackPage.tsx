import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import styles from "./UserStackPage.module.css";
import { LeftOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { getAllUserStacks } from "@/entities/userStack";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Progress, Tooltip } from "antd";
import { getUserById } from "@/entities/user";

export const UserStackPage: React.FC = () => {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.user);
  const { userStacks } = useAppSelector((state) => state.userStacks);
  const { userPersonal } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllUserStacks({ userId: +id! }));
  }, [dispatch]);

  useEffect(() => {
    if (id && (!userPersonal || userPersonal.id !== +id)) {
      dispatch(getUserById({ id: +id }));
    }
  }, [id, dispatch, userPersonal, user]);

  const handleQuantityQuestions = ({ stackId }: { stackId: number }) => {
    return userStacks?.filter((userStack) => userStack.id === stackId)[0].Stack
      .StackTasks.length;
  };

  const handleQuantityTrue = ({ stackId }: { stackId: number }) => {
    return userStacks?.filter((userStack) => userStack.id === stackId)[0].Stack
      .TestingResults[0].quantityTrue;
  };

  const handleQuantityFalse = ({ stackId }: { stackId: number }) => {
    return userStacks?.filter((userStack) => userStack.id === stackId)[0].Stack
      .TestingResults[0].quantityFalse;
  };

  const handleQuantityTruePercents = ({ stackId }: { stackId: number }) => {
    const quantityQuestion = handleQuantityQuestions({ stackId });
    const quantityTrue = handleQuantityTrue({ stackId });
    
    if (quantityQuestion === 0) return 0; // Обработка деления на ноль

    return Math.round((quantityTrue / quantityQuestion) * 100);
};

const handleQuantityFalsePercents = ({ stackId }: { stackId: number }) => {
    const quantityQuestion = handleQuantityQuestions({ stackId });
    const quantityFalse = handleQuantityFalse({ stackId });
    
    if (quantityQuestion === 0) return 0; // Обработка деления на ноль

    return Math.round((quantityFalse / quantityQuestion) * 100);
};

const handleDonePercents = ({ stackId }: { stackId: number }) => {
    const quantityTrue = handleQuantityTrue({ stackId });
    const quantityFalse = handleQuantityFalse({ stackId });
    const quantityQuestion = handleQuantityQuestions({ stackId });

    if (quantityQuestion === 0) return 0; // Обработка деления на ноль

    // Считаем проценты правильных и неправильных
    const quantityTruePercents = Math.round((quantityTrue / quantityQuestion) * 100);
    const quantityFalsePercents = Math.round((quantityFalse / quantityQuestion) * 100);

    return quantityTruePercents + quantityFalsePercents;
};

  return (
    <>
      <div>
        <div className={styles.container}>
          <Button type="default" shape="round" onClick={() => navigate(-1)}>
            <LeftOutlined />
            Вернуться на страницу кодера
          </Button>
          <div className={styles.titleHeader}>
            <div className={styles.avatarContainer}>
              <img
                className={styles.avatar}
                src={`${import.meta.env.VITE_IMG}${userPersonal?.avatar}`}
              />
            </div>
            <div>
              {userPersonal?.surname} {userPersonal?.firstname}{" "}
              {userPersonal?.patronymic}
            </div>
          </div>

          <div className={styles.titleStack}>Результаты проверки навыков:</div>

          {userStacks?.map((userStack) => (
            <div className={styles.secondContainer}>
              <div className={styles.userStacks}>
                <div className={styles.divider}>
                  <div className={styles.topContainer}>
                    <div className={styles.stackTitle}>
                      <img
                        src={`${import.meta.env.VITE_IMG}${
                          userStack.Stack.image
                        }`}
                        alt="Stack Icon"
                        className={styles.stackIcon}
                      />
                      <h3 className={styles.title}>{userStack.Stack.title}</h3>
                    </div>
                  </div>
                  <div className={styles.testResults}>
                    <button
                      className={styles.stackCard}
                      onClick={() => {
                        if (userStack.userId === user?.id)
                          navigate(`/tests/${id}/${userStack.id}`);
                      }}
                    >
                      <h3>Тестирование</h3>
                      {handleDonePercents({ stackId: userStack.id }) >= 100  
                        ? `Результат: ${handleQuantityTruePercents({ stackId: userStack.id })/10}/10 баллов`
                        : handleDonePercents({ stackId: userStack.id }) === 0
                        ? <h3 className={styles.h3}>Начать тест</h3>
                        : <h3 className={styles.h3}>Продолжить</h3>}
                      <Tooltip
                        title={`Правильных ответов: ${handleQuantityTruePercents(
                          {
                            stackId: userStack.id,
                          }
                        )}%  
                      Неправильных ответов: ${handleQuantityFalsePercents({
                        stackId: userStack.id,
                      })}%`}
                      >
                        <Progress
                          percent={
                            handleDonePercents({ stackId: userStack.id })
                          }
                          success={{
                            percent: handleQuantityTruePercents({
                              stackId: userStack.id,
                            }),
                            strokeColor: '#52c41a',
                          }}
                          type="circle"
                        />
                      </Tooltip>
                    </button>
                    <button className={styles.stackCard} disabled>
                      <h3>AI проверка</h3>
                      <p>Скоро</p>
                      <Tooltip
                        title={`Правильных ответов: 0%  
                      Неправильных ответов: 0%`}
                      >
                        <Progress percent={0} type="circle"/>
                      </Tooltip>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
