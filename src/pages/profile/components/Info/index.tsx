import { ReactNode } from "react"
import { InfoContainer } from "./styles"

type Props = {
  icon: ReactNode,
  value: string | number
  description: string
}

export function Info({icon, description, value}: Props) {
  return (
    <InfoContainer>
      {icon}
      
      <div>
        <strong>{value}</strong>
        <p>{description}</p>
      </div>
    </InfoContainer>
  )
}