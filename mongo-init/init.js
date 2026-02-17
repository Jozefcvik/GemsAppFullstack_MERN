// mongo-init/init.js
db = db.getSiblingDB('mern');

// Drop existing collections if exist
db.users.drop();
db.gems.drop();

// Insert users
db.users.insertMany([
  {
    _id: ObjectId('67f573718d4f5a3a9f0a809f'),
    name: 'user01',
    email: 'user01@my.com',
    password: '$2b$12$iM4T/37BNqHgqp/WXAhwpObM6cwRuDBdlWcYlrcGgvM/FZ8X.ZYoa',
    __v: 0
  },
  {
    _id: ObjectId('67f573808d4f5a3a9f0a80a4'),
    name: 'user02',
    email: 'user02@my.com',
    password: '$2b$12$O9sIWXrtMyGU.2Sdd0CQqO/k/UO6EjgeJgKgkVtf8A0gnUSUN2/le',
    __v: 0
  },
  {
    _id: ObjectId('67f5738a8d4f5a3a9f0a80a9'),
    name: 'user03',
    email: 'user03@my.com',
    password: '$2b$12$ft3Jfgp/q7yOEpdHrD/ZouTGFe5F6zx7mrPdTc4QMUVScPWeYgngW',
    __v: 0
  }
]);

// Insert gems
db.gems.insertMany([
  { _id: ObjectId('67f55f6949d5902bc7c82438'), title: 'Moonstone', origin: 'India', reserved: false, __v: 0 },
  { _id: ObjectId('67f55f6949d5902bc7c82437'), title: 'Tourmaline', origin: 'Tanzania', reserved: true, __v: 0 },
  { _id: ObjectId('67f55f6949d5902bc7c8243b'), title: 'Pyrope', origin: 'Botswana', reserved: false, __v: 0 },
  { _id: ObjectId('67f55f6949d5902bc7c8243c'), title: 'Aquamarine', origin: 'Africa', reserved: true, __v: 0 },
  { _id: ObjectId('67f55f6949d5902bc7c8243d'), title: 'Chalcedony', origin: 'Malawi', reserved: false, __v: 0 },
  { _id: ObjectId('67f55f6949d5902bc7c8243e'), title: 'Citrine', origin: 'Brazil', reserved: false, __v: 0 },
  { _id: ObjectId('67f55f6949d5902bc7c82439'), title: 'Amethyst', origin: 'Namibia', reserved: true, __v: 0 },
  { _id: ObjectId('67f55f6949d5902bc7c8243a'), title: 'Hematite', origin: 'Mexico', reserved: false, __v: 0 },
  { _id: ObjectId('67f55f6949d5902bc7c82441'), title: 'Moonstone', origin: 'Sri Lanka', reserved: false, __v: 0 },
  { _id: ObjectId('67f55f6949d5902bc7c82442'), title: 'Emerald', origin: 'Africa', reserved: true, __v: 0 },
  { _id: ObjectId('67f55f6949d5902bc7c82443'), title: 'Opal', origin: 'Brazil', reserved: false, __v: 0 },
  { _id: ObjectId('67f55f6949d5902bc7c82444'), title: 'Amber', origin: 'Mexico', reserved: true, __v: 0 },
  { _id: ObjectId('67f55f6949d5902bc7c8243f'), title: 'Onyx', origin: 'Germany', reserved: false, __v: 0 },
  { _id: ObjectId('67f55f6949d5902bc7c82440'), title: 'Aquamarine', origin: 'India', reserved: false, __v: 0 }
]);
