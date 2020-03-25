import React from "react";
import { useTranslation } from "react-i18next";

const AddStore = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t("addNewStore")}</h2>
    </div>
  );
};

export { AddStore };
