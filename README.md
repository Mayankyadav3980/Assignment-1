
# DB and REST API for User-Events

This Project has been built using node, express.js, mongoose and MongoDB. 
We can add user details, event details for that user and all that information will be stored in the local MongoDB Database. 


Dependencies used in this project are:
```bash
  {
    
    "express": "^4.17.2",
    "mongoose": "^6.1.6",
    
  }
```

## Documentation

[API-Documentation](https://documenter.getpostman.com/view/11952296/UVXnGZZF)


## Deployment

To deploy this project you need to have node, MongoDB installed in your local machine.

Then you need to install its dependencies, you can do so by, changing directory to current folder and running

```bash
  npm install
```
To start the app.js file, run

```bash
  node app.js
```

After this your server will start at port 5000.
And also Make sure your MongoDB server is also running at the back.

Now you can go to:

(Can use Postman for this)
```bash
 http://localhost:5000/users
```
and enter the details of users. 

To enter the event details you can go to:
```bash
 http://localhost:5000/events
```
and enter the details of events of the users. 


## Screenshots of Postman and Mongodb Database

![userPostman Screenshot](https://github.com/Mayankyadav3980/Avtaar/blob/assign2/userPostman.png)


![userDB Screenshot](https://github.com/Mayankyadav3980/Avtaar/blob/assign2/userDB.png)
![](https://github.com/Mayankyadav3980/Avtaar/blob/assign2/eventPostman.png)
![](https://github.com/Mayankyadav3980/Avtaar/blob/assign2/eventDB.png)


## Tech Stack and Tools

**For API Testing:** Postman

**Server:** Node, Express, Mongoose

