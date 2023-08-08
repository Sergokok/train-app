// src/components/TrainTable.tsx

import React, { useState } from "react";
import { Train } from "../store/trainTypes";

interface TrainTableProps {
  trains: Train[];
  onTrainClick: (train: Train) => void;
}

const TrainTable: React.FC<TrainTableProps> = ({ trains, onTrainClick }) => {
  const [activeTrain, setActiveTrain] = useState<Train | null>(null);

  const handleTrainClick = (train: Train) => {
    setActiveTrain(train);
    onTrainClick(train);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>
        {trains.map((train) => (
          <tr
            key={train.name}
            onClick={() => handleTrainClick(train)}
            className={activeTrain === train ? "active" : ""}
          >
            <td>
              <a className="train-link">{train.name}</a>
            </td>
            <td>{train.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TrainTable;
