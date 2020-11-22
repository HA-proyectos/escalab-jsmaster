var objetoMascotas = {

    mascotas: ['perros','gatos','canarios','pez','serpiente'],
    esSegura: false,

    llamarAlerta: function(msj){
        alert(msj);
    },

    esHttps: function(){
        this.esSegura = location.protocol == 'https:' ? true : false
        return this.esSegura
    },

    eliminarMascota: function(tipoMascosta){
        var pos = this.mascotas.indexOf(tipoMascosta)
        if ( pos !== -1 ) {
            this.mascotas.splice( pos, 1 );
        }
        return this.mascotas
    },

    eliminarUltimaMascota: function(){
        this.mascotas.pop();
        return this.mascotas
    },

    agregarMascota: function(tipoMascosta){
        this.mascotas.push(tipoMascosta);
        return this.mascotas
    },

    contadorMascotas: function(){
        var contador = 0
        for (var elemento of this.mascotas){
            if (elemento.includes('os')){
                contador += 1
            }
        }
        return 'En el arreglo hay ' + contador  + ' mascotas que terminan con os'
    },
}

