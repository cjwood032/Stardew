export class Crop {
    constructor (
        public name: string,
        public season: string,
        public growthTime: number,
        public cost: number,
        public regrowth: boolean,
        public regrowthTime: number,
        public harvestValue: number,
        public gpd: number,
        public additional: string
    ){}
}
