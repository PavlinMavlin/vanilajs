import {
    addNewBooksToUsers,
    makeHairstyle,
    moveUser,
    moveUserToOthersHouse, removeBook, upDateBook, updateCompanyTitle, updateCompanyTitle2, upGraideSkills,
    upgraideUserLaptop,
    UsersWithLaptop,
    UserType,
    UserWithBooksType, WithCompaniesType
} from "./10_01";


test("reference type test", () => {
    let user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk"
        },

    }
    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)

})

test("change address", () => {
    let user: UsersWithLaptop = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        }, laptop: {title: "zenBook"}
    }
    const movedUser = moveUser(user, "Kiev")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Kiev")

})


test("upgrade to macbook", () => {
    let user: UsersWithLaptop & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {title: "zenBook"},
        books: ["css", "html", "js", "react"]
    }
    const userCopy = moveUserToOthersHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address.house).toBe(99)

})
test("add new books to user", () => {
    let user: UsersWithLaptop & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {title: "zenBook"},
        books: ["css", "html", "js", "react"]
    }
    const userCopy = addNewBooksToUsers(user, "ts")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe("ts")
    //expect(user.books[5]).toBe("rest api")
})

test("update js to ts", () => {
    let user: UsersWithLaptop & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {title: "zenBook"},
        books: ["css", "html", "js", "react"]
    }
    const userCopy = upDateBook(user, "js", "ts")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("ts")


})
test("upgrade skills", () => {
    const skillLevels: Array<number> = [3, 4, 6, 33, 66, 87, 24]

    const skillCopy: Array<number> = upGraideSkills(skillLevels, 66, 34)
    expect(skillLevels).not.toBe(skillCopy)

    expect(skillCopy[4]).toBe(34)


})
test("remove js book", () => {
    let user: UsersWithLaptop & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {title: "zenBook"},
        books: ["css", "html", "js", "react"]
    }
    const userCopy = removeBook(user, "js")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("react")
})

test("upgrade skills", () => {
    const skillLevels: Array<number> = [3, 4, 6, 33, 66, 87, 24]

    const skillCopy: Array<number> = upGraideSkills(skillLevels, 66, 34)
    expect(skillLevels).not.toBe(skillCopy)

    expect(skillCopy[4]).toBe(34)


})


test("add new company", () => {
    let user: UsersWithLaptop & WithCompaniesType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {title: "zenBook"},
        companies: [{id:1,title:"epam"},{id:2,title:"it-incubator"}]
    }
    const userCopy = updateCompanyTitle(user,1 ,"Pepsi")

    expect(user).not.toBe(userCopy)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(user.address).toBe(userCopy.address)
    // expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.companies[0].title).toBe("Pepsi")
})

test("update company", () => {



    let companies = {
        "dimuch": [{id: 1, title: "epam"}, {id: 2, title: "it-incubator"}],
        "artem": [{id: 1, title: "it-incubator"}]
    }
   const copy=  updateCompanyTitle2(companies,"dimuch",1,"Pepsi")
expect(copy[ "dimuch"]).not.toBe(["dimuch"])
expect(copy[ "artem"]).toBe(["artem"])
expect(copy[ "dimuch"][0].title).toBe(["Pepsi"])

})