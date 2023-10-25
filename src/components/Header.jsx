import reactLogo from "../assets/react.svg";

function GetHeader() {
  return (
    <navbar>
      <img
        className="logo-img"
        src={reactLogo}
        alt="Logo of the React Javascript Framework"
      />
      <h3 className="logo-text">ReactFacts</h3>
      <h4>
        <a href="https://www.youtube.com/watch?v=bMknfKXIFA8">React Course</a>
        {" "}
        - Project 1
      </h4>
    </navbar>
  );
}

export default GetHeader;
