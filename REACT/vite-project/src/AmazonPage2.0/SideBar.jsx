import FilterList from "./FilterList";

function SideBar() {
  return (
    <div style={{ display: "flex", width: "500px", flexDirection: "column" }}>
      <FilterList title={"Conditions"} options={["New", "Used", "Renewed"]} />
      <FilterList
        title={"Material"}
        options={[
          "Metal",

          "Polyvinyl Chloride (PVC)",

          "Polypropylene (PP)",

          "Rubber",

          "Silicone",

          "Stainless Steel",

          "Thermoplastic Polyurethane (TPU)",
        ]}
      />

      <FilterList
        title={"Uses"}
        options={[
          "Exercise",
          "Speed and Endurance",
          "Boxing",
          "BodyBuilding",
          "martialarts",
        ]}
      />
      <FilterList title={"Brand"} options={["Adidas", "Nike", "Canon"]} />
    </div>
  );
}

export default SideBar;
