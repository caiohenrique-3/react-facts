import reactLogo from "../assets/react.svg";
import ThemeSwitch from "./ThemeSwitch";

function GetHeader() {
  return (
    <header>
      <img
        className="logo-img"
        src={reactLogo}
        alt="Logo of the React Javascript Framework"
      />
      <h3 className="logo-text">ReactFacts</h3>

      <ThemeSwitch />
    </header>
  );
}

export default GetHeader;
