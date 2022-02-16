# Totally Rick and Morty Wiki
What up my glip-glops! This is an app for people who are obsessed with the Rick and Morty show and would like more information about the based characters and the different worlds Rick and morty have visited. They’ll be able to get schwifty and click on a specific character and get a summary of the character details and also be able to click on a location and get the locations details. Let get schwifty!!!!

# Technologies Used
React, Javascript, API



# Link to the API 
> https://rickandmortyapi.com/api

# Example data response you plan to use 
{
"info": {
"count": 826,
"pages": 42,
"next": "https://rickandmortyapi.com/api/character?page=2",
"prev": null
},
"results": [
{
"id": 1,
"name": "Rick Sanchez",
"status": "Alive",
"species": "Human",
"type": "",
"gender": "Male",
"origin": {
"name": "Earth (C-137)",
"url": "https://rickandmortyapi.com/api/location/1"
},
"location": {
"name": "Citadel of Ricks",
"url": "https://rickandmortyapi.com/api/location/3"
},
"image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
"episode": [
"https://rickandmortyapi.com/api/episode/1",
"https://rickandmortyapi.com/api/episode/2",
"https://rickandmortyapi.com/api/episode/3",
"https://rickandmortyapi.com/api/episode/4",
"https://rickandmortyapi.com/api/episode/5",
"https://rickandmortyapi.com/api/episode/6",
"https://rickandmortyapi.com/api/episode/7",
"https://rickandmortyapi.com/api/episode/8",
"https://rickandmortyapi.com/api/episode/9",
"https://rickandmortyapi.com/api/episode/10",
"https://rickandmortyapi.com/api/episode/11",
"https://rickandmortyapi.com/api/episode/12",
"https://rickandmortyapi.com/api/episode/13",
"https://rickandmortyapi.com/api/episode/14",
"https://rickandmortyapi.com/api/episode/15",
"https://rickandmortyapi.com/api/episode/16",
"https://rickandmortyapi.com/api/episode/17",
"https://rickandmortyapi.com/api/episode/18",
"https://rickandmortyapi.com/api/episode/19",
"https://rickandmortyapi.com/api/episode/20",
"https://rickandmortyapi.com/api/episode/21",
"https://rickandmortyapi.com/api/episode/22",
"https://rickandmortyapi.com/api/episode/23",
"https://rickandmortyapi.com/api/episode/24",
"https://rickandmortyapi.com/api/episode/25",
"https://rickandmortyapi.com/api/episode/26",
"https://rickandmortyapi.com/api/episode/27",
"https://rickandmortyapi.com/api/episode/28",
"https://rickandmortyapi.com/api/episode/29",
"https://rickandmortyapi.com/api/episode/30",
"https://rickandmortyapi.com/api/episode/31",
"https://rickandmortyapi.com/api/episode/32",
"https://rickandmortyapi.com/api/episode/33",
"https://rickandmortyapi.com/api/episode/34",
"https://rickandmortyapi.com/api/episode/35",
"https://rickandmortyapi.com/api/episode/36",
"https://rickandmortyapi.com/api/episode/37",
"https://rickandmortyapi.com/api/episode/38",
"https://rickandmortyapi.com/api/episode/39",
"https://rickandmortyapi.com/api/episode/40",
"https://rickandmortyapi.com/api/episode/41",
"https://rickandmortyapi.com/api/episode/42",
"https://rickandmortyapi.com/api/episode/43",
"https://rickandmortyapi.com/api/episode/44",
"https://rickandmortyapi.com/api/episode/45",
"https://rickandmortyapi.com/api/episode/46",
"https://rickandmortyapi.com/api/episode/47",
"https://rickandmortyapi.com/api/episode/48",
"https://rickandmortyapi.com/api/episode/49",
"https://rickandmortyapi.com/api/episode/50",
"https://rickandmortyapi.com/api/episode/51"



# Visual of your component hierarchy

![Screen Shot 2022-02-10 at 11 16 53 AM](https://user-images.githubusercontent.com/95322104/153500633-742d4651-675e-4dd6-a2dc-5ffbec750b95.png)




# Wire Frames

## Welcome Page!
<img width="1148" alt="Screen Shot 2022-02-10 at 11 58 52 AM" src="https://user-images.githubusercontent.com/95322104/153500698-eb8cd127-4fdb-471e-92d8-bfc25777dde4.png">

## Character's List

<img width="1025" alt="Screen Shot 2022-02-10 at 12 02 04 PM" src="https://user-images.githubusercontent.com/95322104/153500815-5a5665fe-eddd-4350-a00a-922b0501f576.png">

## Character's Detail

<img width="878" alt="Screen Shot 2022-02-10 at 12 06 11 PM" src="https://user-images.githubusercontent.com/95322104/153500883-5dd30805-2a68-4ecc-a27f-1805ac7278b8.png">

## Location Detail 

<img width="585" alt="Screen Shot 2022-02-10 at 3 43 10 PM" src="https://user-images.githubusercontent.com/95322104/153501490-54291d8f-a767-49ec-9187-f9039254eb13.png">

## Episode Detail
<img width="907" alt="Screen Shot 2022-02-10 at 12 10 08 PM" src="https://user-images.githubusercontent.com/95322104/153501725-1e960792-5fbf-43f7-a2b9-d1ffc8c2839c.png">


# User Stories
As a user, I want to be greeted by a Rick and Morty character on the welcome page and click a button to take me to the characters list.

As a user, I would like to click on an individual character to view additional details about it. Also be able to click a button to take me to the location's list page.

As a user, I would like to view the locations list and be able to click on the specific location and see their details. 

As a user, I want to be able to view the characters' last known location details and also the episode details. ←—- I consider this my stretch goal


## MVP Goals
Setting up my react app
getting my routes and pages running
making sure my fetch is calling my api

## Stretch Goals 

the Animation for the homepage
a button to take you to the specific characters last known location and their episode they came out on. 
also when on the location's details page to be able to see the list of residents
also a next page button that loads all the characters in the list and locations list

