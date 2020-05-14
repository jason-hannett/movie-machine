insert into users2 (
    username,
    password,
    image,
    movie_category_1,
    movie_category_2,
    movie_category_3
) values (
    ${username},
    ${password},
    ${image},
    ${movie_category_1},
    ${movie_category_2},
    ${movie_category_3}
)
returning user_id, username, image;