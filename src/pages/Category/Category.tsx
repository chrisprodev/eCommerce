import React, { useState, useEffect } from "react";
import * as Styles from "./Category.Styles";
import _ from "lodash";
import ProductsList from "../../components/ProductsList";
import Dropdown from "../../components/Dropdown";
import { categories } from "../../constants/mockData";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectCategory, setCategory } from "../../features/app/appSlice";
import { fadeUp } from "../../constants/animations";

const Category: React.FC = () => {
  const [catName, setCatName] = useState("");
  const idCategory = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();

  useEffect(() => {
    categories.forEach((cat) => {
      cat.id === idCategory && setCatName(cat.name);
    });
  }, [idCategory]);

  const handleSetCategory = (catID: number) => {
    categories.forEach((cat) => {
      cat.id === catID && setCatName(cat.name);
    });

    dispatch(setCategory(catID));
  };

  return (
    <>
      <Styles.Header
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeUp}
      >
        <h2>
          {catName === "New Arrivals"
            ? `Explorer ${_.startCase(_.capitalize(catName))}`
            : `Explorer ${_.startCase(_.capitalize(catName))} Products`}
        </h2>
      </Styles.Header>
      <Styles.Filters
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeUp}
      >
        <Dropdown
          list={categories}
          value={catName}
          onSetOption={handleSetCategory}
        />
      </Styles.Filters>
      <ProductsList categoryID={idCategory} show={16} />
    </>
  );
};

export default Category;
