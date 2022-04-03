function ListTitle(props) {
    return ( 
        <div className="d-flex justify-content-lg-between align-items-center justify-content-center">
        <h1
          className={props.classNameTitle}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          {" "}
          {props.titlemain}
        </h1>
      </div>
     );
}

export default ListTitle;