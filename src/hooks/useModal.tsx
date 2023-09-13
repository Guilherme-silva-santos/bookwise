import { ModalControllerContext } from "@/contexts/ModalsContext";
import { useContext } from "react";

export function useModal() {
  const context = useContext(ModalControllerContext);

  return context;
}