import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import styles from "./TestPage.module.css";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";
import { LeftOutlined, ProfileOutlined } from "@ant-design/icons";
import { getAllUserStacks } from "@/entities/userStack";

export const TestPage: React.FC = () => {
  const { userId, stackId } = useParams();
  const { user } = useAppSelector((state) => state.user);
  const { userStacks } = useAppSelector((state) => state.userStacks);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (!user || +userId! !== user?.id) {
    navigate(-1);
  }

  const userStack = userStacks?.filter(
    (userStack) => userStack.id === +stackId!
  )[0];

  const handleGetCurrentQuestion = () => {
    return userStack?.Stack.TestingResults[0].currentStackTaskId;
  };

  const handleGetNumberOfQuestion = () => {
    return userStack?.Stack.StackTasks.length;
  };

  const handleStartTest = () => {
    navigate(`/tests/${userId}/${stackId}/${questionId}`);
  }

  const questionId = handleGetCurrentQuestion()

  useEffect(() => {
    dispatch(getAllUserStacks({ userId: +userId! }));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Button type="default" shape="round" onClick={() => navigate(-1)}>
            <LeftOutlined />
            Вернуться к навыкам
          </Button>
        <>
          <div>
            <div className={styles.titleTest}>
              Добро пожаловать на страницу тестирования навыков по стеку{" "}
              {userStack?.Stack.title}!
            </div>

            {handleGetCurrentQuestion() === 1 ? (<></>) : (
              <div className={styles.titleTest}>
              В прошлый раз вы остановились на {handleGetCurrentQuestion()} вопросе.
            </div>
            )}

            <div className={styles.textTest}>
              Обратите внимание на следующие важные моменты:
              <ol>
              <li><span className={styles.highlight}>Тест можно пройти лишь один раз.</span></li>
                <li>Количество вопросов: <span className={styles.highlight}>{handleGetNumberOfQuestion()}</span>.</li>
                <li>
                  Время на ответ: на каждый вопрос дается <span className={styles.highlight}>30 секунд</span>. Если вы не
                  успеете ответить, вопрос будет засчитан как неверный.
                </li>
                <li>
                  Пропуск вопроса: если вы пропустите вопрос, он также будет
                  <span className={styles.highlight}>считаться неверным</span>.
                </li>
                <li>
                  Выход со страницы тестирования: если вы покинете страницу,
                  тест продолжится со следующего вопроса, но <span className={styles.highlight}>предыдущий будет
                  считаться неверным</span>.
                </li>
              </ol>
              Удачи!
            </div>
          </div>
          
          <Button type="default" shape="round" onClick={() => handleStartTest()}>
          {handleGetCurrentQuestion() === 1 ? ('Начать тестирование') : ('Продолжить тестирование')}
            <ProfileOutlined />
          </Button>
        </>
      
    </div>
  );
};
