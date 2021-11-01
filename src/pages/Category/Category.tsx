import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import _ from "lodash";
import ProductsList from "../../components/ProductsList";
import Footer from "../../components/Footer";
import Dropdown from "../../components/Dropdown";
import { categories } from "../../constants/mockData";
import { Header, Filters } from "./Category.Styles";

interface categoryParams {
  category: string;
}

const Category: React.FC = () => {
  const { category } = useParams<categoryParams>();

  const sortBy = [
    {
      id: 1,
      name: "Newest",
    },
    {
      id: 2,
      name: "Best Sellers",
    },
    {
      id: 3,
      name: "Low Price",
    },
    {
      id: 4,
      name: "High Price",
    },
  ];

  return (
    <React.Fragment>
      <Navbar />
      <Header>
        <h1>{`Explore ${_.startCase(_.capitalize(category))} Products`}</h1>
      </Header>
      <Filters>
        <Dropdown title="Category" list={categories} />
        <Dropdown title="Sort By" list={sortBy} />
      </Filters>
      <ProductsList category="arribals" />
      <Footer />
    </React.Fragment>
  );
};

export default Category;
