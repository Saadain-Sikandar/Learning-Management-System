import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import SideBar from "../Components/SideNav";
import SimpleTable from "../Components/Table";
import { db } from "../Config/Firebase";

const Students = () => {
  const [records, setRecords] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    GetData();
  }, [refresh]);

  const GetData = async () => {
    try {
      const data = await getDocs(collection(db, "Students Registration"));

      const dataArray = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecords(dataArray);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteData = async (studentid) => {
    try {
      const deleted = await deleteDoc(
        doc(db, "Students Registration", studentid)
      );
      setRecords(records.filter((record) => record.id !== studentid));
      console.log(deleted);
      toast.success(" Student Deleted Successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SideBar />
      <main className="flex-1 p-4 mt-[64px] lg:ml-64">
        <div className=" mt-10 flex justify-between">
          <h1 className="text-3xl">Student Registration List</h1>
          <button
            onClick={() => navigate("/studentform")}
            className="bg-green-500 p-2 text-white rounded-md  "
          >
            Add Student
          </button>
        </div>
        <div>
          <SimpleTable
            heading1={"ID"}
            heading2={"Name"}
            heading3={"Last Name"}
            heading4={"Email"}
            heading5={"Actions"}
            records={records}
            onDelete={DeleteData}
          />
        </div>
      </main>
    </>
  );
};

export default Students;
