//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            selectCard1: false,
            selectCard2: false,
        };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        selectCard(uneCard) {
            if(uneCard == 1){
                selectCard1: true;
            }else if(uneCard == 2){
                selectCard2: true;
            };
    },
},

    //! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#monApp')