import { utilService } from './util.service.js';
import { storageService } from './async-storage-service.js';

const NOTES_KEY = 'NOTES';

export const keepService = {
    getNotes,
    // remove,
    // query,
    // getById,
    // save,
    // addReview,
    // ask,
    // addGoogleBook,
    // getNextBookId,
};

var gNotes = [
    {
        type: 'NoteTxt',
        isPinned: true,
        info: {
            txt: 'Fullstack Me Baby!',
        },
    },
    {
        type: 'NoteTxt',
        isPinned: true,
        info: {
            txt: 'Fullstack Baby!',
        },
    },
    {
        type: 'NoteImg',
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
        info: {
            url: 'https://www.youtube.com/embed/xmeCr9QPhkA?list=RDMMxmeCr9QPhkA',
        },
    },
];

function getNotes() {
    return gNotes;
}
