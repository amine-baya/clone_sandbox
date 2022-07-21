import React, { createRef, useEffect } from "react";
import * as d3 from "d3";
import { fakeData } from "../../data/fakeData";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import learnerPageStyle from "../../assets/jss/learnerPageStyle/learnerPageStyle.js";
import { pack } from "d3";

const useStyles = makeStyles(learnerPageStyle);
export default function BubleChart() {
  const classes = useStyles();
  let ell = createRef();
  let width = 800;
  let height = 800;
  if (window.innerWidth <= 600) {
    width = 300;
    height = 300;
  } else if (window.innerWidth <= 900) {
    width = 600;
    height = 600;
  }

  const createSVG = () => {
    d3.select(ell).selectAll("svg").remove();
    return d3
      .select(ell)
      .append("svg")
      .attr("width", width)
      .attr("height", height);
  };
  const pack = (size) => {
    return d3.pack().size(size).padding(3);
  };
  const drawChart = (svg) => {
    let hierachalData = makeHierarchy(fakeData);
    let packLayout = pack([width - 5, height - 5]);
    const root = packLayout(hierachalData);
    const leaf = svg
      .selectAll("g")
      .data(root.leaves())
      .join("g")
      .attr("transform", (d) => `translate(${d.x + 1},${d.y + 1})`);
    leaf
      .append("circle")
      .attr("r", (d) => d.r)
      .attr("fill-opacity", 0.7)
      .attr("fill", "red");

    leaf
      .append("text")
      .text((d) => d.data.id)
      .attr(
        "style",
        "font-size:10px; transform: translateX(-20px);overflow: hidden;"
      );
  };

  const makeHierarchy = (data) => {
    return d3.hierarchy({ children: data }).sum((d) => d.value);
  };
  useEffect(() => {
    let svg = createSVG();
    drawChart(svg);
    console.log(svg);
  }, []);

  return (
    <div>
      <div className={classes.shareChart} ref={(el) => (ell = el)} />
    </div>
  );
}
