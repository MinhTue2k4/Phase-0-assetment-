import type { HeroAPI, Cards_of_heroes } from "./api.js";
export interface GameConfig {
    Heroes_Data: HeroAPI[];
    Cards_Data: Cards_of_heroes[];
    deck_of_heroes(): Cards_of_heroes[];
}
export const game: GameConfig = {
    Heroes_Data: [],
    Cards_Data: [],

    deck_of_heroes(): Cards_of_heroes[] {
        //create a copy and take random from database  
        const shuffled_all_heroes = [...this.Heroes_Data].sort(() => 0.5 - Math.random());

        //take random 10 
        const randomize_heroes = shuffled_all_heroes.slice(0, 10);
        //saved heroes into a new array 
        this.Cards_Data = randomize_heroes.map((hero) => {
            return {
                name: hero.localized_name,
                image: 'https://cdn.steamstatic.com' + hero.img,
            };
        })
        // double the heroes 
        const heroesMultiplyx2 = this.Cards_Data.concat(this.Cards_Data);
        // shuffle one last time 
        heroesMultiplyx2.sort(() => 0.5 - Math.random());
        return heroesMultiplyx2; 
    }
}