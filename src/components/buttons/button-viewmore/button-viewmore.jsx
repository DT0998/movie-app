import "./button-viewmore.css";

export const Buttonviewmore = () => {
  
  return (
    <div>
      <button
        className="btn_view view-more"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">View More</span>
      </button>
    </div>
  );
};
