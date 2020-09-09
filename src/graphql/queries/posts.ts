import { gql } from "@apollo/client";

export const Posts = gql`
    query posts {
        posts {
            data {
                title
                body
            }
        }
    }
`;
