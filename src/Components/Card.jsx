import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function SimpleCard({ img, link, linkName, onClick }) {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: 350,
        height: 300,
        border: 1,
        borderRadius: 5,
        borderColor: `white`,
        boxShadow: 8,
        ":hover": { boxShadow: 16 },
        transition: "all 0.2s ease-in-out",
      }}
    >
      <CardActionArea sx={{ textAlign: "center", height: "100%" }}>
        <CardMedia
          component="img"
          image={img}
          alt="image"
          sx={{
            height: 180,
            objectFit: "cover",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link
              to={link}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.textDecoration = "underline")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              {linkName}
            </Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
