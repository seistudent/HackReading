# HackReading

Welcome to HackReading! This is a productivity application, that helps you organise your notes and better leverage the power of reading to build knowledge. 

This app utilises Natural Language Processing Tools (summarization, translation), and adopts a crowd-sourced and community-curated approach (real-time collaborative editing). 

How it works!

1. Create a user account
2. Write a new note based on a book which you are reading
3. When you submit your completed note, we summarize your app and include this high level summary for ease of reference subsequently 
4. View other people's summaries, select a translated version if necessary
5. Add to other summaries in real-time if you are reading the same book

Technologies used

1. MERN Stack - MongoDB, Express, React, Node.js; React Hooks, Creat React App, React Router, React-Bootstrap
2. Socket.io for real time editing
3. Systran.io for translation (API)
4. Aylien API for entity extraction and text summarization (API)
5. Google Cloud Text-to-Speech (API)
6. Bootstrap for front-end formatting

To Do

1. Build landing page and about page
2. Build user sign up
3. Build note creation and translation feature
4. Build note viewing 
5. Build note editing, and translation, speech to text

Models required

1. User model: name, password, email, user_id
2. Note model: title, book, text, summary, creator, note_id
3. Join Table: user_id, note_id