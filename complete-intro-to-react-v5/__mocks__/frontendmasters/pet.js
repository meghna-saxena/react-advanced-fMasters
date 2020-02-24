import { readFileSync } from "fs";
import path from "path";
import { act } from "react-testing-library";

const breeds = [
  { name: "Golden Retriever" },
  { name: "Bolognese" },
  { name: "Bichon Frise" },
  { name: "Coton de Tulear" },
  { name: "Havanese" },
  { name: "Maltese" }
];

const doggos = JSON.parse(
  readFileSync(path.join(__dirname, "res.json")).toString()
);

export const ANIMALS = ["dog", "cat", "horse"];
export const _breeds = breeds;
export const _doggos = doggos.animals;

const mock = {
  breeds: jest.fn(() => {
    return {
      then: callback => act(() => callback({ breeds: breeds }))
    };
  }),
  animals: jest.fn(() => {
    return {
      then: callback => act(() => callback(doggos))
    };
  })
};

export default mock;
