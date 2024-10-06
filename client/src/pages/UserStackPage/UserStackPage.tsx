import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import styles from "./UserStackPage.module.css";
import { LeftOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { getAllUserStacks } from "@/entities/userStack";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";
import { getUserById } from "@/entities/user";

export const UserStackPage: React.FC = () => {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.user);
  const { userStacks } = useAppSelector((state) => state.userStacks);
  const { userPersonal } = useAppSelector((state) => state.userPersonal);
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

          <div className={styles.titleStack}>
            Результаты проверки навыков:
          </div>

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

                    <div className={styles.title}>
                      {userStack.Stack.title}
                    </div>
                  </div>
                  <div className={styles.testResults}>
                    
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
