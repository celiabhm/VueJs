//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            title1: document.querySelector('h2'),
            title2: document.querySelector('h3'),
        };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        capterInput(event){
            // console.log(event);
            this.uneString = event.target.value;
        }

},

    //! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#monApp')

// function //
// si la valeur de l'input est egal à "" alors appliquer class //x2
// + background en fonction de la couleur écrite //

// CORRECTION //
// const app = Vue.createApp({
//     data() {
//         return {
//         nomClasse: '',
//         laCouleur: '',
//         visible: true,
//         };
//     },
//     computed: {
        //Version optimisé en passant par une fonction
        //Computed pour pas avoir d'interférences avec la ƒ° toggle affichage
        // classDynamique() {
        //! Verision opti ?  
        // return{
        //   maClasseHello: this.nomClasse ==='hello',
        //   maClasseWorld: this.nomClasse ==='world',
        //   maClasseHidden: !this.visible,
        //   maClasseVisible: this.visible
        // }
        //!Version classique avec des if 
    //     if (this.nomClasse === 'hello') {
    //         return 'maClasseHello';
    //     }
    //     if (this.nomClasse === 'world') {
    //         return 'maClasseWorld';
    //     }
    //     if (this.visible) {
    //         return 'maClasseVisible';
    //     }
    //     if (!this.visible) {
    //         return 'maClasseHidden';
    //     }
    //     },
    // },
    // methods: {
    //     affichage() {
    //     this.visible = !this.visible;
    //     },
    // },
    // });
    // app.mount('#monApp');   
