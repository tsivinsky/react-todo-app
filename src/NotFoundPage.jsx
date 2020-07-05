// Import dependencies
import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="404-page">
      <h1>Ohhh.... Seems you missed the link!</h1>
      <Link to="/">Go back to the App</Link>
    </div>
  );
}
