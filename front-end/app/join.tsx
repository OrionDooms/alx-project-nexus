import React from "react";
import { Text, TextInput, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { HEROLOGO, GOOGLELOGO, FACEBOOKLOGO, HEROLOGOGREEN } from "@/constants/index";
import { useRouter } from "expo-router";

export default function Join() {
    const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}
        showsVerticalScrollIndicator={false}>

        <View style={styles.iconsection}>
          <Ionicons name="arrow-back" size={25} onPress={() => router.back()} />
           </View>

        <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create your Account</Text>
        <Text style={styles.subText}>
          Enter your details to sign up and get started.
        </Text>
        </View>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
            keyboardType="email-address"
            style={[styles.formControl, { color: '#ffffff' }]}/>
          </View>


          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
              style={styles.passwordControl}
              secureTextEntry/>
              <FontAwesome name="eye-slash" size={24} color="#B6FF00FF" />
            </View>
            <Text style={styles.formLabel}>Confirm Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
              style={styles.passwordControl}
              secureTextEntry/>
              <FontAwesome name="eye-slash" size={24} color="#B6FF00FF" />
            </View>
          </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>
       

        <View>
          <Text style={styles.signupTitleText}>Already have an account</Text>
          <Text style={[styles.signupTitleText, { color: "orange",
          fontWeight: "600" }]} onPress={() => router.push("/signin")}>Sign in</Text>
        </View>
        </View>
          </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}