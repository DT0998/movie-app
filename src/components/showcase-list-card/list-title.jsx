function ListTitle(props) {
    return ( 
        <div className="d-flex justify-content-lg-between align-items-center justify-content-center">
        <h1
          className={props.classNameTitle}
        >
          {" "}
          {props.titlemain}
        </h1>
      </div>
     );
}

export default ListTitle;