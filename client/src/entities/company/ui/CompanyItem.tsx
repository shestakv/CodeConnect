import React from "react";
import { Company } from "../model";
import styles from "./CompanyItem.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import {
  addFavoriteCompany,
  deleteFavoriteCompany,
} from "@/entities/favoriteCompany";
import { StarFilled, StarOutlined } from "@ant-design/icons";

type Props = {
  company: Company;
};

const CompanyItem: React.FC<Props> = ({ company }) => {
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { favoriteCompanies } = useAppSelector(
    (state) => state.favoriteCompanies
  );
  const userId = useAppSelector((state) => state.user.user?.id);
  const { error } = useAppSelector((state) => state.favoriteCompanies);
  const isFavorite = favoriteCompanies.some(
    (favCompany) =>
      favCompany.companyId === company.id && favCompany.userId === userId
  );

  const handleCardClick = () => {
    navigate(`${ROUTES.COMPANY}/${company.id}`);
  };

  const handleAddToFavorites = async () => {
    if (!userId) return;
    const companyId = company.id;
    await dispatch(addFavoriteCompany({ userId, companyId }));
  };

  const handleRemoveFromFavorites = async () => {
    if (!userId) return;
    const companyId = company.id;
    await dispatch(deleteFavoriteCompany({ userId, companyId }));
  };

  return (
    <div className={styles.container}>
      <button onClick={handleCardClick} className={styles.companyCard}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatar}
            src={`${import.meta.env.VITE_IMG}${company?.logo}`}
            alt={company.name}
          />
          <h3 className={styles.companyName}>{company.name}</h3>
          {user && (
            <div className={styles.starContainer}>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  if (isFavorite) {
                    handleRemoveFromFavorites();
                  } else {
                    handleAddToFavorites();
                  }
                }}
                className={styles.favoriteButton}
              >
                {isFavorite ? (
                  <StarFilled className={styles.starFilled} style={{ color: "#578cec" }} />
                ) : (
                  <StarOutlined style={{ color: "grey" }} />
                )}
                <span className={styles.tooltip}>
                  {isFavorite
                    ? "Удалить из избранного"
                    : "Добавить в избранное"}
                </span>
              </span>
            </div>
          )}
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </button>
    </div>
  );
};

export const MemorizedCompanyItem = React.memo(CompanyItem);
