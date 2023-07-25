import { Filters } from "./Filters";

export function Header({ changeFilters }) {
  return (
    <header>
      <h1>Welcome to Andrea's eCommerce 🛒</h1>
      <Filters onChange={changeFilters} />
    </header>
  );
}
