import React, { useState, useEffect } from "react";
import * as Styles from "./Category.Styles";
import Navbar from "../../components/Navbar";
import _ from "lodash";
import ProductsList from "../../components/ProductsList";
import Footer from "../../components/Footer";
import Dropdown from "../../components/Dropdown";
import { categories, sortBy } from "../../constants/mockData";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectCategory,
  setCategory,
  showMenu,
} from "../../features/app/appSlice";
import MobileMenu from "../../components/MobileMenu";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Size } from "../../models/Hooks";

const Category: React.FC = () => {
  const [catName, setCatName] = useState("");
  const [filter, setFilter] = useState("Newest");
  const idCategory = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();
  const menuStatus = useAppSelector(showMenu);
  const size: Size = useWindowSize();

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

  const handleSetFilter = (filterID: number) => {
    sortBy.forEach((filter) => {
      filter.id === filterID && setFilter(filter.name);
    });
  };

  return (
    <>
      <Navbar />
      {size && size.width && size.width < 1280 && menuStatus ? (
        <MobileMenu />
      ) : (
        <>
          <Styles.Header>
            <h2>
              {catName === "New Arrivals"
                ? `Explorer ${_.startCase(_.capitalize(catName))}`
                : `Explorer ${_.startCase(_.capitalize(catName))} Products`}
            </h2>
          </Styles.Header>
          <Styles.Filters>
            <Dropdown
              list={categories}
              value={catName}
              onSetOption={handleSetCategory}
            />
            <Dropdown
              list={sortBy}
              value={filter}
              onSetOption={handleSetFilter}
            />
          </Styles.Filters>
          <ProductsList categoryID={idCategory} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Category;
