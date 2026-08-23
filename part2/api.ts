export interface HeroAPI {
    localized_name: string;
    img: string;
}
export interface Cards_of_heroes {
    name: string;
    image: string;
}
export async function getHeroAPI(): Promise<HeroAPI[]> {
    const response = await fetch('https://api.opendota.com/api/heroStats');
    if (!response.ok) {
        throw new Error('Failed to fetch hero data')
    }
    const data: HeroAPI[] = await response.json();
    return data;
}