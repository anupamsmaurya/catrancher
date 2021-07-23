import { CatResponseType, CatType } from "../utils/type-definitions";

const baseUrl = 'http://quantcats.herokuapp.com';

export const getCatBag = async () => {
    const response = await fetch(`${baseUrl}/bag`)
    const data = await response.json();
    return parseCatResponse(data.cats)
}

export const checkClowdervalidity = async (ids: Array<string>) => {
    const response = await fetch(`${baseUrl}/clowder?cat=${ids[0]}&cat=${ids[1]}&cat=${ids[2]}`)
    return await response.json()    
}

const parseCatResponse = (data: Array<CatResponseType>) => {
    const cats: Array<CatType> = [];
    data.forEach( (catData: CatResponseType) => {
        const cat: CatType = {
            id: catData.join(''),
            stripes: catData[0],
            color: catData[1],
            shape: catData[2],
            eyes: catData[3]
        }
        cats.push(cat)
    });
    return cats;
}

