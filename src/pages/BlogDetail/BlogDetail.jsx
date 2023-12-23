import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./BlogDetail.module.css"
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { URl_BASE } from "../../utils/url";

const BlogDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const URL = `${URl_BASE}/posts/${id}`;
      try {
        await axios.get(URL).then((response) => {
          setData(response.data);
        });
      } catch (error) {
        console.log("error fetching blog detail data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navigation t={t} i18n={i18next} />
      <div className="mt-20 h-[480px] w-full overflow-hidden">
        <img
          className="w-full object-cover"
          src={
            data.image
              ? data.image
              : "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
          }
          alt={data.card_title}
        />
      </div>
      <div
        className={`${styles.dataText} font-poppins text-titleColor`}
        dangerouslySetInnerHTML={{ __html: data.text }}
      />
      <Footer t={t}/>
    </div>
  );
};

export default BlogDetail;
