import reactLogo from "../assets/react.svg";

function GetHeader() {
  return (
    <header>
      <img
        className="logo-img"
        src={reactLogo}
        alt="Logo of the React Javascript Framework"
      />
      <h3 className="logo-text">ReactFacts</h3>
    </header>
  );
}

export default GetHeader;
