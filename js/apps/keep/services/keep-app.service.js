import { utilService } from './util.service.js';
import { storageService } from './async-storage-service.js';

const NOTES_KEY = 'NOTES';

export const keepService = {
    getNotes,
    remove,
    query,
    getById,
    save,
    addReview,

    // getNextBookId,
};

var gNotes = [
    {
        type: 'NoteTxt',
        id: utilService.makeId(),
        isPinned: true,
        info: {
            txt: 'Fullstack Me Baby!',
        },
    },
    {
        type: 'NoteTxt',
        id: utilService.makeId(),
        isPinned: true,
        info: {
            txt: 'Fullstack Baby!',
        },
    },
    {
        type: 'NoteImg',
        id: utilService.makeId(),
        info: {
            url: 'http://coding-academy.org/books-photos/14.jpg',
            title: 'Me playing Mi',
        },
        style: {
            backgroundColor: '#00d',
        },
    },
    {
        type: 'NoteImg',
        id: utilService.makeId(),
        info: {
            url: 'http://coding-academy.org/books-photos/2.jpg',
            title: 'Me playing Mi',
        },
        style: {
            backgroundColor: '#00d',
        },
    },
    {
        type: 'NoteTodos',
        id: utilService.makeId(),
        info: {
            label: 'What To Do:',
            todos: [
                { txt: 'Do that', doneAt: null },
                { txt: 'Do this', doneAt: 187111111 },
            ],
        },
    },
    {
        type: 'NoteVideo',
        id: utilService.makeId(),
        info: {
            url:
                'https://www.youtube.com/embed/xmeCr9QPhkA?list=RDMMxmeCr9QPhkA',
        },
    },
];

// function getNotes() {
//     return gNotes;
// }

function query() {
    return getNotes();
}

function getNotes() {
    return storageService.query(NOTES_KEY).then((notes) => {
        if (!notes || !notes.length) {
            // gNotes.forEach((note) => (note.id = utilService.makeId));
            // console.log('note:', note);
            console.log('gnotes:', gNotes);
            return storageService.postMany(NOTES_KEY, gNotes);
        }
       
        return notes;
    });
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId);
}
function getById(id) {
    return storageService.get(BOOKS_KEY, id);
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOKS_KEY, book);
    } else {
        return storageService.post(BOOKS_KEY, book);
    }
}

function addReview(bookId, review) {
    return getById(bookId).then((book) => {
        console.log('book433:', book);
        book.reviews.push(review);
        return storageService.put(BOOKS_KEY, book);
    });
}

function getNextBookId(bookId) {
    const books = gBooks;
    var bookIdx = books.findIndex((book) => {
        return book.id === bookId;
    });
    var nextBookIdx = bookIdx + 1;
    if (nextBookIdx === books.length) nextBookIdx = 0;
    return books[nextBookIdx].id;
}
