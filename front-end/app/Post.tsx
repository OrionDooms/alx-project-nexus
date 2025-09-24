import { Link, router } from "expo-router";
import { Text, View, Image, ImageBackground,
  FlatList, Dimensions, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import PostCard from "@/app/PostCard";
import AddPost from "@/app/AddPost";
import { PostData } from "@/interfaces";
import React, { use, useEffect, useState } from "react";
import { styles } from "@/styles/index";
import { BACKGROUNDIMAGE } from "@/constants";

{/* Main component to display posts and navigation links */}
const index: React.FC = () => {
  // This holds all posts shown in the feed
  const [posts, setPosts] = useState<PostData[]>([]);

// fetch some starter posts
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      };
    fetchPosts();
  }, []);

  // Add new post to the top of the feed
  const handleAddPost = (newPost: PostData) => {
    setPosts([newPost, ...posts]);
  };
  
  return (
    <ImageBackground
      source={BACKGROUNDIMAGE}
      style={styles.backgroundImageContainer}
      resizeMode="cover">

        {/* Top bar with Logo*/}
        <View style={styles.topBar}>
          <Text style={styles.pageTitle}>SocialHub</Text>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={styles.logoutButton}>Logout</Text>
            </TouchableOpacity>
          </View>

          {/* List of Post
          <NewPost onAdd={handleAddPost} />*/}

          {/* This takes the posts array and renders each post
          as a list item. */}
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.postCard}>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text style={styles.postBody}>{item.body}</Text>
            </View>
          )}
          />

      {/* AddPost Component */}
      <AddPost onAdd={handleAddPost} currentCount={posts.length} />
 </ImageBackground> 
 );
};

export default index;