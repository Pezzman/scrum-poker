import React, { ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import io from 'socket.io-client';

const Title = styled.h1`
    text-align: center;
`;

const StyledForm = styled.form`
    width: 20rem;
    margin: auto;
`;

const StyledUnorderedList = styled.ul`
    padding: 0;
    list-style-type: none;
`;

const StyledListItem = styled.li`
    margin: 1rem;
`;

const StyledLabel = styled.label`
    display: block;
`;

const StyledInput = styled.input`
    display: block;
    padding: 0.3rem 0.5rem;
    font-size: 20px;
    height: 2.5rem;
    width: 100%;
`;

const StyledButton = styled.button`
    width: 15rem;
    height: 2.5rem;
    margin: 2.5rem auto;
    display: block;
`;

const StyledBorder = styled.div`
    border: 1px solid #ccc;
    margin: 1.6rem auto 3.2rem auto;
    padding: 1rem;
    display: table;
`;

export default function Home(): ReactElement {
    useEffect(() => {
        fetch('/api/join-room').finally(() => {
            const socket = io();

            socket.on('connect', () => {
                console.log('connect');
                socket.emit('hello');
            });

            socket.on('hello', data => {
                console.log('hello', data);
            });

            socket.on('a user connected', () => {
                console.log('a user connected');
            });

            socket.on('disconnect', () => {
                console.log('disconnect');
            });
        });
    }, []);

    return (
        <Layout pageTitle="Title">
            <StyledBorder>
                <div>
                    <Title>Scrum Poker!</Title>
                </div>
                <StyledForm action="/api/get-create-room" method="post">
                    <StyledUnorderedList>
                        <StyledListItem>
                            <StyledLabel id="name">User Name</StyledLabel>
                            <StyledInput
                                id="name"
                                type="text"
                                name="user_name"
                            />
                        </StyledListItem>
                        <StyledListItem>
                            <StyledLabel id="room">Room Name</StyledLabel>
                            <StyledInput
                                id="room"
                                type="text"
                                name="room_name"
                            />
                        </StyledListItem>
                        <StyledListItem>
                            <StyledButton>Join Room</StyledButton>
                        </StyledListItem>
                    </StyledUnorderedList>
                </StyledForm>
            </StyledBorder>
        </Layout>
    );
}
