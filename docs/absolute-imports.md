## This project uses abosolute imports!

How did I do this ?

Create `jsconfig.json` and copy an paste what is in the React Docs: see here: https://create-react-app.dev/docs/importing-a-component/#absolute-imports

And in TS ?

(So deleted the jsconfig.json obvs)
https://stackoverflow.com/questions/55916731/using-absolute-paths-in-typescript-for-imports

{
"compilerOptions": {
"baseUrl": "./",
"paths": {
"src/_": [
"./src/_"
],
}
}
}
