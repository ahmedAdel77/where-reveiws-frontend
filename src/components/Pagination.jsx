import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
const Pagination = (props) => {
  const pages = _.range(1, props.PageNo + 1);

  return (
    <React.Fragment>
      <div className=" col-md-4 offset-md-6 margin-top-md">
        <ul className="pagination pagination-lg sec-color">
         

          {pages.map((page) => (
            <li
              className={
                  props?.activePage === page
                  ? "active  page-item"
                  : " page-item"
              }
              key={page}
            >
              <Link
                className="page-link sec-color name"
                onClick={() => {
                  console.log(props?.activePage);
                  console.log(page);
                  props.pageChange(page);
                }}
              >
                {" "}
                {page}
              </Link>
            </li>
          ))}

        
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Pagination;
