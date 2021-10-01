// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type keyValuePair = {
    [key: string]: number;
};
const someArray: keyValuePair = {};

type RequestData = {
    user_name: string;
    room_name: string;
};

type Data = {
    roomId: number;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const requestData = req.body as RequestData;
    if (requestData.room_name?.length > 0) {
        let roomId = someArray[requestData.room_name];
        if (roomId === undefined) {
            createRoom(requestData.room_name);
            roomId = someArray[requestData.room_name];
            console.log('Room created');
        }
        res.status(200).json({ roomId: roomId });

        console.log('Room Id', roomId);
    }
}

function createRoom(roomName: string) {
    someArray[roomName] = Object.keys(someArray).length;
    console.log(Object.keys(someArray));
}
