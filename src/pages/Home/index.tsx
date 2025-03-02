import { HomeContainer, HomeTitle, Subtitle, IconContainer, IconItem, CoffeeImage } from "./styles";
import CoffeeImg from "../../assets/coffee-img.png";
import Icon1 from "../../assets/icons/icon1.svg";
import Icon2 from "../../assets/icons/icon2.svg";
import Icon3 from "../../assets/icons/icon3.svg";
import Icon4 from "../../assets/icons/icon4.svg";
import { CoffeeList } from "./components/CoffeeList";

const iconData = [
  { src: Icon1, text: "Compra simples e segura" },
  { src: Icon2, text: "Entrega rápida e rastreada" },
  { src: Icon3, text: "Embalagem mantém o café intacto" },
  { src: Icon4, text: "O café chega fresquinho até você" },
];

export function Home() {
  return (
    <>
      <HomeContainer>
        <div>
          <HomeTitle>Encontre o café perfeito para qualquer hora do dia</HomeTitle>
          <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtitle>
          <IconContainer>
            {iconData.map((icon) => (
              <IconItem key={icon.src}>
                <img src={icon.src} alt="Ícone" />
                <span>{icon.text}</span>
              </IconItem>
            ))}
          </IconContainer>
        </div>
        <CoffeeImage src={CoffeeImg} alt="Coffee" />
      </HomeContainer>
      <CoffeeList />
    </>
  );
}
