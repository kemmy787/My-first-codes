import MainSection from "./MainSection";
import SideBar from "./SideBar";
import Navigation from "./Navigation";
import "./index.css";

function AmazonPage() {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div style={{ display: "flex " }}>
        <SideBar />
        <MainSection />
      </div>
    </div>
  );
}
export default AmazonPage;
