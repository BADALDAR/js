// console.log('other')
const students = [
	{ name: 'Вероника', age: 34, sex: 'Ж', eq: 'snowboard', level: 3 },
	{ name: 'Елена', age: 40, sex: 'Ж', level: 2, eq: 'ski', level: 2 },
	{ name: 'Виталий', age: 42, sex: 'М', level: 3, eq: 'snowboard', level: 4 },
]
// FOR EACH
// students.forEach(function (test) {
// 	console.log(test)
// })
students.forEach(st => console.log(st.name + st.sex))
