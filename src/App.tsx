// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.tsx
// src/App.tsx

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Train, TrainCharacteristics, AppState } from "./store/trainTypes";
import { addTrains, updateTrainCharacteristics } from "./store/trainReducer";
import TrainTable from "./components/TrainTable";
import TrainCharacteristicsTable from "./components/TrainCharacteristicsTable";
import Modal from "react-modal";
import "./styles.css";

Modal.setAppElement("#root");

const App: React.FC = () => {
  const [selectedTrain, setSelectedTrain] = useState<Train | null>(null);
  const trains = useSelector((state: AppState) => state.trains);
  const dispatch = useDispatch();

  const handleTrainClick = (train: Train) => {
    setSelectedTrain(train);
  };

  const closeModal = () => {
    setSelectedTrain(null);
  };

  const handleSubmit = () => {
    if (selectedTrain) {
      const sortedCharacteristics = selectedTrain.characteristics.sort(
        (a, b) => a.speed - b.speed
      );
      console.log(sortedCharacteristics);
    }
    closeModal();
  };

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json"
    )
      .then((response) => response.json())
      .then((data: Train[]) => {
        dispatch(addTrains(data));
      });
  }, [dispatch]);

  return (
    <div>
      <h1>Список поездов</h1>
      <TrainTable trains={trains} onTrainClick={handleTrainClick} />
      <Modal
        isOpen={selectedTrain !== null}
        onRequestClose={closeModal}
        contentLabel="Характеристики для Поезда"
      >
        {selectedTrain && (
          <div>
            <h2>Характеристики для {selectedTrain.name}</h2>
            <TrainCharacteristicsTable
              characteristics={selectedTrain.characteristics}
              onCharacteristicsChange={(newCharacteristics) => {
                const updatedTrains = trains.map((train) =>
                  train === selectedTrain
                    ? { ...train, characteristics: newCharacteristics }
                    : train
                );
                dispatch(updateTrainCharacteristics(updatedTrains));
              }}
            />
            <button onClick={handleSubmit}>Отправить данные</button>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default App;
