import { Avatar } from "@/components/Avatar";
import { Box } from "@/components/Box";
import { SectionHeader } from "@/components/Generics/SectionHeader";
import { theme } from "@/styles/stitches.config";
import { Check, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Profile, Title } from "../Ratings/styles";
import { AmountWords, Button, Footer, TextArea, TextContainer } from "./styles";
import { Star } from "@/components/Start";

interface Props {
  name: string;
  avatar_url: string;
  uploadRating: (description: string, rate: number) => void;
}

export function Post({name, avatar_url, uploadRating}: Props) {
  const { colors } = theme;
  const [description, setDescription] = useState('');
  const [isSending, setIsSending] = useState(false);

  const [rate, setRate] = useState(0);
  const [enableToChangeRate, setEnableToChangeRate] = useState(false);

  async function handleSubmitReview() {
    if(description.length <= 8) return;

    setIsSending(true);
    uploadRating(description, rate + 1);
    
    setDescription('');
    setIsSending(false);
  }

  async function handleErase() {
    setDescription('');
  }


  // Rating control
  const handleMouseMove = (index: number) => {
    if(enableToChangeRate) {
      setRate(index);
    }
  };

  const handleMouseClick = () => {
    setEnableToChangeRate(state => !state);
  }

  return (
    <Box direction="column">
      <SectionHeader>
        <Profile>
          <Avatar 
            src={avatar_url}
            alt={name}
            width={40}
            height={40}
          />

          <Title>{name}</Title>
        </Profile>

        <div 
          style={{ display: 'flex', flexDirection: 'row', gap: '6px' }}
          onClick={handleMouseClick} 
        >
          {[...Array(5)].map((_, index) => {
            return (
              <div key={index} onMouseMove={() => handleMouseMove(index)}>
                <Star 
                  size={20} 
                  color={(rate) >= index && colors.purple100.value}
                />
              </div>
            )
          })}
        </div>
        
      </SectionHeader>

      <TextContainer>
        <TextArea 
          maxLength={450} 
          rows={5}
          value={description}
          placeholder="Escreva sua avaliação"
          onChange={(textarea) => setDescription(textarea.target.value)}
        />

        <AmountWords>{description.length}/450</AmountWords>
      </TextContainer>
      
      <Footer>
        <Button type="button" onClick={handleErase}>
          <X size={24} color={colors.purple100.value} />
        </Button>

        <Button type="button" onClick={handleSubmitReview} disabled={isSending}>
          <Check size={24} color={colors.green100.value}  />
        </Button>
      </Footer>
    </Box>
  )
}



// const handleMouseMove = (event) => {
//   console.log(event)
//   const { left, top, width } = event.currentTarget.getBoundingClientRect();

//   const x = event.clientX - left;

//   let porcentagem = ((x * 100) / width) / 20;
//   setRate(Math.round(porcentagem))
//   setMousePosition(porcentagem);
// };


  // const handleClick = (event) => {
  //   const { left, top, width } = event.currentTarget.getBoundingClientRect();

  //   const x = event.clientX - left;

  //   let porcentagem = (x * 100) / width;
  //   setMousePosition(porcentagem);
  // };

  // <div style={{ position: 'relative', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent:'center' }}>
  //         {/* <AvaliationStars bookRating={0} size={24} /> */}
  //         <Star 
  //           size={16}
  //         />
  //         <Teste onClick={handleClick} 
  //         style={{ 
  //           background: `linear-gradient(90deg, red ${mousePosition}%, transparent ${mousePosition - 100}% )`,
  //           border: '1px solid green'
  //           }}
  //       />