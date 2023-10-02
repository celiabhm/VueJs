//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
        bonjour:'Hello !!',
        unLivre: 'Les mémoires de Steven Seagal',
        unTableau: ['du texte', 99],
        unNombre: 1234567890,
        unObjet: {
        name: 'COOL',
    },
};
    },
    //! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#app');