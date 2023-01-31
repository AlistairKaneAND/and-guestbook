export const fetchGuestbookEntries = async () => {
  return fetch("http://localhost:3000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query AllMessages{
              allMessages {
                  name,
                    link,
                    timestamp,
                    message
              }
          }
            `,
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    });
};

export const postNewGuestbookEntry = async ({
  name,
  link,
  message,
  timestamp,
}) => {
  return fetch("http://localhost:3000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      mutation CreateMessage($name: String!, $link: String!, $message: String!, $timestamp: String!){
		    createMessage(name: $name, link: $link, message: $message, timestamp: $timestamp) {
            name,
            link,
            timestamp,
            message
        }
      }
      `,
      variables: {
        name,
        link,
        message,
        timestamp,
      },
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    });
};
