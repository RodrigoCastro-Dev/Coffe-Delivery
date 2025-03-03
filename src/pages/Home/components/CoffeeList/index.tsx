import { useState } from "react";
import expressoTradicional from "../../../../assets/coffees/expresso-tradicional.png";
import expressoAmericano from "../../../../assets/coffees/expresso-americano.png";
import expressoCremoso from "../../../../assets/coffees/expresso-cremoso.png";
import expressoGelado from "../../../../assets/coffees/expresso-gelado.png";
import cafeComLeite from "../../../../assets/coffees/cafe-com-leite.png";
import latte from "../../../../assets/coffees/latte.png";
import capuccino from "../../../../assets/coffees/capuccino.png";
import macchiato from "../../../../assets/coffees/macchiato.png";
import mocaccino from "../../../../assets/coffees/mocaccino.png";
import cubano from "../../../../assets/coffees/cubano.png";
import chocolateQuente from "../../../../assets/coffees/chocolate-quente.png";
import shoppingCart from "../../../../assets/ShoppingCartSimple.svg";
import { Tag, Container, Title, TagFilter, FilterButton, Grid, CoffeeCard, Image, Tags, CoffeeName, Description, Price, Button, Footer, CardContent } from "./styles";
import { handleCart } from "../../../../context/CounterContext";
import { useCart } from "../../../../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Counter } from "./Counter";

export function CoffeeList() {
  const { setCart } = useCart();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [counts, setCounts] = useState<{ [key: string]: number }>({});

  const coffees = [
    { id: '1', name: "Expresso Tradicional", description: "O tradicional café feito com água quente e grãos moídos", tags: ["TRADICIONAL"], price: '10,00', image: expressoTradicional },
    { id: '2', name: "Expresso Americano", description: "Expresso diluído, menos intenso que o tradicional", tags: ["TRADICIONAL"], price: '8,00', image: expressoAmericano },
    { id: '3', name: "Expresso Cremoso", description: "Café expresso tradicional com espuma cremosa", tags: ["TRADICIONAL"], price: '6,00', image: expressoCremoso },
    { id: '4', name: "Expresso Gelado", description: "Bebida preparada com café expresso e cubos de gelo", tags: ["TRADICIONAL", "GELADO"], price: '7,50', image: expressoGelado },
    { id: '5', name: "Café com Leite", description: "Meia a meia de expresso tradicional com leite vaporizado", tags: ["TRADICIONAL", "COM LEITE"], price: '8,50', image: cafeComLeite },
    { id: '6', name: "Latte", description: "Uma dose de café expresso com o dobro de leite e espuma cremosa", tags: ["TRADICIONAL", "COM LEITE"], price: '9,50', image: latte },
    { id: '7', name: "Cubano", description: "Drink gelado de café expresso com rum, creme de leite e hortelã", tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"], price: '8,00', image: cubano },
    { id: '8', name: "Capuccino", description: "Bebida com canela feita de doses iguais de café, leite e espuma", tags: ["TRADICIONAL", "COM LEITE"], price: '9,00', image: capuccino },
    { id: '9', name: "Macchiato", description: "Café expresso misturado com um pouco de leite quente e espuma", tags: ["TRADICIONAL", "COM LEITE"], price: '10,00', image: macchiato },
    { id: '10', name: "Mocaccino", description: "Café expresso com calda de chocolate, pouco leite e espuma", tags: ["TRADICIONAL", "COM LEITE"], price: '10,50', image: mocaccino },
    { id: '11', name: "Chocolate Quente", description: "Bebida feita com chocolate dissolvido no leite quente e café", tags: ["ESPECIAL", "COM LEITE"], price: '12,00', image: chocolateQuente },
  ];

  const uniqueTags = [...new Set(coffees.flatMap(coffee => coffee.tags))];

  const filteredCoffees = selectedTag ? coffees.filter(coffee => coffee.tags.includes(selectedTag)) : coffees;

  return (
    <Container>
      <Title>Nossos Cafés</Title>
      <TagFilter>
        {uniqueTags.map((tag) => (
          <FilterButton active={tag === selectedTag ? 'true' : 'false'} key={tag} onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}>
            {tag}
          </FilterButton>
        ))}
      </TagFilter>
      <Grid>
        {filteredCoffees.map((coffee) => (
          <CoffeeCard key={coffee.id}>
            <Image src={coffee.image} alt={coffee.name} />
            <CardContent>
              <Tags>
                {coffee.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </Tags>
              <CoffeeName>{coffee.name}</CoffeeName>
              <Description>{coffee.description}</Description>
              <Footer>
                <Price>R$ {coffee.price}</Price>
                <Counter
                  startingValue={counts[coffee.id] || 1}
                  onChange={(_, value) => setCounts((prev) => ({ ...prev, [coffee.id]: value }))}
                />

                <Button onClick={() => {
                  handleCart(coffee, counts[coffee.id], setCart);
                  toast.success(`${coffee.name} adicionado ao carrinho!`);
                }}>
                  <img src={shoppingCart} alt="" />
                </Button>
              </Footer>
            </CardContent>
          </CoffeeCard>
        ))}
      </Grid>
      <ToastContainer />
    </Container>
  );
};
