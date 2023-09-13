import dayjs from "dayjs";

import { IBaseUser } from "@/interface/IBooks";

import { BookmarkSimple, BookOpen, Books, UserList } from "@phosphor-icons/react";

import { Info } from "../Info";
import { Avatar } from "@/components/Avatar";
import { InfoContainer, Name, Since, Split, UserContainer } from "./styles";

import { theme } from "@/styles/stitches.config";


interface Props {
  user: IBaseUser;
  totalReadPages: number;
  amountBooks: number;
}

export function User({user, totalReadPages, amountBooks}: Props) {
  const { colors } = theme

  return (
    <UserContainer>
      {user.id && (
        <Avatar
          src={user.avatar_url}
          alt={user.name}
          width={72}
          height={72}
        />
      )}

      <Name>{user.name}</Name>
      <Since>membro desde {dayjs(user.created_at).year()}</Since>

      <Split />

      <InfoContainer>
        <Info 
          description="Páginas lidas"
          value={totalReadPages}
          icon={<BookOpen size={40} color={colors.green100.value} />}
        />

        <Info 
          description="Livros avaliados"
          value={amountBooks}
          icon={<Books size={40} color={colors.green100.value} />}
        />

        {/* <Info 
          description="Autores lidos"
          value={8}
          icon={<UserList size={40} color={colors.green100.value} />}
        />

        <Info 
          description="Categoria mais lida"
          value={"Computação"}
          icon={<BookmarkSimple size={40} color={colors.green100.value} />}
        /> */}
      </InfoContainer>
    </UserContainer>
  )
}