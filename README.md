# React + TypeScript + Vite

## About this webapp

It is dashboard that allows the user, the mentor,  to manage and to edit or remove  the information about the mentees.


## Features

- React
- Typescript
- vite
- zod
- reactHookForm
- TailwindMerge.

## Topics

- DataType:

      Creation of types for the data that i receive from the Rest API and the Global types used in the application.

- Custom Hook
- Reusable Components
- Tailwind(talwind merge)
- Context Provider
- Derived State
- Form Handling(ReactHookForm), Zod
- Reusable Modal Form to Add/edit new Mentees
- Front End CRUD for Mentes.
- Layout Driven by CSS/Grid.
- Conditional components
- Manage of Global State with **Context API** (MenteeContext,SearchContext) + Creation of Custom hooks to use the context.
- Use of React core Hooks:
  - `useState()`,
  - `useEffect()`,
  - `useContext()`,
  - `useRef()`,
- Use Of Custom Hooks:
  - `useFecth()` : 

     Custom Hook that allows you to fecth an API and manage the promise with errors Handlings.
  - `useMenteeContext()`,`useSearchContext` :

     Custom Hook that allows you to use a context without using using the `useContext(myContext)` with errors Handlings in case we use the context outside his contextProvider.

- Skeleton (manage the loading of components).



