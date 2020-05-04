insert into users2 (
    username,
    password,
    image
) values (
    ${username},
    ${password},
    ${image}
)
returning user_id, username, image;