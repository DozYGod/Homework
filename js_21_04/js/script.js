let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '     3DSMAX',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {       
        course: '   BACKEND',
        count: 0
    },
]


let found = Array.from({length: categories.length}, () => []);


for (let i = 0; i < arr.length; i++){
    let category = arr[i].info.faculity.toUpperCase().trim();
    for (let j = 0; j < categories.length; j++) {
        if (category === categories[j].course.trim()) {
            found[j].push(arr[i])
            categories[j].count++
            break
        }
        
    }

}
for(let i = 0; i < categories.length; i++){
    console.log(`${categories[i].course} - ${categories[i].count} человек`);
    for(let j = 0; j < found[i].length; j++){
        console.log(`${found[i][j].name}, ${found[i][j].info.school}`);
    }
}

for (let i = 5; i >= 1; i--) {
    let row = ` `;
    for (let j = 1; j <= i; j++) {
      row += `* `;
    }
    document.write(row + `<br>`);
  }
//таблица умножения 
for (let i = 1; i <= 10; i++ ){
    for(let k = 1; k <=10; k++ ){
        document.write(`${i} * ${k} = ${k * i} <br>`)
    }
}
  
