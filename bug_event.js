//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            numberClick: 0,
            userName: '',
        };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        eventAdd() {
            this.numberClick ++;
    },
        eventSoust(){
            this.numberClick --;
        },
        
        afficherName(userName) {
            if(userName == ''){
                return 'test';
            } else{
                return 'Un autre test';
            };
        },
    },

    //! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#monApp')



// une fonction dans laquelle on manipule une variable userName (on éxécute cette fonction directement dans le paragraphe html) //
// Un console log qui affiche "fonction éxécuté"//
// Si Username est vie alors on retourne "test"//
// Sinon on retourne "un autre test" // v-on + fonctions