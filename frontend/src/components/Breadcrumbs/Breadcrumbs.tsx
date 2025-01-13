import React from "react";
import styles from "./Breadcrumbs.module.css";

interface Breadcrumb {
  name: string;
  url: string;
  displayName?: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
  onBreadcrumbClick: (index: number, breadcrumbs: Breadcrumb[]) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs, onBreadcrumbClick }) => {
  return (
    <div className={`${styles.breadcrumbs} inter-regular-12`}>
      {breadcrumbs.map((breadcrumb, index) => (
        <span
          key={index}
          onClick={() => onBreadcrumbClick(index, breadcrumbs)}
          className={styles.breadcrumb}
        >
          {breadcrumb.displayName || breadcrumb.name} 
          {index < breadcrumbs.length - 1 && " / "}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
