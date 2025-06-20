import { createContext } from "react";
const UserNameContext =createContext(
    {
loggedInUser : "Default User"
}
)


export default UserNameContext;