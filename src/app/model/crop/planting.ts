export class Planting {
    constructor (
        public crop: object,
        public quantity: number,
        public ready: number,
        public regrowth: boolean,
        public additionalDays: array,
        public harvestWorth: number,
        public active: boolean
    ){}
}
