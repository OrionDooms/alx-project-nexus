import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";

type CommentsProps = { postId: string };

export default function Comments({ postId }: CommentsProps) {
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState("");

    const addComment = () => {
        if (!newComment.trim) return;
        setComments([...comments, newComment]);
        setNewComment("");
    };
    
    return (
    <View>
        {comments.map((c, i) => (
            <Text key={i}>{c}</Text>
            ))}
            
            <TextInput
            placeholder="Write a comment..."
            value={newComment}
            onChangeText={setNewComment}
            style={{ borderBottomWidth: 1, marginVertical: 5 }}
            />
            
        <TouchableOpacity onPress={addComment}>
            <Text style={{ color: "blue" }}>Post</Text>
        </TouchableOpacity>  
        </View>
    );
}