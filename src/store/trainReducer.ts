// src/store/trainReducer.ts

import { AppState, ADD_TRAINS, UPDATE_TRAIN_CHARACTERISTICS, TrainActionTypes, Train } from "./trainTypes";

const initialState: AppState = {
  trains: []
};

export const addTrains = (trains: Train[]) => ({
  type: ADD_TRAINS,
  payload: trains
});

export const updateTrainCharacteristics = (trains: Train[]) => ({
  type: UPDATE_TRAIN_CHARACTERISTICS,
  payload: trains
});

const trainReducer = (state = initialState, action: TrainActionTypes): AppState => {
  switch (action.type) {
    case ADD_TRAINS:
    case UPDATE_TRAIN_CHARACTERISTICS:
      return { ...state, trains: action.payload };
    default:
      return state;
  }
};

export default trainReducer;
