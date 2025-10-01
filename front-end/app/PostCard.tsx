import { PostData } from "@/interfaces/index";
import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import{ styles } from "@/styles/_postCard";
import Share from "@/app/share";
import Comments from "./comments";
import Likes from "./likes";

interface PostCardProps {
  id: string;
  user: string;
  content: string;
  image?: string;
}

export default function PostCard({ post }: { post: PostData }) {
  return (
    <View style={styles.Card}>
      {/*<Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>*/}

      <View style={styles.actions}>
        <Likes postId={post.id ?? ""} />
        <Comments postId={String(post.id ?? "")} />
        <Share postId={String(post.id ?? "")} />
      </View>
    </View>
  );
}