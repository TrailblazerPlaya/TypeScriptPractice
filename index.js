// Необходимо написать функцию сортировки любых
// объектов, которые имеют id по убыванию и по возрастанию
function sortObjectById(data, ascending) {
    if (ascending === void 0) { ascending = true; }
    return data.sort(function (a, b) { return ascending ? a.id - b.id : a.id - b.id; });
}
function sort(data, type) {
    if (type === void 0) { type = 'asc'; }
    return data.sort(function (a, b) {
        switch (type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    });
}
var data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
console.log(sort(data, 'asc'));
console.log(sortObjectById(data));
