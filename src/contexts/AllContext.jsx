import React from "react";
import { FlashMessageProvider } from "./FlashMessageContext";

const AllContextsProvider = ({ children }) => (
  <FlashMessageProvider>{children}</FlashMessageProvider>
);

export default AllContextsProvider;
