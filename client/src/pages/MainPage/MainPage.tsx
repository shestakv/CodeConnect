import { useAppSelector } from "@/shared/hooks/reduxHooks";
import { Flex, Button } from "antd";
import React, { useEffect } from "react";
import style from "./MainPage.module.css";
import { Link, useNavigate } from "react-router-dom";

type MainPageProps = {};

export const MainPage: React.FC<MainPageProps> = ({}) => {
  const { user } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(`/users/${user.id}`);
    }
  }, [user]);

  return (
    <div>
      <Flex className={style.flex}>
        <div className={style.mainContainer}>
          <>
            <div className={style.container}>
              <div className={style.secondContainer}>
                <h1 className={style.mainTitle}>
                  <span className={style.char2}>C</span>ode
                  <span className={style.char2}>C</span>onnect
                </h1>
                <img
                  className={style.img}
                  data-original="https://static.tildacdn.com/tild6431-3730-4636-a563-376632393766/Untitled.svg"
                  alt=""
                  src="https://static.tildacdn.com/tild6431-3730-4636-a563-376632393766/Untitled.svg"
                  style={{ backgroundColor: "#578cec" }}
                ></img>
                <h1 className={style.title}>
                  Добро пожаловать в <span className={style.char}>C</span>ode
                  <span className={style.char}>C</span>onnect! <br />
                  <br />
                  <p>Ищете разработчиков</p> для своего проекта или новую
                  работу? Вы находитесь в нужном месте!
                  <br />
                  <br />
                  <span className={style.char}>C</span>ode
                  <span className={style.char}>C</span>onnect — это
                  инновационная платформа, которая облегчает поиск
                  квалифицированных специалистов и помогает разработчикам
                  находить интересные вакансии на основе их опыта и стека
                  технологий.
                  <br />
                  <br /> Начните свой путь к новым карьерным вершинам и находите
                  идеальных разработчиков с{" "}
                  <span className={style.char}>C</span>ode
                  <span className={style.char}>C</span>onnect! Присоединяйтесь к
                  нашей платформе и реализуйте свои идеи или найдите работу
                  своей мечты!
                  <br />
                  <br />
                  <div>Для доступа ко всем возможностям сервиса, необходимо <Link to={"/signin"}> войти </Link> или <Link to={"/signup"}> зарегистрироваться</Link>.</div>
                </h1>
              </div>
            </div>
          </>
        </div>
      </Flex>
    </div>
  );
};

export default MainPage;
