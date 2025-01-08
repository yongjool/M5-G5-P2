import React from "react";
import styles from "./Breadcrumbs.module.css";

interface BreadcrumbsProps {
  onBreadcrumbClick: (index: number, breadcrumbs: string[]) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ onBreadcrumbClick }) => {
  const breadcrumbs = ["Home", "path", "to", "items", "Laptops & PCs"];

  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb, index) => {
        if (index === 0 || index === breadcrumbs.length - 1) {
          return (
            <span
              key={index}
              onClick={() => onBreadcrumbClick(index, breadcrumbs)}
            >
              {breadcrumb}
              {index < breadcrumbs.length - 1 && " / "}
            </span>
          );
        } else {
          return (
            <span
              key={index}
              onClick={() => onBreadcrumbClick(index, breadcrumbs)}
            >
              ...{index < breadcrumbs.length - 1 && " / "}
            </span>
          );
        }
      })}
    </div>
  );
};

export default Breadcrumbs;
