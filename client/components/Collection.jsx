import React from "react";
import css from "../styles/Collection.module.css";

const Collection = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.heading}>
          <h2>OUR COLLECTION</h2>
          <span>
            True friendship is like a
            rose: we don't realize its beauty until it fades
          </span>
          <span>Contact us</span>
        </div>

        {/* collection */}
        <div className={css.flowers}>
            <div className={imageContainer}>
                {/* <Image src = {} alt="" /> */}


            </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
