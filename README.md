# To Do App

## Author: Josh Hahn

### Lab 31

Implement the React context API for defining settings across the entire application.

- Create React Context for managing application display settings and provide this at the application level.
- Add the following defaults to the context provider’s state, they will not be changeable in this lab. - Display three items. - Hide completed items using a boolean. - Define “difficulty” as a default sort word to optionally use in the stretch goal.
  Consume and utilize context values throughout your components.
- Show a maximum of three items per screen by default in the `<List />` component.
- Use the Mantine (or MUI) `<Pagination />` component to allow users to navigate a list of items.
- Hide completed items in the list by default (the ability to show will be added in a later lab)

### Lab 32

Implement the Context API to make some basic application settings available to components.

- How many To Do Items to show at once.
- Whether or not to show completed items.
  Hint: if reusing the custom useForm() hook, event validation may be necessary if using any Mantine component other than `<TextInput />`.

Provide the users with a form where they can change the values for those settings.

- This should be given in the form of a new component, perhaps linked to from the main navigation.
  Hint: Use Browser Router to create the page/route/component for this.
  Once settings are updated, render the updated settings to the right of the “form”. Consider using `<Grid />`, `<Card />`, and `<When />` components.
