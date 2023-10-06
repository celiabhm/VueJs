//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            p1:'',p2:'',
        };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        alertText(event){
            alert('ALERTE GENERAL');
        },
        capterInput(event){
            // console.log(event);
            this.uneString = event.target.value;
        }
},
        
    //! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#App')


// CORRECTION //
// const app = Vue.createApp({
//     data() {
//         return { leInput: '', leInputConfirm: '' };
//     },
//     methods: {
//         afficherAlerte() {
//             alert('ALERTE GENERALE');
//         },
//         afficherInput(event) {
//             console.log(event);
//             this.leInput = event.target.value;
//         },
//         afficherInputConfirm(event) {
//             this.leInputConfirm = event.target.value;
//         },
//     },
//     });
    
//     app.mount('#monApp');
