import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../Components/SideNav";

const SyllabusList = () => {
  const [records, setrecords] = useState([]);
  const navigate = useNavigate();

  return (
    <>
      <SideBar />
      <main className="flex-1 p-4 mt-[64px] lg:ml-64">
        <div className=" mt-10 flex justify-between">
          <h1 className="text-3xl">Syllabus List</h1>
          <button
            onClick={() => navigate("/syllabusform")}
            className="bg-green-500 p-2 text-white rounded-md  "
          >
            Add Syllabus
          </button>
        </div>
        <div className="mt-6">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="bg-gray-200">
                <TableRow>
                  <TableCell sx={{ fontWeight: `bold` }}>ID</TableCell>
                  <TableCell sx={{ fontWeight: `bold` }}>Subject</TableCell>
                  <TableCell sx={{ fontWeight: `bold` }}>Class</TableCell>
                  <TableCell sx={{ fontWeight: `bold` }}>Download</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {records.length == 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} style={{ textAlign: "center" }}>
                      <h1>No Records Found</h1>
                    </TableCell>
                  </TableRow>
                ) : (
                  records.map((e) => (
                    <TableRow key={e.id}>
                      <TableCell>{e.id}</TableCell>
                      <TableCell>{e.name}</TableCell>
                      <TableCell>{e.age}</TableCell>
                      <TableCell>{e.city}</TableCell>
                      <TableCell>{e.status}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </main>
    </>
  );
};

export default SyllabusList;
