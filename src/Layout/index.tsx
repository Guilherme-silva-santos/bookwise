import { ModalBookDetails } from "@/components/Modals/ModalBookDetails";
import { ModalSignIn } from "@/components/Modals/ModalSignIn";
import { useModal } from "@/hooks/useModal";
import { ReactNode } from "react";
import { Navbar } from "../components/Navbar";
import * as S from "./styles";

interface Props {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function DefaultLayout({ title, icon, children }: Props) {
  return (
    <S.Container>
      <Navbar />

      <S.Content>
        <S.Header>
          {icon}
          <h1>{title}</h1>
        </S.Header>

        {children}
      </S.Content>

      <ModalSignIn />
      <ModalBookDetails />
    </S.Container>
  )
}