import React from "react";
import { useTranslation } from "react-i18next";
import { StoreForm } from "../components/form";

const AddStore = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t("addNewStore")}</h2>
      <StoreForm />
    </div>
  );
};

export { AddStore };
