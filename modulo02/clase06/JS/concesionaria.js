let autos = require("./autos");
let personas = require("./personas");

let concesionaria = {
  autos: autos,
  buscarAuto: function(patente){
    let foundCar = null;
    this.autos.forEach(function (auto){
      if(auto.patente == patente){
        foundCar = auto;
      }
    })
    return foundCar;
  },
  venderAuto: function(patente){
    let foundCar = this.buscarAuto(patente);
    if(foundCar != null){
      foundCar.vendido = true;
    }
  },
  autosParaLaVenta: function(){
    let autosEnVenta = this.autos.filter(function(auto){
      return !auto.vendido;
    })
    return autosEnVenta;
  },
  autosNuevos: function(){
    let autos0km = this.autosParaLaVenta().filter(function(auto){
      return (auto.km <= 100);
    })
    return autos0km;
  },
  listaDeVentas: function(){
    let vendidos = this.autos.filter(function(auto){
      return auto.vendido;
    })
    let ventas = [];
    vendidos.forEach(function(auto){
      ventas.push(auto.precio);
    })
    return ventas;
  },
  totalDeVentas: function(){
    let lista = this.listaDeVentas();
    if (lista.length > 0){
      return lista.reduce((acum,importe) => acum + importe);
    } else {
      return 0;
    }
  },
  puedeComprar: function(auto,persona){
    if(persona.capacidadDePagoTotal >= auto.precio){
      if(persona.capacidadDePagoEnCuotas >= (auto.precio/auto.cuotas)){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  autosQuePuedeComprar: function(persona){
    let autosPosibles = [];
    let autosEnVenta = this.autosParaLaVenta();
    if (autosEnVenta.length > 0){
      autosPosibles = autosEnVenta.filter(auto => this.puedeComprar(auto,persona));
    }
    return autosPosibles;
  }
}

//console.log(concesionaria.venderAuto("JJK116"));
//console.log(concesionaria.venderAuto("APL123"));
//console.log(concesionaria.listaDeVentas());
//console.log(concesionaria.totalDeVentas());
console.log(concesionaria.puedeComprar(autos[0],personas[0]));
console.log(concesionaria.autosQuePuedeComprar(personas[0]));