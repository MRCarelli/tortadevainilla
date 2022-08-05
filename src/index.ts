import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

var recetaTorta: { [key: string]: string } = {
  paso1: "1.prender horno",
  paso2: "2.tomar un bols",
  paso3: "3.verter azucar, huevo y harina",
  paso4: "4.batir",
  paso5: "5.vertir mezcla en molde",
  paso6: "6.emparejar mezcla",
  paso7: "7.agregar chips de  chocolate",
  paso8: "8.colocar molde en el horno",
  paso9: "9.hornear durante 1 hs",
  paso10: "10.sacar torta",
  paso11: "11.desmoldar",
  paso12: "12.cortar y servir"
};

let claves = Object.keys(recetaTorta);
for (let i = 0; i < claves.length; i++) {
  let clave = claves[i];
  console.log(recetaTorta[clave]);
}
