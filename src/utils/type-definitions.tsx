export type StripesType = 1|2|3;

export type ColorType = 'b' | 'w' | 't';

export type ShapeType = 't' | 's' | 'r';

export type EyesType = 'g' | 'b' | 'r';

export interface CatType {
    id: string,
    stripes: StripesType,
    color: ColorType,
    shape: ShapeType,
    eyes: EyesType
}

export type CatResponseType = [StripesType, ColorType, ShapeType, EyesType]