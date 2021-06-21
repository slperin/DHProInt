const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    errMsg: false,
    leerJSON: function () {
        try {
          return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
        } catch (error) {
          this.errMsg = true;
          console.log(error);
        }

    },
    escribirJSON: function(tareasNew){
      try {
        fs.writeFileSync(this.archivo,JSON.stringify(tareasNew));
      } catch (error) {
        this.errMsg = true;
        console.log(error);
      }
    }
}

module.exports = archivoTareas;