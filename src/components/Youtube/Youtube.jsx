import React from "react";
import "./youtube.css";
import YoutubeEmbed from "./YoutubeEmbed.js";
import {useTranslation} from 'react-i18next';


 const  Youtube = () => {
  const {t} = useTranslation()

  return (
    <div className="youtube">
      <h4>{t("News.news1")}</h4><br />
      <YoutubeEmbed embedId="TkdHNFnV1s4" />
    </div>
  );
}

export default Youtube