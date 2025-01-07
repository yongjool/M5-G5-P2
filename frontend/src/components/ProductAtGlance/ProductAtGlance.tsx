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
      <h2>Product at a Glance</h2>
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
          Details about the product...
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
          Instructions and maintenance details...
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
        <div className={styles.sectionContent}>Warranty details...</div>
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
        <div className={styles.sectionContent}>Delivery details...</div>
      )}
    </div>
  );
};

export default ProductAtGlance;
