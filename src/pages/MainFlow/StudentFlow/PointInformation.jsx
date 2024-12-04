import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
} from "@mui/material";

const routeData = [
  {
    title: "Point 1",
    details:
      "via Model Mor, Malir Halt, Colony Gate, Nata Khan Bridge, Drigh Road Station, PAF Base Faisal, Laal Kothi, Karsaz, Nursery, FTC, Regent Plaza, Metropole, Fawwara Chowk, Arts Council, Shaheen Complex, I.I.Chundrigar, Tower, Fisheries, and Dockyard",
    driver: {
      name: "Rasheed Ahmed",
      contact: "0300-3776802",
    },
  },
  {
    title: "Point 2",
    details:
      "Sachal Goth Main Gate (15 km), Madras Chowrangi (17 km), Muhammad Khan Goth (16 km), G-3 Bus Stop (17 km), Marora Goth (16 km), Memon Hospital (16 km), Rim Jhim Tower (15 km), Safora Goth (14 km), Johar Complex (13 km), Mosmiyat (13 km), Samama Shopping Center (10 km), Nipa Chowrangi (9 km), Mumtaz Manzil (8 km), Old Subzi Mandi (5 km), University",
    driver: {
      name: "Naeem",
      contact: "0334-3821795 / 0311-2773880",
    },
  },
  {
    title: "Point 3",
    details:
      "Naval Chowrangi (20 km), Mawach Mor (18 km), Ruby Chowk (17 km), Muhajir Camp 03 No. & 04 No. (15 km), Shershah (11 km), Habib Bank Pull (8 km), Nazimabad Petrol Pump (7 km), Enquiry Office (7 km), Golimar Chowrangi (7 km), Lasbella Chowranig (5 km), University",
    driver: {
      name: "Mehboob",
      contact: "0335-2279242 / 0343-2516441",
    },
  },
  {
    title: "Point 4",
    details:
      "Malir 15 (17 km), Kala Board (16 km), Natha Khan (12 km), Shahra-e Faisal (12 km), Drig Road (12 km), Baloch Colony Pull (7 km), Shaheed-e-Milat Road (7 km), University",
    driver: {
      name: "Muhammad Imran",
      contact: "0301-2550247",
    },
  },
  {
    title: "Point 5",
    details:
      "Khokrapar 2 No. (21 km), Saudabad Chowrangi (20 km), Model Colony (19 km), Dipu (16 km), Malir Halt (16 km), Wireless Gate (16 km), Dalmia (6 km), Agha Khan Hospital (5 km), Liaquat National Hospital (5 km), University",
    driver: {
      name: "Zubair Mirani",
      contact: "0313-3492396 / 0300-2092166",
    },
  },
  {
    title: "Point 6",
    details:
      "Islam Chowk (13 km), 05 No Bus Stop (9 km), Pony 5 (9 km), Banaras Pull (9 km), Abdullah College (9 km), Board Office (8 km), A.O Clinic (8 km), Hyderi (8 km), Five Star (10 km), Water Pump (9 km), Karimabad (7 km), University",
    driver: {
      name: "Amin",
      contact: "0323-2267628",
    },
  },
  {
    title: "Point 7",
    details:
      "Tank Chowk (17 km), Magsi Chowk (15 km), Bhitayabad (15 km), Dubai House (15 km), Nawaz Sharif Scheme (14 km), Kamran Chowrangi (13 km), Munawar Chowrangi (13 km), Pehlwan Goth (15 km), Rabia City (15 km), Johar Chowrangi (11 km), Johar Mor (11 km), Millennium Mall (9 km), National Stadium (6 km), University",
    driver: {
      name: "Faqeer Muhammad",
      contact: "0322-3882312 / 0311-1804275",
    },
  },
  {
    title: "Point 8",
    details:
      "89 Landhi (21 km), Babar Market (21 km), Korangi #5 (17 km), Korangi Crossing (15 km), Qayumabad (11 km), Akhtar Colony (9 km), Gold Mark DHA Phase-1 (8 km), Punjab Chowrangi (9 km), Boat Basin (10 km), Teen Talwar (7 km), Race Course (8 km), Dehli Colony (8 km), Kala Pull (6 km), FTC Building (5 km), University",
    driver: {
      name: "Ghulam Hussain",
      contact: "0306-2328887",
    },
  },
  {
    title: "Point 9",
    details:
      "4K Chowrangi (18 km), Power House (16 km), Nagan Chowrangi (13 km), Sakhi Hassan (12 km), People Chowrangi (11 km), Dental College (10 km), Landi Kotal Chowrangi (9 km), Tahir Villa (9 km), Aisha Manzil (8 km), Lalu Khet 10 No. (7 km), Baloch Hotel (7 km), Essa Nagri (5 km), University",
    driver: {
      name: "Iqbal Pasha",
      contact: "0300-3689687 / 0310-1074097",
    },
  },
  {
    title: "Point 10",
    details:
      "Gulshan-e-Hadeed (36 km), Steel Town (33 km), Razzaqabad (29 km), Bhens Colony (29 km), Quaidabad (22 km), Murghi Khana (20 km), Anwar Baloch Hotel (19 km), Malir Court (18 km), Star Gate (13 km), Karsaz (7 km), University",
    driver: {
      name: "Muhammad Nawaz",
      contact: "0335-2400355",
    },
  },
];


export default function PointInformation() {
  const [activeIndices, setActiveIndices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  const filteredRoutes = routeData.filter(
    (route) =>
      route.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cardStyle = {
    margin: "10px",
    width: "300px",
    minHeight: "150px", // Set a minimum height for consistency
    position: "relative",
    transition: "box-shadow 0.3s ease, transform 0.3s ease", // Add transition for transform
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    border: "2px solid #757575", // Darker border color
    borderRadius: "8px", // Optional: Add rounded corners
    "&:hover": {
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Enhanced box shadow
      transform: "translateY(-2px)", // Slight lift effect on hover
    },
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <TextField
        variant="outlined"
        placeholder="Search your area..."
        fullWidth
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: "20px" }} // Add margin at the bottom
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start", // Prevents cards from stretching to the same height
        }}
      >
        {filteredRoutes.map((route, index) => (
          <Card key={index} sx={cardStyle}>
            <CardContent sx={{ textAlign: "center" }}>
              {" "}
              {/* Center text in CardContent */}
              <Typography variant="h6" component="div">
                {route.title}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgb(42, 141, 58)", // Custom button color
                  color: "#fff", // Button text color
                  "&:hover": {
                    backgroundColor: "rgba(42, 141, 58, 0.8)", // Darker shade on hover
                  },
                  marginTop: "30px",
                }}
                onClick={() => handleToggle(index)}
              >
                View Route
              </Button>
              {/* Render the details if the index is in activeIndices */}
              {activeIndices.includes(index) && (
                <>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ marginTop: "10px" }}
                >
                  {route.details}
                </Typography>
                <Box sx={{ marginTop: "10px" }}>
                <Typography variant="subtitle2">
                  <strong>Driver:</strong> {route.driver.name}
                </Typography>
                <Typography variant="subtitle2">
                  <strong>Contact:</strong> {route.driver.contact}
                </Typography>
              </Box>
              </>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
