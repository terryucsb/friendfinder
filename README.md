<snippet>
  <content><![CDATA[
# ${1:Friend Finder - GoT Version}
TODO: In this activity, I built a compatibility-based "FriendFinder" application -- basically a mathcing app. This full-stack site takes in results from my users' surveys, then compares their answers with the pre-registed characters. The app displays the name and picture of the user with the best overall match.
TODO: Describe the installation process

## Usage
TODO: I used Express to handle routing. I also deployed my app to Heroku so other users can fill it out.

## Instruction from Omar:
1)Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
2)Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
3)Your htmlRoutes.js file should include two routes:
--A GET Route to /survey which should display the survey page.
--A default, catch-all route that leads to home.html which displays the home page.
4) Your apiRoutes.js file should contain two routes:
--A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
--A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
5)You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

## Difficulties
  - [ ] It was my first time deploying on Heroku so it was super hard, I tried to see youtube videos and tutorials but could not really understand gemfiles.
  - [ ] For some reason I keep getting error for node server.js on terminal. i even tried to remove node_modules than redownloaded, also tried repatching and looking for missing dependencies, but still had error. I am not sure if its something with my server.js files or routing issue
  - [ ] because I could not run node and see on web I could not really test my app fully. 
]]></content>
  <tabTrigger>readme</tabTrigger>
</snippet>