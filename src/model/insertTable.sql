CREATE TABLE categories(
    category_id bigserial PRIMARY KEY,
    category_name varchar(75)
);
INSERT INTO categories(category_name) VALUES('Fast Food');
INSERT INTO categories(category_name) VALUES('Milliy taomlar');


CREATE TABLE sub_categories(
    subcategory_id serial PRIMARY KEY,
    subcategory_name VARCHAR(64),
    category_id int ,
      FOREIGN KEY (category_id)
        REFERENCES categories(category_id)
        ON DELETE CASCADE
);

CREATE TABLE products(
    product_id serial PRIMARY KEY,
    product_name VARCHAR(64),
    product_price VARCHAR(64),
    product_img TEXT,
    subcategory_id int,
      FOREIGN KEY (subcategory_id)
        REFERENCES sub_categories(subcategory_id)
        ON DELETE CASCADE
);








INSERT INTO products(product_name,product_price,product_img,subcategory_id)VALUES('Osh','30000','https://sokin.moy.su/_ph/194/331473955.jpg',2);

INSERT INTO products(product_name,product_price,product_img,subcategory_id)VALUES('Kabob','12000','https://silkroadrecipes.com/wp-content/uploads/2020/07/Kabab-Koobideh-Beef-and-Lamb-Kabobs-square.jpg',2);

INSERT INTO products(product_name,product_price,product_img,subcategory_id)VALUES('Mastava','18000','https://e2.edimdoma.ru/data/recipes/0011/7037/117037-ed4_wide.jpg?1628777183',2);

INSERT INTO products(product_name,product_price,product_img,subcategory_id)VALUES('Qozon Kabob','35000','https://makepedia.uz/wp-content/uploads/2018/04/qozon-kabob.jpg',2);

INSERT INTO products(product_name,product_price,product_img,subcategory_id)VALUES('Lavash','20000','https://e2.edimdoma.ru/data/recipes/0012/9994/129994-ed4_wide.jpg?1628769120',1);

INSERT INTO products(product_name,product_price,product_img,subcategory_id)VALUES('Hod dog','20000','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-202104-airfryerhotdogs-044-1619472270.jpg',1);

INSERT INTO products(product_name,product_price,product_img,subcategory_id)VALUES('Coca Cola','10000','https://1119001045.rsc.cdn77.org/wa-data/public/shop/products/80/30/3080/images/2250/Gazirovannyy_Napitok_Coca-Cola_15_l.650@2x.jpg',1);



CREATE TABLE orders(
  order_id bigserial PRIMARY KEY,
  order_products text,
  order_data text,
  order_time text
);


