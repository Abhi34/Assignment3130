export default class DataManager {
    static myInstance = null;
    userID ="";

    static getInstance(){
        if(DataManager.myInstance==null){
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    getUserID(){
        return this.userID;
    }

    setUserID(id) {
        this.userID = id;
    }
}