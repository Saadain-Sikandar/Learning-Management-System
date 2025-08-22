import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import Input from "../Components/Input";
import SideBar from "../Components/SideNav";
import { db } from "../Config/Firebase";

const Feesupdateform = () => {
  const [classno, setClassno] = useState();
  const [monthlyFees, setMontlyFees] = useState();
  const [yearlyFees, setYearlyFees] = useState();
  const navigate = useNavigate();

  // Saving Data in FireBase

  const SubmitHandler = async (e) => {
    e.preventDefault();

    if (!classno || !monthlyFees || !yearlyFees) {
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
      let feesObj = {
        classno: classno,
        Mfees: monthlyFees,
        yearfees: yearlyFees,
      };

      const saveData = await addDoc(collection(db, "Fees Structure"), feesObj);
      console.log(saveData);
      toast.success("Fees Structure Added Successfully!", {
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
      navigate("/feesstructure");
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
      <div>
        {/* Sidebar */}
        <SideBar />
        {/* Form  */}
        <main className="flex-1 p-4 mt-[64px] lg:ml-64 flex justify-center flex-col">
          <h1 className="text-3xl text-center mt-15 underline">
            Add Structure
          </h1>
          <div className="mt-10">
            <form
              onSubmit={SubmitHandler}
              className="max-w-sm mx-auto shadow-2xl p-5 rounded-2xl "
            >
              <Input
                label={"Class:"}
                placeholder={"Enter Class"}
                htmlfor={"class"}
                id={"class"}
                type={"number"}
                value={classno}
                onChange={setClassno}
              />
              <Input
                label={"Monthly Fees:"}
                placeholder={"Enter Monthly Fees"}
                htmlfor={"Monthly"}
                id={"Monthly"}
                type={"number"}
                value={monthlyFees}
                onChange={setMontlyFees}
              />
              <Input
                label={"Yearly Fees:"}
                placeholder={"Enter Yearly Fees"}
                htmlfor={"Monthly"}
                id={"Monthly"}
                type={"number"}
                value={yearlyFees}
                onChange={setYearlyFees}
              />
              <button
                type="submit"
                className="mx-auto block  mt-7 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Upload
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Feesupdateform;
