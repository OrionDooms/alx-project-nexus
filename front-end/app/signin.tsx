import { Text, TextInput, View, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { BACKGROUNDIMAGE} from "@/constants";
import { useRouter } from "expo-router";
import { useState } from "react";


{/* Sign In Component */}
export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    {/* Handle Sign In Function */}
    const handleSignIn = async (email: string, password: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signin`, {
      method: 'POST', headers: {  
        'Content-Type': 'application/json'
        // Add other headers if needed
      },
      body: JSON.stringify({
        email,
        password, 
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to sign in');
    }
    const data = await response.json();
    // Handle successful sign-in (e.g., store tokens, redirect)
  } catch (error) {
    console.error(error);
    // Handle error (e.g., show error message)
  }
};

    return (
    <SafeAreaProvider>
      {/* Background Image Section */}
      <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImage}
      resizeMode="cover">

      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}
        showsVerticalScrollIndicator={false}>

        {/* Main Container Section */}
        <View style={styles.iconsection}>
          <Ionicons name="arrow-back" size={25} color="#fff"
          onPress={() => router.back()} />
        </View>

        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Sign in to your Account</Text>
          <Text style={styles.subText}>Enter your email and password to sign in.</Text>
        </View>

        {/* Form Section */}
        <View style={styles.formGroup}>
          {/* Email Input Field */}
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
            keyboardType="email-address" placeholder="Enter your email"
            placeholderTextColor="#aaa" style={[styles.formControl, {color: "#fff"}]} 
            value={email}
            onChangeText={setEmail}
            />
          </View>

          {/* Password Input Field */}
          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
              style={[styles.passwordControl, {color: "#fff"}]} secureTextEntry
              placeholder="Enter your password" placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              />
              <FontAwesome name="eye-slash" size={24} color="#B6FF00FF" />
            </View>
          </View>

          {/* Forgot Password Link */}
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={() => handleSignIn(email, password)}>
          <Text style={styles.buttonText} onPress={() => router.push("/Post")}>Sign In</Text>
        </TouchableOpacity>

          {/* Sign Up Link */}
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={styles.signupTitleText}>Don't have an account?</Text>
          <Text style={[styles.signupTitleText, { color: "orange", fontWeight: "600" }]}
          onPress={() => router.push("/join")}>Join now</Text>
        </View>

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
    </SafeAreaProvider>
  );
};