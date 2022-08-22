import {openDB, deleteDB} from 'idb'

(function () {

    //Check browser indexeddb support    

    if (!window.indexedDB) {
        console.log(`Your browser doesn't support IndexedDB`);
        return;
    }
    //Open connection to db Expressions, version 1

    const request = openDB('Expressions', 1);

    // create the comments object store and indexes

    request.onupgradeneeded = (event) => {
        let db = event.target.result;

    // create the comments object store 
    // with auto-increment id
    
    let store = db.createObjectStore('Comments', {
        autoIncrement: true
    });

    // create an index on the email property

    let comment = store.createIndex('comment', 'comment', {
        unique: false
    });
        let name = store.createIndex('name', 'name', {
        unique: false
    });
        let email = store.createIndex('email', 'email', {
            unique: true
        });

    //Setup handlers for open success/failure

    request.onerror = (event) => {
        console.error(`Database error: ${event.target.errorCode}`);
    };
    
    request.onsuccess = (event) => {
        const db = event.target.result;
    
        insertComment(db, {
            comment: 'New York State of Mind',
            name: 'John Hinley',
            email: 'john.doe@outlook.com'
        });
    
        insertComment(db, {
            comment: 'Empire State where the city never sleeps',
            name: 'Jane',
            email: 'jane.doe@outlook.com'
        });

        insertComment(db, {
            comment: 'The Big Apple',
            name: 'Tommy',
            email: 'tommy.doe@outlook.com'
        });

        // get contact by id 1
        // getContactById(db, 1);


        // get contact by email
        // getContactByEmail(db, 'jane.doe@gmail.com');

        // get all contacts
        // getAllContacts(db);

        deleteContact(db, 1);
        
    };
//insert new contact

function insertContact(db, comments) {

    // create a new transaction
        const txn = db.transaction('Comments', 'readwrite');
    
    // get the Contacts object store
        const store = txn.objectStore('Comments');
    
        let query = store.put(comments);
    
    // handle success case
        query.onsuccess = function (event) {
            console.log(event);
        };
    
    // handle the error case
        query.onerror = function (event) {
            console.log(event.target.errorCode);
        }
    
    // close the database once the transaction completes
        txn.oncomplete = function () {
            db.close();
        };
    }
    //use the insertContact function to insert new contacts


};

function getCommentById(db, id) {
    const txn = db.transaction('Comments', 'readonly');
    const store = txn.objectStore('Comments');

    let query = store.get(id);

    query.onsuccess = (event) => {
        if (!event.target.result) {
            console.log(`The contact with ${id} not found`);
        } else {
            console.table(event.target.result);
        }
    };

    query.onerror = (event) => {
        console.log(event.target.errorCode);
    }

    txn.oncomplete = function () {
        db.close();
    };
};

function getContactByEmail(db, email) {
    const txn = db.transaction('Comments', 'readonly');
    const store = txn.objectStore('comments');

    // get the index from the Object Store
    const index = store.index('email');
    // query by indexes
    let query = index.get(email);

    // return the result object on success
    query.onsuccess = (event) => {
        console.log(query.result); // result objects
    };

    query.onerror = (event) => {
        console.log(event.target.errorCode);
    }

    // close the database connection
    txn.oncomplete = function () {
        db.close();
    };
}

function getAllComments(db) {
    const txn = db.transaction('Comments', "readonly");
    const objectStore = txn.objectStore('Comments');

    objectStore.openCursor().onsuccess = (event) => {
        let cursor = event.target.result;
        if (cursor) {
            let contact = cursor.value;
            console.log(comment);
            // continue next record
            cursor.continue();
        }
    };
    // close the database connection
    txn.oncomplete = function () {
        db.close();
    };
}

function deleteContact(db, id) {
    // create a new transaction
    const txn = db.transaction('Comments', 'readwrite');

    // get the Contacts object store
    const store = txn.objectStore('Comments');
    //
    let query = deleteDB(id);

    // handle the success case
    query.onsuccess = function (event) {
        console.log(event);
    };

    // handle the error case
    query.onerror = function (event) {
        console.log('Delete is successful.');
    }

    // close the database once the 
    // transaction completes
    txn.oncomplete = function () {
        db.close();
    };
}
})();