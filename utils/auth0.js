// import { initAuth0 } from "@auth0/nextjs-auth0";

// export default initAuth0({
//   authorizationParams: {
//     scope: "openid profile",
//   },
// });

export const isAuthorized = (user) => {
 
  return user ? user.email === "1204165274@qq.com" : false;
};
