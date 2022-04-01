import React from "react";
import "./Home.css";
import Clock from "../components/Clock";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1><Clock></Clock></h1>
        <p className="text-muted">Em Desenvolvimento ;)</p>
      </div>
    </div>
  );
}