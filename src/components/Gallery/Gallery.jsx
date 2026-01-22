import img2 from "../../assets/rainy.jpg";
import img3 from "../../assets/sunny.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <img src={img2} alt="rainy image" id="rainy" />
      <img src={img3} alt="sunset image" id="sunset" />
    </div>
  );
};

export default Gallery;
