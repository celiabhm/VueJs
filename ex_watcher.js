const app = Vue.createApp({
    data() {
        return { leNombre:0 };
    },
    //! Les watchers permettent de prendre une variable et de l'utiliser comme une fonction
    //! de manière à surveiller des changments de valeurs.
    //! Ici on surveille notre variable leNombre, et si sa valeur atteint 7 alors on modifie la valeur du nombre
    watch:{
        leNombre(value) {
        if(value ==7){
            this.leNombre = 99
        }
        },
    }
    });
    app.mount('#monApp');