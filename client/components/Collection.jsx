import css from "../styles/Collection.module.css";
import data from "../data/data";
import Image from "next/image";

const Collection = () => {
  const { flowers } = data; // Destructure flowers from data
  console.log(flowers);

  return (
    <>
      <div className={css.container}>
        <div className={css.heading}>
          <h1>OUR COLLECTION</h1>
          <span>
            True friendship is like a rose: we don't realize its beauty until it
            fades
          </span>
          {/* <span>Contact us</span> */}
        </div>

        {/* collection -mapping */}
        <div className={css.collection}>
          {flowers.map((flower, index) => (
            <div className={css.flowers} key={flower.id}>
              <div className={css.imageContainer}>
                <Image
                  src={flower.pic}
                  alt="flower_bouquets"
                  width={225}
                  height={250}
                  objectFit="cover"
                  style={{ borderRadius: "2rem" }}
                />
              </div>
              <span>{flower.name}</span>
              <span> 
                <span style = {{color: "var(--themeRed)" }}> $ </span>
                {flower.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Collection;
