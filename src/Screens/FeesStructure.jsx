import { Box, Button, Card } from "@mui/material";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import SideBar from "../Components/SideNav";
import { db } from "../Config/Firebase";

const FeesStructure = () => {
  const [records, setrecords] = useState([]);
  const [refresh, setRefresh] = useState();
  const navigate = useNavigate();

  // Get Data from FirBase

  useEffect(() => {
    GetData();
  }, [refresh]);

  const GetData = async () => {
    try {
      const data = await getDocs(collection(db, "Fees Structure"));
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

  const DeletefeesStruc = async (id) => {
    try {
      const deletefees = await deleteDoc(doc(db, "Fees Structure", id));
      setrecords(records.filter((feesstruc) => feesstruc.id !== id));
      console.log(deletefees);
      toast.success(" Structure Deleted Successfully!", {
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
        <div className="mt-10 flex justify-between ">
          <h1 className="text-3xl">Fees Structure</h1>
          <button
            onClick={() => navigate("/FeesStructureupdate")}
            className="bg-green-500 p-2 text-white rounded-md  "
          >
            Add/update Structure
          </button>
        </div>

        <div className="mt-10">
          {records.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30vh",
              }}
            >
              <h1 className="font-bold">No Data Found!</h1>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: `center`,
                flexDirection: `column`,
                gap: 2,
                mt: 4,
              }}
            >
              {records
                .sort((a, b) => a.classno.localeCompare(b.classno))
                .map((e) => (
                  <Card
                    key={e.id}
                    sx={{
                      width: `500px`,
                      maxWidth: "100%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      boxShadow: 3,
                      borderRadius: "2px",
                      padding: "10px",
                    }}
                  >
                    <div className="text-center">
                      <h3 className="font-bold text-2xl">Class: {e.classno}</h3>
                    </div>

                    <div className="flex justify-between flex-row font-semibold ">
                      <h4>Monthly Fees:</h4>
                      <h4>{e.Mfees}</h4>
                    </div>
                    <div className="flex justify-between flex-row font-semibold">
                      <h4>Yearly Fees:</h4>
                      <h4>{e.yearfees}</h4>
                    </div>
                    <div className="text-center">
                      <Button
                        onClick={() => DeletefeesStruc(e.id)}
                        sx={{ marginTop: "15px", width: `100px` }}
                        variant="contained"
                        color="error"
                      >
                        Delete
                      </Button>
                    </div>
                  </Card>
                ))}
            </Box>
          )}
        </div>
      </main>
    </>
  );
};

export default FeesStructure;
