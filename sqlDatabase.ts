import * as SQLite from 'expo-sqlite';



export const db = SQLite.openDatabaseSync('myData.db');



export async function createTables(){
await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS articles (id INTEGER PRIMARY KEY NOT NULL,name TEXT NOT NULL,category TEXT NOT NULL,author TEXT NOT NULL,content TEXT NOT NULL);

INSERT OR IGNORE INTO articles (id, name, category, author, content)
VALUES (1, 'Tips to cut calories', 'Calorie', 'Dr Johnny Sins', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget neque iaculis ligula imperdiet pulvinar. Sed finibus eros at ex lobortis pharetra. Ut tincidunt tortor posuere ullamcorper feugiat. Nulla sed mauris bibendum, vulputate diam ac, porta urna. Praesent tincidunt elit nulla, vel ultricies mauris iaculis ac. Etiam aliquet, turpis nec ullamcorper lobortis, dui orci lacinia metus, eu congue libero nisi ac mi. Nunc porta lorem mauris, ut ultricies diam tincidunt nec.');

INSERT OR IGNORE INTO articles (id, name, category, author, content)
VALUES (2, 'Exercise Habits', 'Exercise', 'Dr Paul Roy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget neque iaculis ligula imperdiet pulvinar. Sed finibus eros at ex lobortis pharetra. Ut tincidunt tortor posuere ullamcorper feugiat. Nulla sed mauris bibendum, vulputate diam ac, porta urna. Praesent tincidunt elit nulla, vel ultricies mauris iaculis ac. Etiam aliquet, turpis nec ullamcorper lobortis, dui orci lacinia metus, eu congue libero nisi ac mi. Nunc porta lorem mauris, ut ultricies diam tincidunt nec.');


INSERT OR IGNORE INTO articles (id, name, category, author, content)
VALUES (3, 'Glucose Shaking habits', 'Glucose', 'Dr Melissa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget neque iaculis ligula imperdiet pulvinar. Sed finibus eros at ex lobortis pharetra. Ut tincidunt tortor posuere ullamcorper feugiat. Nulla sed mauris bibendum, vulputate diam ac, porta urna. Praesent tincidunt elit nulla, vel ultricies mauris iaculis ac. Etiam aliquet, turpis nec ullamcorper lobortis, dui orci lacinia metus, eu congue libero nisi ac mi. Nunc porta lorem mauris, ut ultricies diam tincidunt nec.');

INSERT OR IGNORE INTO articles (id, name, category, author, content)
VALUES (4, 'Eat What you Burn', 'Calories', 'Dr MacLauren', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget neque iaculis ligula imperdiet pulvinar. Sed finibus eros at ex lobortis pharetra. Ut tincidunt tortor posuere ullamcorper feugiat. Nulla sed mauris bibendum, vulputate diam ac, porta urna. Praesent tincidunt elit nulla, vel ultricies mauris iaculis ac. Etiam aliquet, turpis nec ullamcorper lobortis, dui orci lacinia metus, eu congue libero nisi ac mi. Nunc porta lorem mauris, ut ultricies diam tincidunt nec.');



`);
};


export async function createCaloriesLog(){
    await db.execAsync(`
        PRAGMA journal_mode = WAL;
    
    CREATE TABLE IF NOT EXISTS CaloriesIntake (
    id INTEGER PRIMARY KEY NOT NULL,
    itemDescription TEXT,
    itemSubheading TEXT,
    editable BOOLEAN,
    operation TEXT);
    
    INSERT OR IGNORE INTO CaloriesIntake (id,itemDescription, itemSubheading, editable, operation)
    VALUES(1,'Nasi Lemak','364 kcal/serving',1,'minus');  

    INSERT OR IGNORE INTO CaloriesIntake (itemDescription, itemSubheading, editable, operation)
    VALUES(2,'Coke','150 kcal/serving',1,'minus');  

    `);
    };


    export async function createCaloriesOptions(){
        await db.execAsync(`
            PRAGMA journal_mode = WAL;
        
        CREATE TABLE IF NOT EXISTS CaloriesOptions (
        id INTEGER PRIMARY KEY NOT NULL,
        itemDescription TEXT,
        itemSubheading TEXT,
        editable BOOLEAN,
        operation TEXT);
        
        INSERT OR IGNORE INTO CaloriesOptions (id,itemDescription, itemSubheading, editable, operation)
        VALUES(1,'Apple Pie','300 kcal/serving',1,'plus');  
    
        INSERT OR IGNORE INTO CaloriesOptions (id,itemDescription, itemSubheading, editable, operation)
        VALUES(2,'Burrito','450 kcal/serving',1,'plus');  

        INSERT OR IGNORE INTO CaloriesOptions (id,itemDescription, itemSubheading, editable, operation)
        VALUES(3,'Coke','150 kcal/serving',1,'plus');  
    
        INSERT OR IGNORE INTO CaloriesOptions (id,itemDescription, itemSubheading, editable, operation)
        VALUES(4,'Dumplings','200 kcal/serving',1,'plus');  

        INSERT OR IGNORE INTO CaloriesOptions (id,itemDescription, itemSubheading, editable, operation)
        VALUES(5,'Eggplant Parmesan','350 kcal/serving',1,'plus');  

        INSERT OR IGNORE INTO CaloriesOptions (id,itemDescription, itemSubheading, editable, operation)
        VALUES(6,'Fettuccine Alfredo','600 kcal/serving',1,'plus');  


        `);
        };