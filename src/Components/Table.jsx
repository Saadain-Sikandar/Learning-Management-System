import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function SimpleTable({
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  records,
  onDelete,
}) {
  return (
    <div className="flex justify-center mt-10">
      <TableContainer component={Paper} className="w-auto shadow-lg">
        <Table>
          <TableHead className="bg-gray-200">
            <TableRow>
              <TableCell sx={{ fontWeight: `bold` }}>{heading1}</TableCell>
              <TableCell sx={{ fontWeight: `bold` }}>{heading2}</TableCell>
              <TableCell sx={{ fontWeight: `bold` }}>{heading3}</TableCell>
              <TableCell sx={{ fontWeight: `bold` }}>{heading4}</TableCell>
              <TableCell sx={{ fontWeight: `bold` }}>{heading5}</TableCell>
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
              records.map((e, i) => (
                <TableRow key={e.id} className="hover:bg-gray-100">
                  <TableCell>{e.id}</TableCell>
                  <TableCell>
                    {e.name
                      ? e.name.charAt(0).toUpperCase() +
                        e.name.slice(1).toLowerCase()
                      : e.subject.charAt(0).toUpperCase() +
                        e.subject.slice(1).toLowerCase()}
                  </TableCell>
                  <TableCell>
                    {e.lastname
                      ? e.lastname.charAt(0).toUpperCase() +
                        e.lastname.slice(1).toLowerCase()
                      : e.group.charAt(0).toUpperCase() +
                        e.group.slice(1).toLowerCase()}
                  </TableCell>
                  <TableCell>{e.email ? e.email : e.class}</TableCell>
                  <TableCell>
                    <Button onClick={() => onDelete(e.id)}>
                      <DeleteIcon sx={{ color: `red`, fontSize: `35px` }} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
