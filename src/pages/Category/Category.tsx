import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import _ from "lodash";
import ProductsList from "../../components/ProductsList";
import Footer from "../../components/Footer";
import Dropdown from "../../components/Dropdown";
import { categories, sortBy } from "../../constants/mockData";
import { Header, Filters } from "./Category.Styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectCategory, setCategory } from "../../features/app/appSlice";

const Category: React.FC = () => {
  const [catName, setCatName] = useState("");
  const [filter, setFilter] = useState("Newest");
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

  const handleSetFilter = (filterID: number) => {
    sortBy.forEach((filter) => {
      filter.id === filterID && setFilter(filter.name);
    });
  };

  return (
    <React.Fragment>
      <Navbar />
      <Header>
        <h2>
          {catName === "New Arrivals"
            ? `Explorer ${_.startCase(_.capitalize(catName))}`
            : `Explorer ${_.startCase(_.capitalize(catName))} Products`}
        </h2>
      </Header>
      <Filters>
        <Dropdown
          list={categories}
          value={catName}
          onSetOption={handleSetCategory}
        />
        <Dropdown list={sortBy} value={filter} onSetOption={handleSetFilter} />
      </Filters>
      <ProductsList categoryID={idCategory} />
      <Footer />
    </React.Fragment>
  );
};

export default Category;
