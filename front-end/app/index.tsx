import { Link } from "expo-router";
import { Text, View, Image, ImageBackground,
  FlatList, Dimensions, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import PostCard from "@/app/PostCard";
import AddPost from "@/app/AddPost";
import { PostData } from "@/interfaces";
import React, { use, useEffect, useState } from "react";
import { styles } from "@/styles/index";


const index: React.FC = () => {
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

  // Make sure this function exists here
  const handleAddPost = (newPost: PostData) => {
    setPosts([newPost, ...posts]);
  };
  
  return (

      <SafeAreaView style={styles.container}>
          <Text style={styles.header}>Social Feed</Text>

        <FlatList
          data={posts}
          keyExtractor={(item) => (item.id !== undefined ? item.id.toString() : Math.random().toString())}
          renderItem={({ item }) => <PostCard {...item} />}
          showsVerticalScrollIndicator={false}
          />

        <View style={styles.navLinks}>
          <TouchableOpacity>
            <Link href="/join">
              <Text style={styles.navText}>Join here</Text>
            </Link>
          </TouchableOpacity>
          <TouchableOpacity>
            <Link href="/signin">
              <Text style={styles.navText}>Sign In</Text>
              </Link>
            </TouchableOpacity>
        </View>

      {/* AddPost Component */}
      <AddPost onAdd={handleAddPost} currentCount={posts.length} />
      </SafeAreaView>
  );
};

export default index;