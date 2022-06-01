import './button-square.css';

export const Buttonsquare = (props) => {
  return (
      <button className={props.className} onClick={props.onClick}>{props.title}</button>
  );
};
