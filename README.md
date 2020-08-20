# Unit 11 Express Homework: Note Taker

## Description

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Key Features
* GET /api/notes -reads the notes.json file and return all saved notes as JSON.

* POST /api/notes - receives new note to save on the request body, add it to the notes.json file, and then returns the new note to the client.

* DELETE /api/notes/:id - based on the query parameter passed i.e. id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the notes.json file.

## Acceptance Criteria

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.

## Built With 
* Node 
* Express Server
* Javascript / JQuery / JSON 
* HTML 
* CSS / Bootstrap 

## Deployed App link
https://kishmishs-notakerapp.herokuapp.com/

## gif Demo
https://github.com/kerishma/Note-Taker-App/blob/master/Note%20Taker.gif

## Owner
kerishma 
