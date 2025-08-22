import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SideBar from "../Components/SideNav";
import { db } from "../Config/Firebase";

const ClassList = () => {
  const [records, setrecords] = useState([]);
  const [search, setSearch] = useState();
  const [refresh, setrefresh] = useState();

  // getting Data from FireBase

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      const data = await getDocs(collection(db, "Students Registration"));
      const dataArray = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setrecords(dataArray);
      setrefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SideBar />
      <main className="flex-1 p-4 mt-[64px] lg:ml-64">
        <div className="mt-10 flex justify-between flex-wrap  ">
          <div className="mb-2">
            <h1 className="text-3xl">Class List</h1>
          </div>
          <div className="flex flex-row items-center border rounded ">
            <FaSearch className="text-gray-500 ms-1 " />
            <input
              className="ms-1 p-2 text-lg "
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search Student"
            />
          </div>
        </div>
        <TableContainer sx={{ mt: `15px` }} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  Last Name
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  Class
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", backgroundColor: "lightgray" }}
                >
                  Gender
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {records
                .slice() // make a copy so original state is not mutated
                .sort((a, b) => a.class.localeCompare(b.class)) // sort by class
                .filter((e) => {
                  if (!search) return true; // if search box empty, show all
                  return (
                    e.name.toLowerCase().includes(search.toLowerCase()) ||
                    e.lastname.toLowerCase().includes(search.toLowerCase()) ||
                    e.class.toLowerCase().includes(search.toLowerCase()) ||
                    e.gender.toLowerCase().includes(search.toLowerCase())
                  );
                })
                .map((e, i) => (
                  <TableRow key={e.id}>
                    <TableCell>{e.id}</TableCell>
                    <TableCell>
                      {e.name.charAt(0).toUpperCase() +
                        e.name.slice(1).toLowerCase()}
                    </TableCell>
                    <TableCell>
                      {e.lastname.charAt(0).toUpperCase() +
                        e.lastname.slice(1).toLowerCase()}
                    </TableCell>
                    <TableCell>{e.class}</TableCell>
                    <TableCell>{e.gender}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </>
  );
};

export default ClassList;
