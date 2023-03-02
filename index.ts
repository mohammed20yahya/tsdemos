interface MyDate {
    date: Date,
    name: string,
    age: number,
    note?: string
}

var date: MyDate = {
    date: new Date(),
    name: "Mo",
    age: 25,
    note: "hello"
}

console.log("hello world " + JSON.stringify(date))