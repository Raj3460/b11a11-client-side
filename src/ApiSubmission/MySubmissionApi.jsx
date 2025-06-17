 export const MySubmissionApi = (email , accessToken) => {
 return fetch(`https://studymate-server.vercel.app/submissions?email=${email}` , {
  headers:{
    authorization : `Bearer ${accessToken}`
  }
 }).then(
    (res) => res.json()
  );
};