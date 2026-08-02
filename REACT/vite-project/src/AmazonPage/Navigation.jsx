/*import <name> from<src>*/
import logo from "./assests/finalimage.png";

/*Component time*/
function Navigation() {
  return (
    <div className="nav">
      <img src={logo} width="60px"></img>
      <input placeholder="Search"></input>
      <h2>Navigation Section </h2>
    </div>
  );
}
/*Default export.You must export for you to import*/
export default Navigation;
