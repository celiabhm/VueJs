//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            nameUser: 'Dr.Mario',
            ageUser: 45,
            imageUser: 'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg',
            numberUser: Math.random(),
        };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        resultAge() {
            return 
            this.ageUser+=10;
    }
},
    //! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#app')