CREATE TABLE houses (
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage decimal,
    rent decimal
);

INSERT INTO houses (
    name,
    address,
    city,
    state,
    zip,
    img,
    mortgage,
    rent
) VALUES (
    'VandenBos Home',
    '411 S. 60 W.',
    'Orem',
    'UT',
    84058,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp1oj0OFRgrJkz-niTkQk-nYsYvegdDmHfuaUFomero3mUVT2CEw',
    1200.58,
    500.00
);

ALTER TABLE houses 
ADD COLUMN img text,
ADD COLUMN mortgage decimal,
ADD COLUMN rent decimal;