/* Your Code Here */
let gray = ["Gray", "Worm", "Security", 24]

let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
]

const csvDataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300]
  ]

  const csvTimesIn = [
    ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
    ["Natalia", ["2018-01-01 1700", "2018-01-05 1800", "2018-01-03 1300"]],
    ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
    ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
  ]

  const csvTimesOut = [
    ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Natalia", ["2018-01-01 2300", "2018-01-05 2300", "2018-01-03 2300"]],
    ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
    ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
  ]

// let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
// let updatedBpRecord = createTimeInEvent.call(bpRecord, "2014-02-28 1400")
// let newEvent = updatedBpRecord.timeInEvents[0]

// attempting this lab using object orientation
class Employee{
    constructor(firstName, familyName, title, payPerHour){
        this.firstName = firstName;
        this.familyName = familyName;
        this.title = title;
        this.payPerHour = payPerHour;
        this.timeInEvents = [];
        this.timeOutEvents = []
    }

    createEmployeeRecord(employeeArr) {
        this.firstName = employeeArr[0]
        this.familyName = employeeArr[1]
        this.title = employeeArr[2]
        this.payPerHour = employeeArr[3]
    }

    createTimeInEvent(dateStamp) {
        const dateAndTime = dateStamp.split(' ')
        this.timeInEvents.push({
            type: 'TimeIn',
            hour: parseInt(dateAndTime[1]),
            date: dateAndTime[0]
        })
    }

    createTimeOutEvent(dateStamp) {
        const dateAndTime = dateStamp.split(' ')
        this.timeOutEvents.push({
            type: 'TimeOut',
            hour: parseInt(dateAndTime[1]),
            date: dateAndTime[0]
        })
    }

    hoursWorkedOnDate(date) {
        const timeIn =  this.timeInEvents.find(timeInEvent => timeInEvent.date === date)
        const timeOut = this.timeOutEvents.find(timeOutEvent => timeOutEvent.date === date)
        const hoursWorked = (timeOut.hour - timeIn.hour)/100
        return hoursWorked
    }

    wagesEarnedOnDate(date) {
        return this.hoursWorkedOnDate(date) * this.payPerHour
    }
}


// const employee = new Employee()
// employee.createEmployeeRecord(gray)
// employee.createTimeInEvent("2014-02-28 1400")
// employee.createTimeInEvent("2014-02-29 1500")
// employee.createTimeOutEvent("2014-02-28 2200")
// employee.createTimeOutEvent("2014-02-29 2200")

function createEmployeeRecord(employeeArr) {
    let employee = {
        firstName: employeeArr[0],
        familyName: employeeArr[1],
        title: employeeArr[2],
        payPerHour: employeeArr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(employees){
    return employees.map(employee => createEmployeeRecord(employee))
  }

function createTimeInEvent(dateStamp) {
    const dateAndTime = dateStamp.split(' ')
        this.timeInEvents.push({
            type: 'TimeIn',
            hour: parseInt(dateAndTime[1]),
            date: dateAndTime[0]
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    const dateAndTime = dateStamp.split(' ')
        this.timeOutEvents.push({
            type: 'TimeOut',
            hour: parseInt(dateAndTime[1]),
            date: dateAndTime[0]
    })
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn =  this.timeInEvents.find(timeInEvent => timeInEvent.date === date)
    const timeOut = this.timeOutEvents.find(timeOutEvent => timeOutEvent.date === date)
    const hoursWorked = (timeOut.hour - timeIn.hour)/100
    return hoursWorked
}

function wagesEarnedOnDate(date) {

    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(employees, firstName) {
        return employees.find(employee => employee.firstName === firstName)
}

// function allWagesFor(employeeRecord) {
//     return employeeRecord.timeInEvents.map(element => wagesEarnedOnDate(employeeRecord, element.date)).reduce((a,b) => a + b)
// }

function addEmployees() {
    let employeeRecords = createEmployeeRecords(csvDataEmployees)
        employeeRecords.forEach(function (rec) {
            let timesInRecordRow = csvTimesIn.find(function (row) {
            return rec.firstName === row[0]
            })

            let timesOutRecordRow = csvTimesOut.find(function (row) {
            return rec.firstName === row[0]
            })

            timesInRecordRow[1].forEach(function(timeInStamp){
            createTimeInEvent.call(rec, timeInStamp)
            })

            timesOutRecordRow[1].forEach(function(timeOutStamp){
            createTimeOutEvent.call(rec, timeOutStamp)
            })
        })
    return employeeRecords
}

function calculatePayroll(employees) {
    return employees.map(e => allWagesFor.call(e)).reduce((a,b) => a + b)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

