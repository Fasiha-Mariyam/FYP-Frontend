import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import RouteTable from "../../../components/Table/PointsTable";
import EditModal from "../../../components/Modal/EditModal";
import AddPointModal from "../../../components/Modal/AddPointModal";
import { useSnackbar } from "notistack";

export default function RouteInfo() {
  const [routePoints, setRoutePoints] = useState([
    {
      id: 1,
      name: "Point 1",
      description:
        "Power HousePower House, UP More, Nagan Chowrangi, Sakhi Hasan, 5 Star Chowrangi, KDA Chowrangi, Nazimabad Eid Gah Ground, Liaquatabad 10 Number, Essa Nagri, Civic Centre, National stadium, Karsaz, Nursery, FTC, Korangi Road, KPT Interchange upto Shan Chowrangi",
    },
    {
      id: 2,
      name: "Point 2",
      description:
        "UP MorePower House, UP More, Nagan Chowrangi, Sakhi Hasan, 5 Star Chowrangi, KDA Chowrangi, Nazimabad Eid Gah Ground, Liaquatabad 10 Number, Essa Nagri, Civic Centre, National stadium, Karsaz, Nursery, FTC, Korangi Road, KPT Interchange upto Shan Chowrangi",
    },
    {
      id: 3,
      name: "Point 3",
      description:
        "Nagan ChowrangPower House, UP More, Nagan Chowrangi, Sakhi Hasan, 5 Star Chowrangi, KDA Chowrangi, Nazimabad Eid Gah Ground, Liaquatabad 10 Number, Essa Nagri, Civic Centre, National stadium, Karsaz, Nursery, FTC, Korangi Road, KPT Interchange upto Shan Chowrangii",
    },
    {
      id: 4,
      name: "Point 4",
      description:
        "Sakhi HasanPower House, UP More, Nagan Chowrangi, Sakhi Hasan, 5 Star Chowrangi, KDA Chowrangi, Nazimabad Eid Gah Ground, Liaquatabad 10 Number, Essa Nagri, Civic Centre, National stadium, Karsaz, Nursery, FTC, Korangi Road, KPT Interchange upto Shan Chowrangi",
    },
    {
      id: 5,
      name: "Point 5",
      description:
        "5 Star ChowrangiPower House, UP More, Nagan Chowrangi, Sakhi Hasan, 5 Star Chowrangi, KDA Chowrangi, Nazimabad Eid Gah Ground, Liaquatabad 10 Number, Essa Nagri, Civic Centre, National stadium, Karsaz, Nursery, FTC, Korangi Road, KPT Interchange upto Shan Chowrangi",
    },
    {
      id: 6,
      name: "Point 6",
      description:
        "KDA ChowrangiPower House, UP More, Nagan Chowrangi, Sakhi Hasan, 5 Star Chowrangi, KDA Chowrangi, Nazimabad Eid Gah Ground, Liaquatabad 10 Number, Essa Nagri, Civic Centre, National stadium, Karsaz, Nursery, FTC, Korangi Road, KPT Interchange upto Shan Chowrangi",
    },
    {
      id: 7,
      name: "Point 7",
      description:
        "Nazimabad Eid Gah GroundPower House, UP More, Nagan Chowrangi, Sakhi Hasan, 5 Star Chowrangi, KDA Chowrangi, Nazimabad Eid Gah Ground, Liaquatabad 10 Number, Essa Nagri, Civic Centre, National stadium, Karsaz, Nursery, FTC, Korangi Road, KPT Interchange upto Shan Chowrangi",
    },
    {
      id: 8,
      name: "Point 8",
      description:
        "Liaquatabad 10 NumberPower House, UP More, Nagan Chowrangi, Sakhi Hasan, 5 Star Chowrangi, KDA Chowrangi, Nazimabad Eid Gah Ground, Liaquatabad 10 Number, Essa Nagri, Civic Centre, National stadium, Karsaz, Nursery, FTC, Korangi Road, KPT Interchange upto Shan Chowrangi",
    },
    {
      id: 9,
      name: "Point 9",
      description:
        "Essa NagriPower House, UP More, Nagan Chowrangi, Sakhi Hasan, 5 Star Chowrangi, KDA Chowrangi, Nazimabad Eid Gah Ground, Liaquatabad 10 Number, Essa Nagri, Civic Centre, National stadium, Karsaz, Nursery, FTC, Korangi Road, KPT Interchange upto Shan Chowrangi",
    },
    {
      id: 10,
      name: "Point 10",
      description:
        "Civic CentrePower House, UP More, Nagan Chowrangi, Sakhi Hasan, 5 Star Chowrangi, KDA Chowrangi, Nazimabad Eid Gah Ground, Liaquatabad 10 Number, Essa Nagri, Civic Centre, National stadium, Karsaz, Nursery, FTC, Korangi Road, KPT Interchange upto Shan Chowrangi",
    },
    // You can add more points here if necessary
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPoint, setEditingPoint] = useState(null);

  const { enqueueSnackbar } = useSnackbar();

  const handleAddPoint = (newPoint) => {
    setRoutePoints([
      ...routePoints,
      { id: routePoints.length + 1, ...newPoint },
    ]);
    setIsAddModalOpen(false);
    enqueueSnackbar("Point added successfully!", { variant: "success" });
  };

  const handleEditPoint = (id, updatedPoint) => {
    setRoutePoints(
      routePoints.map((point) =>
        point.id === id ? { ...point, ...updatedPoint } : point
      )
    );
    setIsEditModalOpen(false);
    enqueueSnackbar("Point updated successfully!", { variant: "success" });
  };

  const handleOpenEditModal = (id) => {
    const pointToEdit = routePoints.find((point) => point.id === id);
    setEditingPoint(pointToEdit);
    setIsEditModalOpen(true);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          variant="contained"
          color="success"
          sx={{ color: "white" }}
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Point
        </Button>
      </Box>
      <RouteTable routePoints={routePoints} onEdit={handleOpenEditModal} />

      <AddPointModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddPoint}
      />

      {editingPoint && (
        <EditModal
          open={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          point={editingPoint}
          onSave={handleEditPoint}
        />
      )}
    </Box>
  );
}
