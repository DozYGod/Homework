let jobs = [
    {
        id: 1,
        company_name: "raximjon_pepsi",
        tax: 13,
        budget: 2_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 15000
            },
            {
                title: "salary",
                total: 500_000
            },
            {
                title: "rent",
                total: 200_000
            },
        ]
    },
    {
        id: 2,
        company_name: "amir_fanta_stick",
        tax: 12,
        budget: 1_800_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 20_000
            },
            {
                title: "salary",
                total: 700_000
            },
            {
                title: "rent",
                total: 100_000
            },
        ]
    },
    {
        id: 3,
        company_name: "frump_buildings",
        tax: 14,
        budget: 3_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 50_000
            },
            {
                title: "salary",
                total: 1_200_000
            },
            {
                title: "rent",
                total: 500_000
            },
        ]
    },
    {
        id: 4,
        company_name: "farrux_tube",
        tax: 12,
        budget: 10_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 700_000
            },
            {
                title: "salary",
                total: 4_000_000
            },
            {
                title: "rent",
                total: 300_000
            },
        ]
    },
    {
        id: 5,
        company_name: "desla",
        tax: 14,
        budget: 14_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 700_000
            },
            {
                title: "salary",
                total: 3_000_000
            },
            {
                title: "rent",
                total: 5_000_000
            },
        ]
    },
    {
        id: 6,
        company_name: "desla",
        tax: 14,
        budget: 14_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 700_000
            },
            {
                title: "salary",
                total: 3_000_000
            },
            {
                title: "rent",
                total: 5_000_000
            },
        ]
    },
    {
        id: 7,
        company_name: "nosway_u_rustama",
        tax: 10,
        budget: 100_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 10_000
            },
            {
                title: "salary",
                total: 0
            },
            {
                title: "rent",
                total: 0
            },
        ]
    },
    {
        id: 8,
        company_name: "vinovodochnaya_u_timura",
        tax: 21,
        budget: 1_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 40_000
            },
            {
                title: "salary",
                total: 20_000
            },
            {
                title: "rent",
                total: 30_000
            },
        ]
    },
    {
        id: 9,
        company_name: "sokhib_books",
        tax: 10,
        budget: 400_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 40_000
            },
            {
                title: "salary",
                total: 12_000
            },
            {
                title: "rent",
                total: 15_000
            },
        ]
    }
]

let successful = []
let unSuccessful = []
let taxes = Number
let taxesMax = {}
let taxesMin = {}

for(let item of jobs){ 
    let expensesPerMonth = item.expensesPerYear.reduce((a,b)=>{
        return a + b.total / 12
    }, 0)
    item.expensesPerMonth = Math.floor(expensesPerMonth)
    item.procent = item.budget / expensesPerMonth * 100 + '%'
    console.log(item)
}

successful.push(jobs.filter(company_name => company_name.budget > (company_name.expensesPerYear.reduce((a, b) => a + b.total, 0) + company_name.tax * 12)))

unSuccessful.push(jobs.filter(company_name => company_name.budget < (company_name.expensesPerYear.reduce((a, b) => a + b.total, 0) + company_name.tax * 12)))

taxes = jobs.reduce((acc, cur) => acc + cur.tax * 12, 0)

taxesMax = jobs.reduce(function (a, b) {

return a.tax > b.tax ? a : b

})

taxesMin = jobs.reduce(function (a, b) {

return a.tax < b.tax ? a : b

})

jobs.forEach(company_name => {

company_name.totalMoney = company_name.budget - (company_name.expensesPerYear.reduce((a, b) => a + b.total, 0) + company_name.tax * 12)

})
console.log(successful,unSuccessful,taxes,taxesMax,taxesMin);
