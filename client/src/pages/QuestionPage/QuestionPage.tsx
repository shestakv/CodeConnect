import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import styles from "./QuestionPage.module.css";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";
import { CheckCircleOutlined, LeftOutlined, ProfileOutlined, RightOutlined } from "@ant-design/icons";
import { getAllUserStacks } from "@/entities/userStack";

export const QuestionPage: React.FC = () => {
  const { userId, stackId, questionId } = useParams();
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
    return userStack?.Stack.StackTasks.length - 1;
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

  const handleSendQuestion = (answer) => {
    dispatch(getAllUserStacks(answer));
  };

  useEffect(() => {
    dispatch(getAllUserStacks({ userId: +userId! }));
  }, [dispatch]);

  console.log(+questionId, handleGetNumberOfQuestion());

  return (
    <div className={styles.container}>
      {userStacks && (
        <>
          <Button
            type="default"
            shape="round"
            onClick={() => navigate(`/users/userStacks/${userId}`)}
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
                    handleSendQuestion(
                      handleGetQuestion({ questionId: +questionId! })?.answer1
                    )
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
                    handleSendQuestion(
                      handleGetQuestion({ questionId: +questionId! })?.answer2
                    )
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
                    handleSendQuestion(
                      handleGetQuestion({ questionId: +questionId! })?.answer3
                    )
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
                    handleSendQuestion(
                      handleGetQuestion({ questionId: +questionId! })?.answer4
                    )
                  }
                >
                  <CheckCircleOutlined />
                  {handleGetQuestion({ questionId: +questionId! })?.answer4}
                </Button>
              </div>
            </div>
            {handleGetCurrentQuestion() && handleGetNumberOfQuestion() && (
              <>
                {/* {handleGetCurrentQuestion() === handleGetNumberOfQuestion() ? ( */}
                {+questionId > handleGetNumberOfQuestion() - 1 ? (
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
