import React from "react";
import Button from "../components/ui/Button";

export default function ErrorPage() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <h1 className="fs-h1 fw-bold mb-4">404</h1>
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="fs-large text-dark-200">OOPS!</p>
        <p className="fs-large text-dark-200 mb-4">
          The page you are looking for wasn't found!
        </p>
        <Button>Go Back Home</Button>
      </div>
    </div>
  );
}
