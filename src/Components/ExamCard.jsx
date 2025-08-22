import { Box, Button, Card, CardContent, Typography } from "@mui/material";

export default function Simplecard({ onDelete, records }) {
  return (
    <>
      {records.length == 0 ? (
        <Box
          sx={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            marginTop: `30vh`,
          }}
        >
          <h1 className="font-bold">No Exams Scheduled</h1>
        </Box>
      ) : (
        records
          .sort((a, b) => a.class.localeCompare(b.class))
          .map((e, i) => (
            <Card
              key={e.id}
              sx={{
                width: `500px`,
                maxWidth: `100%`,
                borderRadius: 2,
                boxShadow: 3,
                mb: 2,
              }}
            >
              <CardContent sx={{ padding: `10` }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  Class: {e.class} -{" "}
                  {e.subject
                    ? e.subject.charAt(0).toUpperCase() +
                      e.subject.slice(1).toLowerCase()
                    : ""}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  DATE: {`${e.date}-${e.day}`}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  TIMINGS: {e.starttime} - {e.endtime}
                </Typography>

                <Button
                  variant="contained"
                  color="error"
                  onClick={() => onDelete(e.id)}
                  sx={{ mt: 2 }}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          ))
      )}
    </>
  );
}
