// Необходимо написать функцию сортировки любых
// объектов, которые имеют id по убыванию и по возрастанию

function sortObjectById<T extends { id: number }>(data: T[], ascending: boolean = true): T[] {
    return data.sort((a, b) => ascending ? a.id - b.id : a.id - b.id);
}

////////////////////////////////
interface ID {
    id: number
}

function sort<T extends ID>( data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
    return data.sort((a, b) => {
        switch (type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;    
        }
    })
}


const data = [
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 3, name: 'Надя' },
];

console.log(sort(data, 'desc'));
console.log(sortObjectById(data));
