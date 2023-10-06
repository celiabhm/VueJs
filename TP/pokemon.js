const app = Vue.createApp({
    data() {
        return {
            joueur: {
                nom: 'Gimli',
                vie: 100,
                attack: 15,
        },
            monstre:{
                nom: 'Ragnaros',
                vie:100,
                attack: 20,
            },
            tour: 0,
            validate : false,
            winner : false,
            looser : false,
            draw : false,
    };
},
    methods: {
    attack(attaquant, cible){
        cible.vie -=  attaquant.attack;
    },

    attackMonstre(){
        this.attack(this.monstre,this.joueur);
        if(this.joueur.vie <=0){
            this.looser = true;
        }
        else {
            console.log(this.joueur);
            this.tour += 1;
        }
        
    },

    attackJoueur(){
        this.attack(this.joueur,this.monstre);
        if(this.monstre.vie <0){
            this.winner = true;
            console.log(this.monstre);
        }
        else {
            this.attackMonstre();
            console.log(this.monstre);
            this.tour += 1;    
        }
        
        
    },

    seSoigner(){
        this.joueur.vie += 30; 
        if(this.joueur.vie>100){
            this.joueur.vie = 100;
        } 
        this.attackMonstre();
        console.log(this.joueur);
        this.tour += 1;
    },
    coupSpecial(){
        this.monstre.vie -= 1.7 * this.joueur.attack;
        if(this.monstre.vie > 0){
            this.attackMonstre();
        }
        console.log(this.monstre);
        this.tour += 1;
    },
    lolFF(){
        alert('LOOSER');
    },

    },
    computed: {
        test(){
            if(this.monstre.vie < 0){
                return "{width : 0 + '%'}";
            }
            else {
                return {width : this.monstre.vie + '%' };
            }
        }

    },
    watch : {
        tour(){
            if(this.tour % 3 != 0){
                this.validate = false;
            }
            else {
                this.validate = true;
            }
        },
    }
});
app.mount('#monApp');