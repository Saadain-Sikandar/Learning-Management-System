import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import Input from "../Components/Input";
import SideBar from "../Components/SideNav";
import { db, storage } from "../Config/Firebase";

const SyllabusForm = () => {
  const [subjectname, setSubjectname] = useState("");
  const [classno, setClassno] = useState("");
  const [pdf, setPDF] = useState(null);
  const [pdfname, setPDFname] = useState("No file chosen");
  const navigate = useNavigate();

  //  Upload PDF to Firebase Storage
  const HandlePDf = (e) => {
    if (e.target.files.length > 0) {
      setPDF(e.target.files[0]);
      setPDFname(e.target.files[0].name);
    } else {
      setPDF(null);
      setPDFname("No file chosen");
    }
  };

  //   SavingData in FireBase
  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (!subjectname || !classno || !pdf) {
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
      const storageRef = ref(storage, `syllabus/${pdfname}`);
      await uploadBytes(storageRef, pdf);
      // Not storing PDF in Firebase Storage because it requires a paid (Blaze) plan
      // 2. Get downloadable URL
      const downloadURL = await getDownloadURL(storageRef);

      let syllabusObj = {
        subject: subjectname,
        class: classno,
        pdfURL: downloadURL,
        pdfname: pdfname,
      };

      const saveData = await addDoc(
        collection(db, "Syllabus List"),
        syllabusObj
      );
      console.log(saveData);
      toast.success("Syllabus Added Successfully!", {
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
      navigate("/syllabus");
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
        <main className="flex-1 p-4 mt-[64px] lg:ml-64 flex justify-center flex-col ">
          <h1 className="text-3xl text-center mt-15 underline">ADD SYLLABUS</h1>
          <form
            onSubmit={HandleSubmit}
            className=" mt-10 max-w-sm mx-auto shadow-2xl p-5 rounded-2xl "
          >
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
            {/* <button className="mt-12 mx-auto  p-2 text-center  border rounded  text-white bg-green-600 hover:bg-green-800 "> */}
            <input
              className="mt-12 mx-auto  p-2 text-center  border rounded  text-white bg-green-600 hover:bg-green-800 "
              placeholder={"PDF"}
              type={"file"}
              accept="application/pdf"
              onChange={HandlePDf}
            />
            <PictureAsPdfIcon />
            {/* Upload PDF */}
            {/* </button> */}
            <button
              type="submit"
              className="mx-auto block  mt-10 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Submit
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default SyllabusForm;
