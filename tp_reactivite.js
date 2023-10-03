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
        }else if(value>7){
            return 'Tu as dépassé le nb mystère !'
        }else{
            return 'Essaie encore...'
        }
        },
    }
    });
    app.mount('#monApp');

    // // Correction //
    // Vue.createApp({
    //     data() {
    //         return {
    //         leNombre: 0,
    //         msg:''
    //         };
    //     },
    //     computed: {
    //         indice() {
    //         if (this.leNombre < 7) {
    //             return 'ESSAIE ENCORE!';
    //         } else if (this.leNombre === 7) {
    //             return this.leNombre + '...BINGO';
    //         } else {
    //             return 'tu as dépassé le nombre';
    //         }
    //         },
    //     },
    //     methods: {
    //         augmenter(num) {
    //         this.leNombre += num;
    //         },
    //     },
    //     watch: {
        
    //         leNombre(value) {
    //             console.log('le watcher en action...');
    //             if(value>30){
    //                 // this.leNombre = 0;
    //                 this.msg= "BCP BCP mais alors bcp TROP"
    //                 setTimeout(() => {
    //                     this.leNombre = 0;
    //                 }, 3000);
    //             }
        
    //         },
    //     },
    //     }).mount('#monApp');