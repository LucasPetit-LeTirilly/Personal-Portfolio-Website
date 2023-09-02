// penser a changer le layout notamment pour que le tag soit <html lang=eng> et non pas lang=fr qui est par defaut sur le site
// faire une version de la nav bar en anglais et que quand on clique sur les liens on arrive bien sur les liens de la versions anglaise
// (par exemple button home doit ramener sur le site en anglais)
import NavBar from "../fr/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <div>version du site en anglais</div>
    </div>
  );
}
