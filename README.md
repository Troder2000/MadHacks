# MadHacks project- FutureGram
#
#FutureGram is a web application designed as a time capsule for images. Users can upload images and set a time delay before the image becomes visible on the platform, creating a "time capsule" effect.

#Features-
User Authentication: Login and logout functionality using Firebase Authentication.
Post Creation: Users can create posts with image uploads and set a delay in minutes before the image is visible.
Time-Delayed Display: Posts appear with a countdown until they’re viewable.

#Tech Stacks used-
Frontend: React, CSS
Backend: Firebase Firestore (for data storage), Firebase Authentication

#Usage-
Login: Users can sign in using email and password or simply via google.
Create Post:
Navigate to the "Add Post" page.
Upload an image and specify the delay (in minutes) before it becomes visible.
View Post:
Once the delay has passed, the post appears on the homepage.
If the delay hasn’t passed, the post will show a countdown until visibility.


#To start, navigate into the futuregram directory and in terminal enter the command "npm start"
#Before running the code, if you face any error, you might have to install some npm components. Navigate into the futuregram directory and put the following command in #terminal-
npm install react react-dom react-router-dom firebase react-datepicker react-time-picker 

#
With FutureGram, you're not just sharing a moment; you're creating memories that wait for the perfect time to unfold. Let's make each day a little more magical, one time capsule at a time.
#
#