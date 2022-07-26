class JustePrix {

    public static comparaison (nbJoueur : number, nbAttendu : number) {

        if(nbJoueur > nbAttendu) {
            return "Perdu : le Resultat Attendu est plus Petit"
        } else if(nbJoueur < nbAttendu) {
            return "Perdu : le Resultat Attendu est plus Grand"
        } else {
            return `Bravo : vous êtes l'heureux gagnant car ${nbJoueur} = ${nbAttendu}`;
        }

    }

}


export default JustePrix;



