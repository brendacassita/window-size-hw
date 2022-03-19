import { PRIMARY_COLOR } from "./styles";

const Header = (props) => {
  const getHeader = () => {
    if (props.as === "h2") {
      return styles.h2;
    }
    return styles.h1;
  };
  return <div style={getHeader()}>{props.text}</div>;
};

const styles = {
  h1: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "50px",
    lineWeight: "48px",
    color: PRIMARY_COLOR
  },
  h2: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px",
    lineWeight: "28px",
  },
};

export default Header;