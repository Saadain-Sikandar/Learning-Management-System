import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import SideBar from "../Components/SideNav";
import SimpleTable from "../Components/Table";
import { db } from "../Config/Firebase";

const SubjectList = () => {
  const [records, setrecord] = useState([]);
  const [refresh, setRefresh] = useState();
  const navigate = useNavigate();

  //   get Data from FireBase

  useEffect(() => {
    GetData();
  }, [refresh]);

  const GetData = async () => {
    try {
      let data = await getDocs(collection(db, "Subjects"));
      let dataArray = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setrecord(dataArray);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  //   Deleting Data from FireBase

  const DeleteSubject = async (subjectid) => {
    try {
      const deleted = await deleteDoc(doc(db, "Subjects", subjectid));
      setrecord(records.filter((record) => record.id !== subjectid));
      console.log(deleted);
      toast.success(" Subject Deleted Successfully!", {
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
          <h1 className="text-3xl">Subject List</h1>
          <button
            onClick={() => navigate("/subjectform")}
            className="bg-green-500 p-2 text-white rounded-md  "
          >
            Add Subject
          </button>
        </div>
        <div>
          <SimpleTable
            heading1={"ID"}
            heading2={"Subject"}
            heading3={"Group"}
            heading4={"class"}
            heading5={"Actions"}
            records={records}
            onDelete={DeleteSubject}
          />
        </div>
      </main>
    </>
  );
};

export default SubjectList;
