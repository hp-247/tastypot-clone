import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/pots.json"; // assuming you have a JSON file with pot details

function PotDetailsPage() {
  const { id } = useParams();
  const pot = data.find((pot) => pot.id === Number(id));

  return pot ? (
    <div className="p-5">
      <h1>{pot.name}</h1>
      <p>{pot.description}</p>
    </div>
  ) : (
    <div>Pot not found</div>
  );
}

export default PotDetailsPage;
