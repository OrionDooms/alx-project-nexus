import React from "react";
import { View, Text, TouchableOpacity, Share as RNShare } from "react-native";

export default function Share({ postId }: { postId: string }) {
    const handleShare = async() => {
        try {
            await RNShare.share({
                message: `Check out this post: https://yourapp.com/posts/${postId}`,
            });
        } catch (error) {
            console.error("Error sharing post:", error);
        }
    };

    return (
        <TouchableOpacity onPress={handleShare}>
            <Text>Share</Text>
        </TouchableOpacity>
    );
}