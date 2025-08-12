import Cards from "./Cards";
import SideFilterBar from "./SideFilterBar";

export default function MainSection() {
  

  return (
    <>
      <div className="flex justify-center items-center py-10">
        <div className="container px-3">
          <div className="flex flex-wrap lg:flex-nowrap items-start">
            <SideFilterBar />
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}
