import { signIn } from "next-auth/react";
import { useModal } from "@/hooks/useModal";

import { SignInButton } from "@/components/SignInButton";
import { providerSchema } from "./utils/providers-schema";

import { X } from "@phosphor-icons/react";
import { theme } from "@/styles/stitches.config";
import * as S from "./styles";

export function ModalSignIn() {
  const { signInModal, setSignInModal } = useModal();
  const { colors } = theme;

  async function handleSignIn(provider: string) {
    try {
      await signIn(provider);
      setSignInModal(false);
    } catch(error) {
      console.log(error);
    }
  }

  if(!signInModal) return null;

  return (
    <S.ModalContainer>
      <S.Modal>
        <S.Close onClick={() => setSignInModal(false)}>
          <X size={24} color={colors.gray400.value} />
        </S.Close>

        <strong>Faça login para deixar sua avaliação</strong>

        {providerSchema.map(provider => (
          <SignInButton 
            key={provider.id} 
            text={provider.text} 
            imgsrc={provider.icone} 
            onClick={() => handleSignIn(provider.name)}
          />
        ))}
      </S.Modal>
    </S.ModalContainer>
  )
}