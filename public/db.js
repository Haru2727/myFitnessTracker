let db;
let fitnessVersion;

// creating a new db request for a "fitness" database
const request = indexedDB.open('FitnessDB', fitnessVersion || 1);

request.onupgradeneeded = function (e) {
    console.log('Upgrade needed in IndexDB');

    const { oldVersion } = e;
    const newVersion = e.newVersion || db.version;

    console.log(`DB updated from version ${oldVersion} to  ${newVersion}`);

    db = e.target.result;

    if (db.objectStoreNames.lenght === 0) {
        db.objectStoreNames('WorkoutStore')
    }
}