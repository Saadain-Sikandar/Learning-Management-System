import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import Input from "../Components/Input";
import SideBar from "../Components/SideNav";
import { db } from "../Config/Firebase";

const SubjectForm = () => {
  const [subjectname, setSubjectname] = useState("");
  const [groupName, setGroupName] = useState("");
  const [classno, setClassno] = useState("");
  const navigate = useNavigate();

  // Saving Data in fireBase

  const SubmitHandler = async (e) => {
    e.preventDefault();

    if (!subjectname || !classno || !groupName) {
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
      let SubjectObj = {
        subject: subjectname,
        class: classno,
        group: groupName,
      };

      const saveData = await addDoc(collection(db, "Subjects"), SubjectObj);
      console.log(saveData);
      toast.success("Subject Added Successfully!", {
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
      navigate("/subjectlist");
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
    <div>
      {/* Sidebar */}
      <SideBar />
      {/* Form  */}
      <main className="flex-1 p-4 mt-[64px] lg:ml-64 flex justify-center flex-col">
        <h1 className="text-3xl text-center mt-15 underline">ADD SUBJECT</h1>
        <div className="mt-10">
          <form onSubmit={SubmitHandler}  className="max-w-sm mx-auto shadow-2xl p-5 rounded-2xl " >
            <Input
              label={"Subject Name:"}
              placeholder={"Enter subject name"}
              htmlfor={"subject"}
              id={"subject"}
              type={"text"}
              value={subjectname}
              onChange={setSubjectname}
            />
            <Input
              label={"Class:"}
              placeholder={"Enter Class"}
              htmlfor={"class"}
              id={"class"}
              type={"number"}
              value={classno}
              onChange={setClassno}
            />
            <FormControl
              component="fieldset"
              sx={{ display: "flex", alignItems: "center", mt: 3 }}
            >
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{ fontSize: `30px`, color: `black` }}
              >
                Select Group:
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              >
                <FormControlLabel
                  value="General Science"
                  control={<Radio />}
                  label="General Science"
                />
                <FormControlLabel
                  value="Pre-Engineering"
                  control={<Radio />}
                  label="Pre-Engineering"
                />
              </RadioGroup>
            </FormControl>
            <button
              type="submit"
              className="mx-auto block  mt-7 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SubjectForm;
