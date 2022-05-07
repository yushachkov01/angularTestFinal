import { getRandom } from "./randommn";

export interface Coordinates {
    longitude: number;
    latitude: number;
}

export const MOSCOW_COORDINATES = {
    begin: {longitude: 37.428645, latitude: 55.876448},
    end: {longitude: 37.835122, latitude: 55.653490}
}

export function CoordinatesMoscow(): Coordinates {
    return {
        longitude: getRandom(MOSCOW_COORDINATES.begin.longitude, MOSCOW_COORDINATES.end.longitude),
        latitude: getRandom(MOSCOW_COORDINATES.begin.latitude, MOSCOW_COORDINATES.end.latitude)
    }
}
