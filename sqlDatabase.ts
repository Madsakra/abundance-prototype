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
    foodName TEXT,
    calories INTEGER,
    unitMeasurement TEXT,
    timeConsumed TEXT
    );
    
    INSERT OR IGNORE INTO CaloriesIntake (id,foodName,calories, unitMeasurement, timeConsumed)
    VALUES(1,'Nasi Lemak',300,'Kcal','Breakfast');  

    INSERT OR IGNORE INTO CaloriesIntake (id,foodName,calories, unitMeasurement, timeConsumed)
    VALUES(2,'Coke',150,'Kcal','Breakfast');  

    

    `);
    };



    

    export async function createCaloriesOptions(){
        await db.execAsync(`
            PRAGMA journal_mode = WAL;
        
        CREATE TABLE IF NOT EXISTS FoodOptions (
        id INTEGER PRIMARY KEY NOT NULL,
        foodName TEXT,
        calories INTEGER,
        unitMeasurement TEXT,
        carbs INTEGER,
        fats INTEGER,
        protein INTEGER);
        
        INSERT OR IGNORE INTO FoodOptions (id,foodName,calories,unitMeasurement,carbs,fats,protein)
        VALUES(1,'Apple Pie',300,'Kcal',20,30,40);  
    
        INSERT OR IGNORE INTO FoodOptions (id,foodName,calories,unitMeasurement,carbs,fats,protein)
        VALUES(2,'Burrito',450,'Kcal',20,30,50);  

        INSERT OR IGNORE INTO FoodOptions (id,foodName,calories,unitMeasurement,carbs,fats,protein)
        VALUES(3,'Coke',150,'Kcal',30,20,10);  
    
        INSERT OR IGNORE INTO FoodOptions(id,foodName,calories,unitMeasurement,carbs,fats,protein)
        VALUES(4,'Dumplings',200,'Kcal',20,20,20);  

        INSERT OR IGNORE INTO FoodOptions(id,foodName,calories,unitMeasurement,carbs,fats,protein)
        VALUES(5,'Eggplant Parmesan',350,'Kcal',20,40,40);  

        INSERT OR IGNORE INTO FoodOptions(id,foodName,calories,unitMeasurement,carbs,fats,protein)
        VALUES(6,'Fettuccine Alfredo',600,'Kcal',50,50,40);  


        `);
        };




export async function createCaloriesOutput(){
            await db.execAsync(`
                PRAGMA journal_mode = WAL;
            
            CREATE TABLE IF NOT EXISTS CaloriesOutput(
            id INTEGER PRIMARY KEY NOT NULL,
            foodName TEXT,
            calories INTEGER,
            unitMeasurement TEXT,
            timeConsumed TEXT
            );
            
            INSERT OR IGNORE INTO CaloriesOutput (id,foodName,calories, unitMeasurement, timeConsumed)
            VALUES(1,'Walking',125,'Kcal','Breakfast');  
        
            INSERT OR IGNORE INTO CaloriesOutput (id,foodName,calories, unitMeasurement, timeConsumed)
            VALUES(2,'Jogging',170,'Kcal','Breakfast');  
        
            
        
            `);
            };
        