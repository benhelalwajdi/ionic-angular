create Table if not exists developer(id integer primary key autoincrement , name text, skills text, img text);
    insert or ignore into developer value (1, 'simon', '', '');
    insert or ignore into developer value (2, 'simon', '', '');
    insert or ignore into developer value (3, 'simon', '', '');
    

create Table if not exists product (id integer primary key autoincrement, name text, creatorId integer);
    insert or ignore into product (id, name, creatorId) value (1,'IonicnAcademy', 1);
    insert or ignore into product (id, name, creatorId) value (2,'Software Startup Manual', 1);
    insert or ignore into product (id, name, creatorId) value (3,'Ionic Framework', 2);
    insert or ignore into product (id, name, creatorId) value (4,'Ionic Framework', 2);
    insert or ignore into product (id, name, creatorId) value (5,'Drifty Co', 3);
    insert or ignore into product (id, name, creatorId) value (6,'Ionicons', 1);