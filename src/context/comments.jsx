import { createContext, useState } from "react";

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {

  const [comments, setComments] = useState([]);
  const fetchComments = async () => {

    const myPromise= new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: "first comment",
            description: "first comment description",
          },
          {
            id: 2,
            name: "second comment",
            description: "second comment description",
          },
          {
            id: 3,
            name: "third comment",
            description: "third comment description",
          },
        ]);
      }, 1000);
    });
    const comments = await myPromise;
    setComments(comments);
}
  return (
    <CommentsContext.Provider value={{ comments, fetchComments }}>
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;