import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import Simplecard from "../Components/ExamCard";
import SideBar from "../Components/SideNav";
import { db } from "../Config/Firebase";

const ExamSchedule = () => {
  const [records, setrecords] = useState([]);
  const [refresh, setRefresh] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [refresh]);

  const getData = async () => {
    try {
      const data = await getDocs(collection(db, "Exam Schedule"));
      const dataArray = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setrecords(dataArray);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  //   Deleting Data

  const Deleteschedule = async (id) => {
    try {
      const deleted = await deleteDoc(doc(db, "Exam Schedule",id));
      setrecords(records.filter((record) => record.id !== id));
      console.log(deleted);
      toast.success(" Deleted Successfully!", {
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
      <main className=" flex-1 p-4 mt-[64px] lg:ml-64 ">
        <div className=" mt-10 flex justify-between">
          <h1 className="text-3xl">Exam Schedule</h1>
          <button
            onClick={() => navigate("/examform")}
            className="bg-green-500 p-2 text-white rounded-md  "
          >
            Schedule Exam
          </button>
        </div>
        <div className="mt-10 flex justify-center items-center flex-col ">
          <Simplecard records={records} onDelete={Deleteschedule} />
        </div>
      </main>
    </>
  );
};
9;
export default ExamSchedule;
