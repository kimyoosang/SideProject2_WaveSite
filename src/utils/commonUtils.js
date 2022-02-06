import Navbar from "../Pages/Navebar/Navbar";
import CardPage from "../Pages/CardPage/CardPage";
import Info from "../Pages/Info/Info";

export const TOTAL_SCREENS = [
  //screen_name은 나중에 사용할 수 도 있기 때문에 넣어놨음
  {
    screen_name: "Navbar",
    component: Navbar,
  },
  {
    screen_name: "CardPage",
    component: CardPage,
  },
  {
    screen_name: "Ingo",
    component: Info,
  },
];
