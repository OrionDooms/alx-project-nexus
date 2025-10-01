import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

interface LikesProps {
    postId: string | number;
}

export default function Likes({ postId }: LikesProps) {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(0);

    const toggleLike = () => {
        setLiked(!liked);
        setCount(liked ? count - 1 : count + 1);
    };

    return (
        <TouchableOpacity onPress={toggleLike}>
            <Text>{liked ? 'Unlike' : 'Like'} {count}</Text>
        </TouchableOpacity>
    );
}