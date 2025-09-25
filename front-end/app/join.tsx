import React,  {useState }from "react";
import { Text, TextInput, View, TouchableOpacity, Image, ImageBackground, ScrollView, Alert} from "react-native";
import { styles } from "@/styles/_joinstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { HEROLOGO, BACKGROUNDIMAGE } from "@/constants/index";
import { useRouter } from "expo-router";

{/*` Join Component */}
export default function Join() {
    const router = useRouter();

    {/* State Variables */}
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    {/* Handle Join Function */}
    const handleJoin = async () => {
      if (!email || !password || !confirmPassword) {
        Alert.alert("Error", "Please fill in all fields");
        return;
      }
      {/* Check if passwords match */}
      if (password !== confirmPassword) {
        Alert.alert("Error", "Passwords do not match");
        return;
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/join`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to join");
        }
        {/* const data = await response.json(); */}
        const data = await response.json();
        console.log("Signup successful", data);

        Alert.alert("Success", "Account created successfully");
        {/* Redirect to Sign In page */}
        router.push("/signin");
      } catch (error: any) {
        {/* Handle error */}
        console.error(error);
        Alert.alert("Error", error.message);
      }
    };

  return (
    <SafeAreaProvider>
      {/* Background Image Section */}
      <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImage}
      resizeMode="cover">

        {/* Main Container Section */}
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}
        showsVerticalScrollIndicator={false}
        >

        {/* Main Container Section */}
        <View style={styles.iconsection}>
          <Ionicons name="arrow-back" size={25} color="#fff"
          onPress={() => router.back()} />
        </View>

        <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create your Account</Text>
        <Text style={styles.subText}>Enter your details to sign up and get started.</Text>
        </View>

        {/* Form Section */}
        <View style={styles.formGroup}>
           {/* Email Input Field */}
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
            keyboardType="email-address" 
            style={[styles.formControl, {color: "#fff"}]}
            value={email} onChangeText={setEmail} 
            />
          </View>


          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
              style={styles.passwordControl}
              secureTextEntry value={password} 
              onChangeText={setPassword} />

              <FontAwesome name="eye-slash" size={24} color="#B6FF00FF" />

            
            </View>
            <Text style={styles.formLabel}>Confirm Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
              style={styles.passwordControl}
              secureTextEntry value={confirmPassword}
              onChangeText={setConfirmPassword} 
              />
              <FontAwesome name="eye-slash" size={24} color="#B6FF00FF" />
            </View>
          </View>

          {/* Submit Button */}
        <TouchableOpacity style={styles.primaryButton} 
        onPress={handleJoin}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>

        {/* Sign In Link */}
        <View>
          <Text style={styles.signupTitleText}>Already have an account</Text>
          <Text style={[styles.signupTitleText, { color: "orange",
          fontWeight: "600" }]} onPress={() => router.push("/signin")}>Sign in</Text>

        </View>
       </View>
       </ScrollView>
       </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}