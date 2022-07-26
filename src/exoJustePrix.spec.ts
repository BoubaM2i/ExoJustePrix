import JustePrix from "./exoJustePrix";

describe ('Comparaison', () => {

    describe('Comparaison', ()=> {
        test('Perdu : nombre du Joueur est Inférieur au nombre Attendu', () => {
            expect(JustePrix.comparaison(5,10)).toBe('Perdu : le Resultat Attendu est plus Grand')

        })
    })

    describe('Comparaison', ()=> {
        test('Perdu : nombre du Joueur est Supérieur au nombre Attendu', () => {
            expect(JustePrix.comparaison(25,5)).toBe('Perdu : le Resultat Attendu est plus Petit')

        })
    })

    describe('Comparaison', ()=> {
        test('Bravo : vous êtes l/heureux gagnant', () => {
            expect(JustePrix.comparaison(13,13)).toBe(`Bravo : vous êtes l'heureux gagnant car ${13} = ${13}`)

        })
    })

    
    })












