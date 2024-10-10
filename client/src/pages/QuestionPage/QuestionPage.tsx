import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import styles from "./QuestionPage.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";
import {
  CheckCircleOutlined,
  LeftOutlined,
  ProfileOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { getAllUserStacks } from "@/entities/userStack";
import { checkAnswer } from "@/entities/stackTask/model/stackTaskThunks";

export const QuestionPage: React.FC = () => {
  const { userId, stackId, questionId } = useParams();
  const { user } = useAppSelector((state) => state.user);
  const { userStacks } = useAppSelector((state) => state.userStacks);
  const { checkAnswerResult } = useAppSelector(
    (state) => state.checkAnswerResult
  );

  // const [result, setResult] = useState(checkAnswerResult?.result)
  const [time, setTime] = useState(30);
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

  const handleGetQuestion = ({ questionId }: { questionId: number }) => {
    return userStack?.Stack.StackTasks[questionId];
  };

  const handleNextQuestion = () => {
    navigate(`/tests/${userId}/${stackId}/${+questionId! + 1}`);
  };

  const handleFinishTest = () => {
    navigate(`/users/userStacks/${userId}`);
  };

  if (handleGetCurrentQuestion() > handleGetNumberOfQuestion()) {
    console.log(handleGetCurrentQuestion(), handleGetNumberOfQuestion());
    handleFinishTest();
  }

  function disableCopy() {
    const noCopyElement = document.querySelector(
      `.${styles.titleTest}`
    ) as HTMLElement;
    if (noCopyElement) {
      noCopyElement.style.userSelect = "none";
    }
  }

  function enableCopy() {
    const noCopyElement = document.querySelector(
      `.${styles.titleTest}`
    ) as HTMLElement;
    if (noCopyElement) {
      noCopyElement.style.userSelect = "text";
    }
  }

  const handleCheckAnswer = ({
    answer,
    id,
    testingResultId,
  }: {
    answer: string;
    id: number;
    testingResultId: number;
  }) => {
    dispatch(checkAnswer({ answer, id, testingResultId }));
    handleNextQuestion();
  };

  const handleGetFalseAnswer = () => {
    handleCheckAnswer({
      answer: "",
      id: handleGetQuestion({ questionId: +questionId! })?.id,
      testingResultId: userStack?.Stack.TestingResults[0].id,
    });
    setTime(30);
  };

  const handleBackNavigation = () => {
    handleGetFalseAnswer();
    navigate(`/users/userStacks/${userId}`);
  };

  useEffect(() => {
    dispatch(getAllUserStacks({ userId: +userId! }));
  }, [dispatch, checkAnswerResult]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => {
      setTime(30);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (time <= 0) {
      handleGetFalseAnswer();
      setTime(30);
      handleNextQuestion();
    }
  }, [time]);

  return (
    <div className={styles.container}>
      {userStacks && (
        <>
          <Button
            type="default"
            shape="round"
            onClick={() => handleBackNavigation()}
          >
            <LeftOutlined />
            Вернуться к навыкам
          </Button>
          <>
            <div
              className={styles.titleTest}
              onMouseOver={disableCopy}
              onMouseOut={enableCopy}
            >
              <div className={styles.title}>Осталось {time} секунд</div>
              <div className={styles.title}>Вопрос №{questionId}:</div>

              <p>
                <p>
                  <p>
                    <p>
                      <p>
                        <p>
                          <p>
                            <p>
                              <p>
                                <p>
                                  <p>
                                    <p>
                                      <p>
                                        <p>
                                          <p>
                                            <p>
                                              <p>
                                                <p>
                                                  <p>
                                                    <p>
                                                      <p>
                                                        <p>
                                                          <p>
                                                            <p>
                                                              <p>
                                                                <p>
                                                                  <p>
                                                                    <p>
                                                                      <p>
                                                                        <p>
                                                                          <p>
                                                                            <p>
                                                                              <p>
                                                                                <p>
                                                                                  <p>
                                                                                    {questionId &&
                                                                                      handleGetQuestion(
                                                                                        {
                                                                                          questionId:
                                                                                            +questionId!,
                                                                                        }
                                                                                      )
                                                                                        ?.description}
                                                                                  </p>
                                                                                </p>
                                                                              </p>
                                                                            </p>
                                                                          </p>
                                                                        </p>
                                                                      </p>
                                                                    </p>
                                                                  </p>
                                                                </p>
                                                              </p>
                                                            </p>
                                                          </p>
                                                        </p>
                                                      </p>
                                                    </p>
                                                  </p>
                                                </p>
                                              </p>
                                            </p>
                                          </p>
                                        </p>
                                      </p>
                                    </p>
                                  </p>
                                </p>
                              </p>
                            </p>
                          </p>
                        </p>
                      </p>
                    </p>
                  </p>
                </p>
              </p>
            </div>

            <div>
              <div className={styles.answersContainer}>
                <Button
                  type="default"
                  shape="round"
                  onClick={() =>
                    handleCheckAnswer({
                      answer: handleGetQuestion({ questionId: +questionId! })
                        ?.answer1,
                      id: handleGetQuestion({ questionId: +questionId! })?.id,
                      testingResultId: userStack?.Stack.TestingResults[0].id,
                    })
                  }
                >
                  <CheckCircleOutlined />
                  {handleGetQuestion({ questionId: +questionId! })?.answer1}
                </Button>

                <Button
                  className={styles.answer}
                  type="default"
                  shape="round"
                  onClick={() =>
                    handleCheckAnswer({
                      answer: handleGetQuestion({ questionId: +questionId! })
                        ?.answer2,
                      id: handleGetQuestion({ questionId: +questionId! })?.id,
                      testingResultId: userStack?.Stack.TestingResults[0].id,
                    })
                  }
                >
                  <CheckCircleOutlined />
                  {handleGetQuestion({ questionId: +questionId! })?.answer2}
                </Button>

                <Button
                  className={styles.answer}
                  type="default"
                  shape="round"
                  onClick={() =>
                    handleCheckAnswer({
                      answer: handleGetQuestion({ questionId: +questionId! })
                        ?.answer3,
                      id: handleGetQuestion({ questionId: +questionId! })?.id,
                      testingResultId: userStack?.Stack.TestingResults[0].id,
                    })
                  }
                >
                  <CheckCircleOutlined />
                  {handleGetQuestion({ questionId: +questionId! })?.answer3}
                </Button>

                <Button
                  className={styles.answer}
                  type="default"
                  shape="round"
                  onClick={() =>
                    handleCheckAnswer({
                      answer: handleGetQuestion({ questionId: +questionId! })
                        ?.answer4,
                      id: handleGetQuestion({ questionId: +questionId! })?.id,
                      testingResultId: userStack?.Stack.TestingResults[0].id,
                    })
                  }
                >
                  <CheckCircleOutlined />
                  {handleGetQuestion({ questionId: +questionId! })?.answer4}
                </Button>
              </div>
            </div>
            {handleGetCurrentQuestion() && handleGetNumberOfQuestion() && (
              <>
                {handleGetCurrentQuestion() === handleGetNumberOfQuestion() ? (
                  <Button
                    type="default"
                    shape="round"
                    onClick={() => handleFinishTest()}
                  >
                    Завершить тестирование
                    <ProfileOutlined />
                  </Button>
                ) : (
                  <Button
                    type="default"
                    shape="round"
                    onClick={() => handleNextQuestion()}
                  >
                    Следующий вопрос
                    <RightOutlined />
                  </Button>
                )}
              </>
            )}
          </>
        </>
      )}
    </div>
  );
};
