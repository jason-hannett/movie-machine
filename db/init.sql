create table users2(
    user_id serial primary key,
    username varchar(100),
    password varchar(200),
    image text,
    movie_category_1 varchar(20),
    movie_category_2 varchar(20),
    movie_category_3 varchar(20)
);


create table movie_user_likes(
    user_id int references users2(user_id),
    movie_id int
)