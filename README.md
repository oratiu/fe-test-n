# Nuant FE Test

This project uses vite react-ts template which provides a minimal setup to get React working in Vite with ESLint rules.

It's been configured with Tailwindcss in case you want to use it Pokenode to retrieve the data of Pokemons

- [Pokenode](https://pokenode-ts.vercel.app/) (hint for the pokenode usage https://pokenode-ts.vercel.app/clients/pokemon-client)
- [Tailwind](https://tailwindcss.com/)

The purpose of the test is to implement an app that have the ability of :

- Search for Pokemon by `name` and the posibility to filter the results by `type`
  (User can search by name, user can filter pokemons by type, user can do both at the same time also)
- Display the search results with enough detail to be able to identify to which Pokemon each result belongs.(Name and a image would do)
- View more information about the Pokemon on a dedicated page by clicking a search result. (You can display Name, different sprites, weight, height and basic information, dealing with linked entities will be bonus point but arent really mandatory).
- See the previous search results when navigating back to the search page from the pokemon details page.

So basically something like:
![Screenshot](screenshot.png)

Feel free to take any liberties with the design, and to use any library or tool you feel will help you accomplish the task.

### Submitting

To submit your finished project, share with us a link to a GitHub repository containing its code. Along with instructions on how to run the app, include answers to the following:

- What part of building the project was the most difficult? Why?
  It's hard picking something that would be called "most difficult" since the task was not hard but, I'd say working with the API via the provided client (I also checked the API builders documentation directly), I could have used the beta GraphQL API but I wanted to stick to the provided client even though tha latter would have made my life a tad bit easier (not having to make a different api call for the list of pokemons, for the list of pokemons by type). Not going the GraphQL route also meant that I would have to chain requests to get additional details about each pokemon in the list (such as the image/ sprite ), which I'm not particularly a fan of.

- If you had to filter the list of Pokemons by its `type` how would you have implemented it?
  Well I did have to do that :D, and given the circumstances I've picked classically filtering it on the FE the following way:
  1. I saw that listType returns a list of pokemons of that type.
  2. Got the list of "all pokemons/ searched pokemons" and got the list of "pokemons of that type"
  3. Filtered the list of "all pokemons/ searched pokemons" by the list of "pokemons of that type"
  4. Displayed the filtered list of pokemons
     Now in an ideal world I would have the "all pokemons" list include the pokemon type for each pokemon in the list, and just filter on that one without making an extra call.
