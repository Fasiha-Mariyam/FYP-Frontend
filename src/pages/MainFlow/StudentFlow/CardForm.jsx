import Form from "../../../components/Form/Form";
import React, { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { submitFormData } from "../../../redux/slices/card";
import { dispatch } from "../../../redux/store";
import { v4 as uuidv4 } from "uuid";

export default function CardForm() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [studentImage, setStudentImage] = useState(null);
  const [chalaanImage, setChalaanImage] = useState(null);
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [semester, setSemester] = useState("");
  const [backend, setBackend] = useState("pending");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validation checks
      if (!name || !rollNo || !semester || !location) {
        enqueueSnackbar("Please fill all the required fields", {
          autoHideDuration: 3000,
          variant: "warning",
        });
        return;
      } else if (/^\d/.test(name)) {
        enqueueSnackbar("Name should not start with a number", {
          autoHideDuration: 3000,
          variant: "warning",
        });
        return;
      } else if (!/^[A-Za-z,\s]+$/.test(location)) {
        enqueueSnackbar(
          "Location should contain only alphabets, commas, and spaces",
          {
            autoHideDuration: 3000,
            variant: "warning",
          }
        );
        return;
      } else if (!/^[1-8]\d*$/.test(semester)) {
        enqueueSnackbar("Semester should start with a number between 1 and 8", {
          autoHideDuration: 3000,
          variant: "warning",
        });
        return;
      } else if (!studentImage) {
        enqueueSnackbar("Please upload a student image", {
          autoHideDuration: 3000,
          variant: "warning",
        });
        return;
      } else if (!chalaanImage) {
        enqueueSnackbar("Please upload a chalaan image", {
          autoHideDuration: 3000,
          variant: "warning",
        });
        return;
      }

      setLoading(true);

      const formData = {
        id: uuidv4(),
        status: "waiting",
        name,
        rollNo,
        semester,
        location,
        studentImage,
        chalaanImage,
      };
      setSubmittedData(formData);
      // Dispatch Redux action
      const response = await dispatch(submitFormData(formData));

      if (response.success) {
        setLoading(false);
        enqueueSnackbar("Request submitted successfully", {
          autoHideDuration: 3000,
          variant: "success",
        });
        setBackend("waiting");
        // Reset form fields
        setName("");
        setRollNo("");
        setLocation("");
        setSemester("");
        setStudentImage(null);
        setChalaanImage(null);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("Request not submitted successfully", {
        autoHideDuration: 3000,
        variant: "error",
      });
      console.error(error);
    }
  };
  const handleGoBack = () => {
    setBackend("pending");
  };
  useEffect(() => {
    if (backend === "waiting") {
      setTimeout(() => {
        setBackend("approved");
      }, 5000);
    }
  }, [backend]);
  return (
    <Form
      handleSubmit={handleSubmit}
      handleGoBack={handleGoBack}
      backend={backend}
      submittedData={submittedData}
      name={name}
      rollNo={rollNo}
      setRollNo={setRollNo}
      setName={setName}
      semester={semester}
      setSemester={setSemester}
      location={location}
      setLocation={setLocation}
      studentImage={studentImage}
      setStudentImage={setStudentImage}
      chalaanImage={chalaanImage}
      setChalaanImage={setChalaanImage}
      loading={loading}
    />
  );
}
