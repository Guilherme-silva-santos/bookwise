import { theme } from "@/styles/stitches.config";

import { Avatar } from "@/components/Avatar";
import { SignIn, SignOut } from "@phosphor-icons/react";

import { Login, Logout, ProfileContainer } from "./styles";
import { signOut, useSession } from "next-auth/react";
import { useModal } from "@/hooks/useModal";



export function ProfileOrSignIn() {
  const {colors} = theme;
  const {data} = useSession();
  const {setSignInModal} = useModal();

  if(!data?.user) return (
    <Login onClick={() => setSignInModal(true)}>
        Fazer Login
        <SignIn size={20} color={colors.green100.value} />
    </Login>
  )
  
  return (
    <ProfileContainer>
      <Avatar 
        src={data?.avatar_url!}
        alt={data.user?.name!}
        width={32}
        height={32}
      />
      <strong>{data.user?.name}</strong>
      
      <Logout onClick={() => signOut()}>
        <SignOut size={20} color={colors.danger.value} />
      </Logout>
    </ProfileContainer>
  )
}