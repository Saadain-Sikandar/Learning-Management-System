import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import SideBar from "../Components/SideNav";
import { db } from "../Config/Firebase";

const TeacherForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [classno, setClassno] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  // Saving Data in FireBase

  const SubmitHandler = async (e) => {
    e.preventDefault();
    console.log(name, lastName, email, classno, gender);

    if (!name || !lastName || !email || !gender || !classno) {
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
      let userObj = {
        name: name,
        lastname: lastName,
        email: email,
        class: classno,
        gender: gender,
      };
      const saveData = await addDoc(
        collection(db, "Faculty Registration"),
        userObj
      );
      console.log(saveData);
      toast.success("Faculty Added Successfully!", {
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
      navigate("/teachers");
    } catch (error) {
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
      {/* Sidebar */}
      <SideBar />
      {/* Form  */}
      <main className="flex-1 p-4 mt-[64px] lg:ml-64">
        <h1 className="text-3xl text-center mt-15 underline">
          FACULTY REGISTRATION
        </h1>
        <div className="mt-10">
          <form
            onSubmit={SubmitHandler}
            className=" mt-10 max-w-sm mx-auto shadow-2xl p-5 rounded-2xl"
          >
            <div className="mb-5">
              <label
                htmlFor="Name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="Lname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                LastName
              </label>
              <input
                type="text"
                id="Lname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter LastName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="class"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Class
              </label>
              <input
                type="number"
                id="class"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setClassno(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4 mb-5">
              <h1 className="font-semibold text-2xl">Gender:</h1>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    name="gender"
                    type="radio"
                    value="Male"
                    className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 
                   focus:ring-3 focus:ring-blue-300 
                   dark:bg-gray-700 dark:border-gray-600 
                   dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                   dark:focus:ring-offset-gray-800"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Male
                </label>

                <label className="flex items-center gap-2">
                  <input
                    name="gender"
                    type="radio"
                    value="Female"
                    className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 
                   focus:ring-3 focus:ring-blue-300 
                   dark:bg-gray-700 dark:border-gray-600 
                   dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                   dark:focus:ring-offset-gray-800"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Female
                </label>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default TeacherForm;
