import NextLink from "next/link";
import Image from "next/image";

import logoSvg from '../../aseets/logo.svg'
import { ChartLineUp, Binoculars, User } from "@phosphor-icons/react";
import * as Styled from "./styles";
import { ProfileOrSignIn } from "./components/ProfileOrSignIn";
import { Link } from "./components/Link";
import { useSession } from "next-auth/react";
import { ModalSignIn } from "../Modals/ModalSignIn";


const publicLinks = [
  {
    id: 1,
    text: 'Início',
    href: "/",
    icon: <ChartLineUp size={24} />
  },
  {
    id: 2,
    text: 'Explorar',
    href: "/explore",
    icon: <Binoculars size={24} />
  }
]

const protectedLinks = [
  {
    id: 1,
    text: 'Perfil',
    href: "/profile",
    icon: <User size={24} />
  },
]

export function Navbar() {
  const session = useSession();

  return (
    <Styled.Container>
      {/* Logo */}
      <NextLink href="/home" className="logo">
        <Image
          src={logoSvg}
          alt="Book Wise"
          width={128}
          loading="lazy"
        />
      </NextLink>

      <Styled.Navigation>
        {publicLinks.map(link => (
          <Link 
            key={link.id}
            text={link.text}
            href={link.href}
            icon={link.icon}
          />
        ))}

        {session?.data?.user 
          && protectedLinks.map(link => (
            <Link 
              key={link.id}
              text={link.text}
              href={`${link.href}/${session.data.id}`}
              icon={link.icon}
            />
        ))}
      </Styled.Navigation>

      <ProfileOrSignIn />
        
      <ModalSignIn />    
    </Styled.Container>
  )
}