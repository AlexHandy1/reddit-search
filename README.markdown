Summary
=================

* Single page Subreddit search application using Angular JS and Reddit API to pull in latest subreddit topics on given search
* Experimental app built in 1 day to explore full stack, MEAN JS

[Subreddit Search](https://powerful-harbor-9307.herokuapp.com/)

Prototype Use Cases:
-------

```
- [x] As a User,
      So that I can stay on top of the latest trends
      I want to be able to search for the latest subreddits

- [x] As an admin
      So that I can understand what people are searching
      I want to be able to store user searches in a database that can send to an API endpoint

```

How to run
----

* For web viewing, simply follow the link to the website hosted on heroku
* For local use, clone or fork the repo to your local machine
* Install node, npm and bower to run package manager which will provide dependencies (e.g. express) to allow you to view on your local host using the command 'npm start'


Technologies used
----

* Production - AngularJS, Javascript, CSS (using Bootstrap), HTML, Node, ExpressJS, MongoDB
* Testing - Karma, Jasmine

Further Use Cases
----

*  As a User,
   So that I don't see too many results,
   I only want to be able to see the top 10 latest subreddit topics

*  As a User,
   So that I understand why I don't get results for certain searches,
   I want to see an error message