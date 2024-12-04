import Form from "../../../components/Form/Form";
import React, { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { submitFormData } from "../../../redux/slices/card";
import { dispatch } from "../../../redux/store";
import {getStorageItem} from "../../../utils/helper_functions"
import { useSelector } from "react-redux";
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
  const [currentUser, setCurrentUser] = useState(null);
  const allRequests = useSelector((state) => state.card.allRequests);
  console.log(backend,"backend");
  
  const fetchCurrentUser = async () => {
    try {
      const user = await getStorageItem("user");
      return user || null; // Return the user or null if not found
    } catch (error) {
      console.error("Error retrieving user from local storage:", error);
      return null;
    }
  };
  useEffect(() => {
    const loadUser = async () => {
      const user = await fetchCurrentUser();
      setCurrentUser(user); // Set the user in state
    };

    loadUser();
  }, []); 
  useEffect(() => {
    if (allRequests && currentUser) {
      const matchingRequest = allRequests.find(
        (request) => request.id === currentUser.id
      );

      if (matchingRequest) {
        setBackend(matchingRequest.status);
        setSubmittedData(matchingRequest)
      } else {
        setBackend("pending");
      }
    } else {
      setBackend("pending");
    }
  }, [allRequests, currentUser]);
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
        id: currentUser.id,
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
  // useEffect(() => {
  //   if (backend === "waiting") {
  //     setTimeout(() => {
  //       setBackend("approved");
  //     }, 5000);
  //   }
  // }, [backend]);
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
