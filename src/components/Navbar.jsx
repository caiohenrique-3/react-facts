import reactLogo from "../assets/react.svg";

function GetNavbar() {
  return (
    <navbar>
      <img
        className="logo-img"
        src={reactLogo}
        alt="Logo of the React Javascript Framework"
      />
      <h3 className="logo-text">ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </navbar>
  );
}

export default GetNavbar;
