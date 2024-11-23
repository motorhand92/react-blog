# react-blog

This is a tech blog site of mine which is written with mostly lorem ipsum for tryout.

Includes:

- Homepage : A warm welcome with my avatar. Also a lorem ipsum biograpy. Beneath it, there is the last article which written is located and this article is constantly changing when you are adding a new article. You can go to the articles by clicking them. Also you can see how many likes and how many comments are there for that article and you can like that article directly in there.
- About Page : My avatar and some lorem ipsum detailed biography.
- Articles List Page : A page which contains all articles listed. The articles are listed from newest to oldest. On the left, there is an informative image, on the right, title and article summary which is limited as 150 characters. You can go to the articles with clicking on them.
- Sign In Page : User sign in page. You can sign in your username and password. Your username and password will be compared with the values on the database and system will let you enter to the system if they are matching. User is directed with alerts for correct fillings constantly.
  If there is not a username that user owns, user can be directed to the sign up page with the "sign up" button
  When the user signed in, there will "Hello <User>" writing in the right side of the navigation bar and sign in button will be turned to "sign out" button. If user wishes, he/she can sign out with this button. Also "Account" button will be added to the navigation bar for navigating to the "Account Page".
- Sign Up Page : User can be signed up in this page. User can select username, password, avatar url for their account and when they hit "Sign Up" and "Ok" in alert, these values will be added inside the database for comparing. And then user can be signed in with their username and password inside "Sign In Page"
- Article Page : These pages contain article informains. In detail:
  1. An informative image
  2. Article
  3. Author information
  4. Comment quantity
  5. Like quantity
  6. Comment Input
  7. Comments sent before
     User can do the followings
  8. Read article
  9. Like the article by hitting the heart icon on the bottom of the article. Like quantity will be increased by one and heart icon will be red.
  10. Send comment by writing the comment inside the input section and hitting the send button. User's comment will be added into the old sent comments.
- Account Page: User can change their account setting in that page and this page can be navigated from navigation bar. Users saved to the database have titles. These title are decleared as "admin", "moderator" and "user". With sign up function, there can be only a "user" added. With respect to the titles, "Change Password", "Update Bio" and "Add Article" sections will appear. If User is "admin" or "moderator", all sections will appear. If user is "user" only "Change Password" will appear.

  - For test, a user is created by me, you can just use it as and admin.

    - username: admin
    - password: password

  - Change Password : This section works for the current user update his/her password.
  - Update Bio : This section works for updating summary bio on homepage.
  - Add Article : For this section, you need to fill up all the sections.
    1. Title: This is your article's title
    2. Content: This section contains 10 paragraphs. Split your article to paragraphs and write each paragraph to each paragraph section.
    3. Image Url: This is your article's image's online url. If you hit update you can check it on top like it will be shown on website.
    4. Article Id: This is an id which tells something about the article and at the same time contains all lower case without spaces.
       If you hit add, an alert will come which says "are you sure?".If you say "Yes", this article will be added to the database and will be reachible from the articles list page.
  - Footer : This contains connection links.

  Technology:

  1. Frontend

  - React.js: For most of the variable statement controls, i used useState and useEffect. But for authentication as an helper all around the webapp, i used redux.
  - Axios: Used it for connecting frontend and backend. Sent requests from frontend to backend with axios.

  2. Backend :

  - Node.js, Express.js : I used nodemon for debugging. Created an express.js server and wrote endpoints for commanding the database.
  - MongoDB : I used MongoDB as cloud database. I write and read all the datas from that databases.

# project setup

git clone or code download.zip

# project start

cd react-blog/back-end -> npm run dev -> http://localhost:8000
