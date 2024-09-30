import React from "react";
import Product from "./Product";

const   Products = () => {
  var products = [
    {
      title: "arqitel",
      url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      description:
        "aqua executive and its employees are continue to receive orders for customer and that get orders for customers that",
      live: true,
      case: false,
    },
    {
        title: "TTR",
        url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
        description:
        "aqua executive and its employees are continue to receive orders for customer and that get orders for customers that",
        live: true,
        case: false,
    },
    {
      title: "YTR-2022",
      url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      description:
      "aqua executive and its employees are continue to receive orders for customer and that get orders for customers that",
      live: true,
        case: true,
    },
    {
      title: "arqitel",
      url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      description:
        "aqua executive and its employees are continue to receive orders for customer and that get orders for customers that",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      description:
      "aqua executive and its employees are continue to receive orders for customer and that get orders for customers that",
      live: true,
      case: true,
    },
    {
        title: "TTR",
        url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
        description:
        "aqua executive and its employees are continue to receive orders for customer and that get orders for customers that",
        live: true,
        case: false,
      },
      {
          title: "YTR-2022",
          url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
          description:
          "aqua executive and its employees are continue to receive orders for customer and that get orders for customers that",
          live: true,
          case: true,
      },
    {
      title: "Yahoo!",
      url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      description:
        "aqua executive and its employees are continue to receive orders for customer and that get orders for customers that",
      live: true,
      case: true,
    }
  ];

  return (
    <div className="products mt-32">
        {products.map((val,index)=> <Product val={val} />)}
    </div>
  );
};

export default Products;
