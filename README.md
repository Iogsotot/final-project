# Pokehunt

## What is implemented:

- [x] Pagination - "Load more"
- [x] Navigation (menu in header).
- [x] Redux Saga (state management + middleware)
- [x] Main page with cards and pokemon catching mechanism
- [x] Pokemon's page with info.
- [x] Caught Pokemons. A separate collection has been created for them in the database (and a separate collection for users too, the original collection does not change)
- [x] Adaptive interface based on figma layout
- [x] Application presentation layers are separated from business logic
- [x] Browser support: latest versions of modern browsers
- [x] Custom webpack


## Getting start

1) choose master branch
2) ```git clone git@github.com:Iogsotot/final-project.git```
3) ```cd final-project/frontend```
4) ```npm install```
5) open second terminal (final-project/frontend)
6) ```npm install -g json-server```
7) ```json-server --watch db.json --port 7001```
8) open first terminal
9) open browser console and run command `localStorage.clear()`
10) ```npm run start```

![pokehunt](https://user-images.githubusercontent.com/50149163/118471364-5b0efa00-b710-11eb-899c-2087d13736d4.png)
