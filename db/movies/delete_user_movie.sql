delete from movie_user_likes
where user_id = $1
and movie_id = $2;
select * from movie_user_likes
where user_id = $1;