import { v4 as uuidv4 } from "uuid";

export const uuid = uuidv4;

export const randomDate = (start: Date, end: Date) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
