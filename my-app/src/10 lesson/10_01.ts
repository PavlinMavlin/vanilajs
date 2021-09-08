export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UsersWithLaptop = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}
type CompanyType= { id: number, title: string };
export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {

        ...u,
        hair: u.hair / power,
    }
    // copy.hair = u.hair/ power
    return copy
}

export function moveUser(u: UsersWithLaptop, city: string) {
    const copy = {

        ...u, address: {
            ...u.address, city: city
        }

    }

    return copy
}

export function moveUserToOthersHouse(u: UsersWithLaptop & UserWithBooksType, house: number) {
    return {

        ...u, address: {
            ...u.address, house: house
        }

    }


}


export function upgraideUserLaptop(u: UsersWithLaptop, laptop: string) {
    const copy = {

        ...u, laptop: {
            ...u.laptop, title: laptop

        }

    }

    return copy
}

export function addNewBooksToUsers(u: UsersWithLaptop & UserWithBooksType, newbooks: string) {
    return {

        ...u, books:
            [...u.books, newbooks]

    }
}

export function upDateBook(u: UsersWithLaptop & UserWithBooksType, oldBook: string, newBooks: string) {
    return {
        ...u, books: u.books.map(b => b === oldBook ? newBooks : b)
    }
}


export function upGraideSkills(u: Array<number>, oldSkill: number, newSkill: number) {
    return {
        ...u.map(s => s === oldSkill ? newSkill : oldSkill)
    }
}

export function removeBook(u: UsersWithLaptop & UserWithBooksType, bookForDelete: string) {
    return {
        ...u, books: u.books.filter(b => b !== bookForDelete)
    }
}

export function updateCompanyTitle(u: UsersWithLaptop & WithCompaniesType, companiesId: number, newTitle: string) {
    return {
        ...u, companies: u.companies.map(c => c.id === companiesId ? {...c, title: newTitle} : c)
    }
}

export function updateCompanyTitle2( companies: {[key:string]:Array<CompanyType>},userName: string, companiesId: number, newTitle: string) {
    let companyCopy = {...companies}

    companyCopy[userName] = companies[userName].map(c => c.id === companiesId ? {...c, title: newTitle} : c)

return companyCopy
}