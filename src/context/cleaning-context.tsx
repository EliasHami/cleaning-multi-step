import { createContext, useContext, useEffect, useState } from "react";

export type Cleaning = {
  type: string;
  additional: string;
  datetime: string;
  age: string;
};
