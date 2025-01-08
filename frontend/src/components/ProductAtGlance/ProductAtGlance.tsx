import React, { useState } from "react";
import styles from "./ProductAtGlance.module.css";

const ProductAtGlance: React.FC = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections((prevSections) =>
      prevSections.includes(section)
        ? prevSections.filter((s) => s !== section)
        : [...prevSections, section]
    );
  };

  return (
    <div className={styles.productAtGlanceContainer}>
      <div className={styles.title}>Product at a Glance</div>
      <div
        onClick={() => toggleSection("aboutProduct")}
        className={styles.sectionHeader}
      >
        About product
        <span className={styles.icon}>
          {openSections.includes("aboutProduct") ? "-" : "+"}
        </span>
      </div>
      {openSections.includes("aboutProduct") && (
        <div className={styles.sectionContent}>
          Lorem ipsum dolor sit amet. Rem temporibus aspernatur qui cupiditate
          iusto aut eaque nesciunt est nihil autem. Et dicta dolorum nam
          doloremque esse hic aliquam enim non nemo officiis et dicta assumenda!
          Vel adipisci molestiae sit assumenda deleniti non animi rerum est
          earum dolores non libero Quis aut fuga ipsum non quam dolorem. Est
          ipsa architecto sit facere minus est placeat earum est rerum corporis
          sed nisi officia qui omnis consequatur aut aliquam unde.
        </div>
      )}

      <div
        onClick={() => toggleSection("instructions")}
        className={styles.sectionHeader}
      >
        Instructions and maintenance
        <span className={styles.icon}>
          {openSections.includes("instructions") ? "-" : "+"}
        </span>
      </div>
      {openSections.includes("instructions") && (
        <div className={styles.sectionContent}>
          Non nulla quis et temporibus architecto et deleniti quod et quod
          dolores et voluptatem galisum. Ad possimus harum quo fugiat velit hic
          fuga nostrum ea laboriosam quaerat et atque quia et modi labore. Est
          recusandae excepturi in iste vero non similique voluptate sed voluptas
          corporis est sunt nisi! Et quidem quia in possimus impedit aut galisum
          accusantium qui Quis explicabo.
        </div>
      )}

      <div
        onClick={() => toggleSection("warranty")}
        className={styles.sectionHeader}
      >
        Warranty
        <span className={styles.icon}>
          {openSections.includes("warranty") ? "-" : "+"}
        </span>
      </div>
      {openSections.includes("warranty") && (
        <div className={styles.sectionContent}>
          Et repellendus nostrum et galisum provident quo obcaecati consequatur
          et dolorem ipsum et ullam rerum aut porro dolore cum adipisci
          explicabo! Et facere accusamus non dolor velit qui voluptates natus
          eos omnis autem.
        </div>
      )}

      <div
        onClick={() => toggleSection("delivery")}
        className={styles.sectionHeader}
      >
        Delivery
        <span className={styles.icon}>
          {openSections.includes("delivery") ? "-" : "+"}
        </span>
      </div>
      {openSections.includes("delivery") && (
        <div className={styles.sectionContent}>
          Ut perspiciatis odit aut nemo natus est enim numquam est nesciunt
          odit. Est optio exercitationem eos excepturi quibusdam qui amet
          consequatur! Quo voluptatem suscipit ut autem suscipit et nihil quasi
          sit quod quas in tempore voluptas.
        </div>
      )}
    </div>
  );
};

export default ProductAtGlance;
