import React from "react";
import RequestsTable from "../../../components/Table/RequestTable";
import { useSelector } from "react-redux";

export default function CardRequests() {
  const allRequests = useSelector((state) => state.card.allRequests);

console.log("All Requests:", allRequests);  // Check if the state updates


  return <RequestsTable rows={allRequests} />;
}
