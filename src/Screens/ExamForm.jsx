import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import Input from "../Components/Input";
import SideBar from "../Components/SideNav";
import { db } from "../Config/Firebase";

const ExamForm = () => {
  const [subjectname, setSubjectname] = useState("");
  const [classno, setClassno] = useState("");
  const [dateno, setDateno] = useState("");
  const [day, setDay] = useState("");
  const [starttime, setstarttime] = useState("");
  const [endtime, setendtime] = useState("");

  const navigate = useNavigate();

  // Saving Data in FireBase

  const SubmitHandler = async (e) => {
    e.preventDefault();

    if (!subjectname || !classno || !dateno || !day || !starttime || !endtime) {
      toast.error(" Please fill all fields!", {
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
      return;
    }
    try {
      let examObj = {
        subject: subjectname,
        class: classno,
        date: dateno,
        day: day,
        starttime:starttime,
        endtime:endtime,
      };

      const saveData = await addDoc(collection(db, "Exam Schedule"), examObj);
      console.log(saveData);
      toast.success("Exam Scheduled Successfully!", {
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
      navigate("/examschedule");
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
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
    }
  };

  return (
    <>
      <SideBar />
      <main className="flex-1 p-4 mt-[64px] lg:ml-64">
        <h1 className="text-3xl mt-10 text-center underline">ADD EXAM/DATE</h1>

        <form
          onSubmit={SubmitHandler}
          className="mt-10 max-w-2xl mx-auto shadow-2xl p-5 rounded-2xl"
        >
          {/* Row 1: Subject + Class */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              htmlfor={"Subject Name"}
              label={"Subject Name:"}
              type={"text"}
              placeholder={"Enter Subject"}
              value={subjectname}
              onChange={setSubjectname}
            />
            <Input
              htmlfor={"Class"}
              label={"Class:"}
              type={"number"}
              placeholder={"Enter Class"}
              value={classno}
              onChange={setClassno}
            />
          </div>

          {/* Row 2: Date + Day */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Input
              htmlfor={"Date"}
              label={"Date:"}
              type={"date"}
              placeholder={"Enter Date"}
              value={dateno}
              onChange={setDateno}
            />
            <Input
              htmlfor={"Day"}
              label={"Day:"}
              type={"text"}
              placeholder={"Enter Day"}
              value={day}
              onChange={setDay}
            />
          </div>

          {/* Row 3: Start Time + End Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Input
              htmlfor={"Starttime"}
              label={"Start Time:"}
              type={"time"}
              value={starttime}
              onChange={setstarttime}
            />
            <Input
              htmlfor={"Endtime"}
              label={"End Time:"}
              type={"time"}
              value={endtime}
              onChange={setendtime}
            />
          </div>

          {/* Row 4: Submit Button Centered */}
          <div className="flex justify-center mt-7">
            <button
              type="submit"
              className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default ExamForm;
