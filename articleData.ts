import * as SQLite from 'expo-sqlite';


type testType = {
    id:number;
    value:string;
    intValue:number;
}

export const db = SQLite.openDatabaseSync('myData.db')


export async function createTables(){
await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS articles (
    
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        author TEXT NOT NULL,
        content TEXT NOT NULL,
        linkUrl TEXT NOT NULL
    );



`);
}


// INSERT DATA

// INSERT INTO Articles (id, name, category, author, content ,linkUrl)
// VALUES (1, 'Tips to cut calories', 'Calorie', 'Dr Johnny Sins', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget neque iaculis ligula imperdiet pulvinar. Sed finibus eros at ex lobortis pharetra. Ut tincidunt tortor posuere ullamcorper feugiat. Nulla sed mauris bibendum, vulputate diam ac, porta urna. Praesent tincidunt elit nulla, vel ultricies mauris iaculis ac. Etiam aliquet, turpis nec ullamcorper lobortis, dui orci lacinia metus, eu congue libero nisi ac mi. Nunc porta lorem mauris, ut ultricies diam tincidunt nec.'
// ,'assets/testImages/calorieCut.jpg'
// );

// INSERT INTO Articles (id, name, category, author, content, linkUrl)
// VALUES (2, 'Exercise Habits', 'Exercise', 'Dr Paul Roy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget neque iaculis ligula imperdiet pulvinar. Sed finibus eros at ex lobortis pharetra. Ut tincidunt tortor posuere ullamcorper feugiat. Nulla sed mauris bibendum, vulputate diam ac, porta urna. Praesent tincidunt elit nulla, vel ultricies mauris iaculis ac. Etiam aliquet, turpis nec ullamcorper lobortis, dui orci lacinia metus, eu congue libero nisi ac mi. Nunc porta lorem mauris, ut ultricies diam tincidunt nec.'
// ,'assets/testImages/exercise.jpg'
// );


// INSERT INTO Articles (id, name, category, author, content ,linkUrl)
// VALUES (3, 'Glucose Shaking habits', 'Glucose', 'Dr Melissa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget neque iaculis ligula imperdiet pulvinar. Sed finibus eros at ex lobortis pharetra. Ut tincidunt tortor posuere ullamcorper feugiat. Nulla sed mauris bibendum, vulputate diam ac, porta urna. Praesent tincidunt elit nulla, vel ultricies mauris iaculis ac. Etiam aliquet, turpis nec ullamcorper lobortis, dui orci lacinia metus, eu congue libero nisi ac mi. Nunc porta lorem mauris, ut ultricies diam tincidunt nec.'
// ,'assets/testImages/sugar.jpg'
// );

// INSERT INTO articles (id, name, category, author, content ,linkUrl)
// VALUES (4, 'Eat What you Burn', 'Calories', 'Dr MacLauren', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget neque iaculis ligula imperdiet pulvinar. Sed finibus eros at ex lobortis pharetra. Ut tincidunt tortor posuere ullamcorper feugiat. Nulla sed mauris bibendum, vulputate diam ac, porta urna. Praesent tincidunt elit nulla, vel ultricies mauris iaculis ac. Etiam aliquet, turpis nec ullamcorper lobortis, dui orci lacinia metus, eu congue libero nisi ac mi. Nunc porta lorem mauris, ut ultricies diam tincidunt nec.',
// 'assets/testImages/burnFats.jpg');