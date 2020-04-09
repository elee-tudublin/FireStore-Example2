
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "",
  authDomain: "product-store-2020.firebaseapp.com",
  databaseURL: "https://product-store-2020.firebaseio.com",
  projectId: "product-store-2020",
  storageBucket: "product-store-2020.appspot.com",
  messagingSenderId: "",
  appId: ""

};


// name of the the Firebase collection to be used
const FB_COLLECTION = "categories";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

// Get a reference to the database service
let database = firebase.firestore();

/*
    Get documents from Firebase for a given document collection path
*/
// CollectionPath parameter defaults to the value of FB_COLLECTION
async function getFireStoreDataAsync(collectionPath = FB_COLLECTION) {
    // Declare empty array
    let result = [];
  
    // await calls must be made in try-catch blocks
    try {
      // Get a snapshot of the products collection
      let snapshot = await database.collection(collectionPath).get();
  
      // use map() to retrieve product document objects from the snapshot - storing each in the array
      // map returns each document from the firestore snapshot
      result = snapshot.docs.map(doc => {
        return doc;
      });
    } catch (err) {
      // catch errors
      console.log(err);
    }
  
    // return the messages array
    return result;
  }