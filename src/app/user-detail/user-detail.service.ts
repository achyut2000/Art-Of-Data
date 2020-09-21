import {Injectable} from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
    providedIn:'root'
})

export class CrudService{

    constructor(private firestore : AngularFirestore){}
            
    createUser(record){
        return this.firestore.collection('users').add(record);
    }
    read_users(){
        return this.firestore.collection('users').snapshotChanges();
    }
    update_student(userId,record){
        this.firestore.doc('users/'+userId).update(record);
    }
    delete_student(userId){
        this.firestore.doc('users/'+userId).delete();
    }
}