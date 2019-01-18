import Home from "./components/Home.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
import Stocks from "./components/stocks/Stocks.vue";

export const routes = [
  { path: "/stocktrader/", component: Home },
  { path: "/stocktrader/portfolio", component: Portfolio },
  { path: "/stocktrader/stocks", component: Stocks }
];
