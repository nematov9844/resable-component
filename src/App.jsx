import React, { useState } from "react";
import Alert from "./components/alertcomp";
import Input from "./components/inputCom";
import Flex from "./components/flexComp";
import Button from "./components/buttonComp";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    if (inputValue.trim() === "") {
      setShowAlert(true);
    } else {
      alert(`Submitted: ${inputValue}`);
      setShowAlert(false);
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <Flex direction="col" align="center" justify="center" className="gap-4 items-center justify-center flex w-1/3 bg-white p-6 shadow-lg rounded-lg">
        {showAlert && (
          <Alert
            message="Please fill in the input field!"
            type="warning"
            className="mb-4"
          />
        )}
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter some text..."
          className=""
        />
        <Flex justify="space-between" className="w-full flex gap-4">
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setInputValue("");
              setShowAlert(false);
            }}
          >
            Reset
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}
