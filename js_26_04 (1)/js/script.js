//1
let name = ('Alex', 'George', 'Michael')
function max_name() {
    let max = '';
    for (let name of arguments) {
      if (name.length > max.length) {
        max = name;
      }
    }
    return max;
}
 console.log(max_name('Alex', 'George', 'Michael'));
  max_name()

//2
min(1, 2)
min([1, 2])
min({a: 1, b: 2})
min({a: 1, b: 2}, {a: 11, b: 12})

  function min() {
    let args = Array.prototype.slice.call(arguments); // преобразуем arguments в массив
    let result = args[0]; // первый аргумент - начальное значение
    for (let i = 1; i < args.length; i++) {
      if (args[i] < result) {
        result = args[i]; // если текущий аргумент меньше предыдущего, то сохраняем его
      }
    }
    return result;
  } min()


//3
// В ручную создать функцию сорт с помощью циклов for of & while
// function sortArray(array) {
//     let sorted = false;
//     while (!sorted) {
//       sorted = true;
//       for (let value of array) {
//         let index = array.indexOf(value);
//         if (index + 1 < array.length && value > array[index + 1]) {
//           sorted = false;
//           [array[index], array[index + 1]] = [array[index + 1], array[index]];
//         }
//       }
//     }
//     return array;
//   }
// sortArray()