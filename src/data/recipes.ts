import { Recipe } from '../types/recipe';

export const defaultRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Domáce palacinky',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['múka', 'mlieko', 'vajcia', 'soľ', 'cukor', 'maslo', 'jahody'],
    instructions: [
      'Zmiešajte múku s mliekom do hladka',
      'Pridajte vajcia a štipku soli',
      'Nechajte cesto odstáť 15 minút',
      'Pečte na rozohriateej panvici s maslom',
      'Servírujte s jahodami a medom'
    ],
    cookingTime: 30,
    servings: 4,
    calories: 250,
    isFavorite: false
  },
  {
    id: '2',
    name: 'Spaghetti Carbonara',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['spaghetti', 'vajcia', 'parmazán', 'slanina', 'cesnak', 'olivový olej'],
    instructions: [
      'Uvarte spaghetti podľa návodu na obale',
      'Osmažte nakrájanú slaninu do chrumkava',
      'Vyšľahajte vajcia s parmazánom',
      'Zmiešajte horúce cestoviny s vaječnou zmesou',
      'Pridajte slaninu a servírujte'
    ],
    cookingTime: 25,
    servings: 2,
    calories: 600,
    isFavorite: false
  },
  {
    id: '3',
    name: 'Cézar šalát',
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['rímsky šalát', 'krutóny', 'parmazán', 'kurčacie mäso', 'cézar dresing'],
    instructions: [
      'Opečte kurčacie mäso a nakrájajte na kúsky',
      'Umyte a natrhajte šalát',
      'Pripravte krutóny z chleba',
      'Zmiešajte všetky ingrediencie',
      'Polejte dresingom a posypte parmazánom'
    ],
    cookingTime: 20,
    servings: 2,
    calories: 400,
    isFavorite: false
  },
  {
    id: '4',
    name: 'Čokoládový brownie',
    image: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['tmavá čokoláda', 'maslo', 'cukor', 'vajcia', 'múka', 'kakaový prášok'],
    instructions: [
      'Roztopte čokoládu s maslom',
      'Vyšľahajte vajcia s cukrom',
      'Zmiešajte čokoládovú zmes s vajcami',
      'Pridajte múku a kakao',
      'Pečte 25 minút pri 180°C'
    ],
    cookingTime: 45,
    servings: 8,
    calories: 320,
    isFavorite: false
  },
  {
    id: '5',
    name: 'Grilovaný losos',
    image: 'https://images.pexels.com/photos/3731337/pexels-photo-3731337.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['lososový filet', 'citrón', 'olivový olej', 'cesnak', 'tymián', 'soľ', 'korenie'],
    instructions: [
      'Marinujte losos v oleji s cesnakom',
      'Rozohrejte gril na stredný oheň',
      'Grilujte losos 4-5 minút z každej strany',
      'Polejte citrónovou šťavou',
      'Servírujte s čerstvými bylinkami'
    ],
    cookingTime: 15,
    servings: 2,
    calories: 350,
    isFavorite: false
  },
  {
    id: '6',
    name: 'Vegetariánska pizza',
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['pizzové cesto', 'paradajkový pretlak', 'mozzarella', 'paprika', 'žampióny', 'olivy'],
    instructions: [
      'Rozvaľkajte pizzové cesto',
      'Potrite paradajkovým pretlakom',
      'Posypte syrom a zeleninou',
      'Pečte v rúre pri 220°C 12-15 minút',
      'Servírujte horúcu s čerstvou bazalkou'
    ],
    cookingTime: 30,
    servings: 3,
    calories: 280,
    isFavorite: false
  }
];