# mentor-capstone
https://mentor.ws/

A Codeup Capstone project created using Java, Springboot, Hibernate, JPA, Thymleaf, Jquery, Custom CSS, JavaScript, and FileStack API

Mentor helps connect adult mentees and mentors together to build connections based on skills. A mentee can search for a mentor by name, location and field of interest. A mentee messages a mentor in a select skill to learn from them from a range of interests from fitness, music, automotive, and more. Mentees and mentors can exchange messages with multiple users, add favorite individuals to their contact list, provide ratings for their interactions, and join in conversation with Mentor's post feature.

##Running the project (IntelliJ)
Clone the repository to your local machine

Rename or make a copy of the example.properties file in src>main>resources and name it application.properties. Make sure to replace the username and password in the file with the username and password you want to use for the database user on your local machine. Also you need to sign up for [Filestack API](https://www.filestack.com/) and insert your API key into the application.properties. The database should be set up and created automatically by Spring.

IntelliJ should automatically pickup that this is a Spring Boot application and allow you to start the backend, which runs at localhost:8080, from the configurations menu.


##Final database design

<img width="871" src="https://cdn.discordapp.com/attachments/599456130917203978/681539640439734283/Screen_Shot_2020-02-24_at_10.25.45_AM.png">

##TODO's

1. Splash page 
    - SIGN UP || SIGN IN
    - Random Quote
    - Random BG Picture
    - Must Login
2. Registration page(s)
    - Path choice: Mentee OR Mentor
    - Form fields (Required): 
    - Upload profile picture (Using Filestack API)
    - Short bio textarea
    - Areas of need(Mentee), Areas of Knowledge(Mentor)
    - Accept terms and conditions (age)
3. Home Page
    - Navigation bar
    - Forum area upon logging in
4. Profile page(s)
    - Dynamic nav
    - Body
    - Logo [left] > Search bar [center] > Location/MSGing/Profile icons [right]
    - Profile pic > name > role > rating > message feature
    - Location > bio > areas of (Knowledge OR Need) field
    - Reviews
5. Search Bar returns
    - Similar navbar structure
    - Search return 
    - Search filtered by mentee OR mentor
6. Messaging page
    - Center area dominated by messaging app/api/etc.
    - Contact list
