import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookId: String!, $authors: [String], $title: String!, $description: String, $image: String) {
        saveBook(bookId: $bookId, authors: $authors, title: $title, description: $description, image: $image) {
            _id
            username
            savedBooks {
                bookId
                title
                authors
                description
                image
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
            username
            savedBooks {
                bookId
                title
                authors
                description
                image
            }
        }
    }
`;