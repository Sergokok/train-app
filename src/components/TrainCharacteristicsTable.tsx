// src/components/TrainCharacteristicsTable.tsx

import React from "react";
import { TrainCharacteristics } from "../store/trainTypes";

interface TrainCharacteristicsTableProps {
  characteristics: TrainCharacteristics[];
  onCharacteristicsChange: (newCharacteristics: TrainCharacteristics[]) => void;
}

const TrainCharacteristicsTable: React.FC<TrainCharacteristicsTableProps> = ({
  characteristics,
  onCharacteristicsChange
}) => {
  const handleValueChange = (
    index: number,
    field: keyof TrainCharacteristics,
    value: string
  ) => {
    const newCharacteristics = [...characteristics];
    newCharacteristics[index][field] = Number(value);
    onCharacteristicsChange(newCharacteristics);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Скорость, км/ч</th>
          <th>Сила тяги, кН</th>
          <th>Ток двигателя, А</th>
        </tr>
      </thead>
      <tbody>
        {characteristics.map((characteristic, index) => (
          <tr key={index}>
            <td>
              <input
                type="number"
                value={characteristic.speed}
                onChange={(e) =>
                  handleValueChange(index, "speed", e.target.value)
                }
              />
            </td>
            <td>
              <input
                type="number"
                value={characteristic.force}
                onChange={(e) =>
                  handleValueChange(index, "force", e.target.value)
                }
              />
            </td>
            <td>
              <input
                type="number"
                value={characteristic.engineAmperage}
                onChange={(e) =>
                  handleValueChange(index, "engineAmperage", e.target.value)
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TrainCharacteristicsTable;
