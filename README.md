# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

sPonto API

This API is a easy way to control your business.

routes:

/login(POST)
	this endpoint will login the user and get the token to access the due place.
/registredTime(GET)
	return the list of registredTimes(if you are NOT ADM, you are denied to access this area).
/registredTime(POST)
	insert into database all data about registredTime(Only FUNC are fit to access this area).
/users(GET)
	return all users
/users(POST)
	insert into database the new user.
/users/:id(DELETE)
	delete user from database, passing the id as parameter.

All endpoints are authenticated using JWT. For first use, you can run a migrate insertRootUser, this migrate will add into database
the ADM user. I suggest to you delete it after insert a new user.
	
