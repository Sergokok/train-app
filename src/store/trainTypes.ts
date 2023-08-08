// src/store/trainTypes.ts

export interface TrainCharacteristics {
  speed: number;
  force: number;
  engineAmperage: number;
}

export interface Train {
  name: string;
  description: string;
  characteristics: TrainCharacteristics[];
}

export interface AppState {
  trains: Train[];
}

export const ADD_TRAINS = "ADD_TRAINS";
export const UPDATE_TRAIN_CHARACTERISTICS = "UPDATE_TRAIN_CHARACTERISTICS";

interface AddTrainsAction {
  type: typeof ADD_TRAINS;
  payload: Train[];
}

interface UpdateTrainCharacteristicsAction {
  type: typeof UPDATE_TRAIN_CHARACTERISTICS;
  payload: Train[];
}

export type TrainActionTypes = AddTrainsAction | UpdateTrainCharacteristicsAction;
