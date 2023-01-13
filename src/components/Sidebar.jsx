import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { useNavigate } from "react-router-dom";

// const handleColor =( item ) => {
//   if (item.name=== "New") {
//     return "red"
//   }
//   else if (item.name=== "Music") {
//     return "red"
//   }
//   else{
//     return "yellow"
//   }
// }

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {

  const navigate = useNavigate();

  return (
    <Stack
      direction="row"
      sx={{
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        overflowX: { xs: "auto", sm: "none", md: "none" },
      }}
    >
      {categories.map((category, i) => {
        return (
          <button
            key={i}
            className="category-btn"
            // style={{ background: handleColor( category ), this style on this line has its const above, and the below style at the below line is thesame.
            style={{
              background:
                category.name === selectedCategory
                  ? "red"
                  : category.name === "Music"
                  ? "green"
                  : "",
              // style={{ background: category.name==="CoolBreeze" && "red"?
              color: i === 0 && "yellow",
            }}
            onClick={() => {setSelectedCategory(category.name);      navigate(`/search/${category.name}`)}}
          >
            <span className="icon">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
