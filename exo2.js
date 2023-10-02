//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
        unLivre: 'Les mémoires de steven Seagal',
    };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        resultTest(){
    const test= Math.random();
    if(test>0.5){
        return 'Test réussi !';
    }else {
        return 'Tu es en dessous';
        }
    }
}
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#bookListApp')