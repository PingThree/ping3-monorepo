import { defaultPostMswHandlers } from './handlers/rest-handlers'

/*
  Must be a function (not a plain const )to avoid circular import problems
*/
export const getDefaultMswHandlers = () => [...defaultPostMswHandlers]
