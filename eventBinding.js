//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            numberClick: 0,
        };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        eventAdd() {
            this.numberClick ++;
    },
        eventSoust(){
            this.numberClick --;
        }
},
        
    //! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#monApp')


// BONUS //
// AJOUTER DE 10 EN 10 ET DE 42 EN 42 //
// methods: {
//     eventAdd() {
//         this.numberClick +=10;
// },
//     eventSoust(){
//         this.numberClick -=10;
//     }
// },

