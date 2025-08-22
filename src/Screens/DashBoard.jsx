import SimpleCard from "../Components/Card";
import SideBar from "../Components/SideNav";

const DashBoard = () => {
  return (
    <div>
      <SideBar />
      <main className="flex-1 p-4 mt-[64px] lg:ml-64">
        <div className="flex justify-center mt-10 ">
          <h1 className="text-4xl  font-semibold">DashBoard</h1>
        </div>
        <div className="flex justify-center items-center flex-wrap mt-10 p-3 gap-10 ">
          <SimpleCard
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT51tO1oLajR7cBLwptViNQ1JG8yq9mKSzvwA&s"
            }
            link={"/examschedule"}
            linkName={"EXAM SCHEDULE"}
          />

          <SimpleCard
            img={
              "https://static.vecteezy.com/system/resources/thumbnails/017/726/215/small/fee-going-up-or-down-concept-photo.jpg"
            }
            link={"/feesstructure"}
            linkName={"FEE STRUCTURE"}
          />

          <SimpleCard
            img={
              "https://i.pinimg.com/736x/db/b3/6a/dbb36aa3f20c018679d6ea6cc6c03b15.jpg"
            }
            link={"/classlist"}
            linkName={"CLASS LIST"}
          />
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
