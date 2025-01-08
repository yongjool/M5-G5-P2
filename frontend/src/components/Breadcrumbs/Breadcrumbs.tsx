import React from "react";
import styles from "./Breadcrumbs.module.css";

interface BreadcrumbsProps {
  onBreadcrumbClick: (
    breadcrumb: string,
    index: number,
    breadcrumbs: string[]
  ) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ onBreadcrumbClick }) => {
  const breadcrumbs = ["Navigation", "path", "to", "items", "Laptops & PCs"];

  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb, index) => (
        <span
          key={index}
          onClick={() => onBreadcrumbClick(breadcrumb, index, breadcrumbs)}
        >
          {breadcrumb}
          {index < breadcrumbs.length - 1 && " / "}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
